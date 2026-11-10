---
title: "Tutorial: add a sign that players can write on"
description: Build a sign in Roblox Studio that shows a player's message to everyone, with the text checked and filtered on the server.
sidebar_label: "Tutorial: a filtered sign"
draft: true
---

import AboutSample from '@site/src/components/AboutSample';
import Steps from '@site/src/components/Steps';

<AboutSample
  roles={['Trust and safety documentation']}
  audience="New Roblox creators who have placed parts and written a first script in Studio."
  goal="Get a creator from an empty baseplate to a working, filtered sign, and leave them with a pattern to reuse for any player-written text."
  constraints="Based only on the public Roblox Creator documentation. Unofficial. The code has to be tested, and the page says exactly which parts were tested and how."
  tools="Roblox Studio, Luau, the Luau command-line tool for unit tests, GitHub Actions.">

- **The safety checks live in a module with no Roblox calls.** That makes them testable outside Studio, so the build can prove them on every change.
- **Each step ends with something to see.** A creator finds a mistake at the step that caused it.
- **The page states what was and was not tested.** The module's tests run in CI. The Studio steps were run by hand.

</AboutSample>

{/* DRAFT. Not published until Jordan has run every step in Roblox Studio and confirmed the result of each. The module tests run in CI; the Studio steps have NOT been run. Update the "How this was tested" section with the Studio version and date. */}

:::note Unofficial sample
This tutorial is an unofficial writing sample. It is not affiliated with, endorsed by or reviewed by Roblox. It is based on the public [Roblox Creator documentation](https://create.roblox.com/docs/ui/text-filtering) as it read on November 10, 2026.
:::

In this tutorial you build a sign that any player can write on. Everyone in the server sees the message, so the text must be filtered. For the reasons, read [Why and where to filter player text](./text-filtering-concept.md).

**Time:** about 30 minutes.

## What you will build

- A sign in the world that shows one line of text.
- A text box on each player's screen.
- A server script that checks the text, filters it and updates the sign.

The full code is in [`examples/filtered-sign`](https://github.com/kopyk/portfolio/tree/main/examples/filtered-sign).

## Before you start

- Install Roblox Studio and open a new **Baseplate** experience.
- Know how to insert an object in the **Explorer** window and how to open a script.

## Step 1: Build the sign

<Steps>

1. In the **Explorer** window, insert a **Part** into **Workspace**. Rename it `Sign`.
2. Resize the part into a flat board and set **Anchored** to on.
3. Insert a **SurfaceGui** into `Sign`. Set its **Face** to the side that players will see.
4. Insert a **TextLabel** into the SurfaceGui. Set **Size** to `{1, 0}, {1, 0}`, turn on **TextScaled**, and set **Text** to `Write here`.

</Steps>

**Check:** the sign shows "Write here" in the viewport.

## Step 2: Add the event and the text box

<Steps>

1. Insert a **RemoteEvent** into **ReplicatedStorage**. Rename it `UpdateSign`.
2. Insert a **ScreenGui** into **StarterGui**. Rename it `SignGui`.
3. Insert a **TextBox** into `SignGui`. Place it near the bottom of the screen. Set **PlaceholderText** to `Type a message, then press Enter` and clear **Text**.

</Steps>

**Check:** select **Play**. The text box is on screen. Typing in it does nothing yet. Select **Stop**.

## Step 3: Add the rules module

The rules are plain checks: the text must be a string, must not be empty, and must be 60 characters or fewer. The module also gives each player a 5-second cooldown.

<Steps>

1. Insert a **ModuleScript** into **ServerScriptService**. Rename it `SignRules`.
2. Replace its contents with [`SignRules.luau`](https://github.com/kopyk/portfolio/blob/main/examples/filtered-sign/SignRules.luau).

</Steps>

The part that matters most:

```lua
function SignRules.clean(text: any): (boolean, string)
	if type(text) ~= "string" then
		return false, "Text must be a string."
	end

	-- Trim the ends and collapse runs of spaces, tabs and line breaks.
	local tidy = (text:match("^%s*(.-)%s*$") or ""):gsub("%s+", " ")

	local length = utf8.len(tidy)
	if length == nil then
		return false, "Text is not valid UTF-8."
	end
	if length == 0 then
		return false, "Text is empty."
	end
	if length > SignRules.MAX_LENGTH then
		return false, "Text is too long."
	end

	return true, tidy
end
```

The parameter type is `any` on purpose. A client can send any value on a RemoteEvent, so the first check is the type.

## Step 4: Add the server script

<Steps>

1. Insert a **Script** into **ServerScriptService**. Rename it `SignServer`.
2. Replace its contents with this code.

</Steps>

```lua
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TextService = game:GetService("TextService")

local SignRules = require(script.Parent.SignRules)

local updateSign = ReplicatedStorage:WaitForChild("UpdateSign")
local label = workspace:WaitForChild("Sign"):WaitForChild("SurfaceGui"):WaitForChild("TextLabel")
local cooldown = SignRules.newCooldown(SignRules.COOLDOWN_SECONDS)

-- Returns text that is safe to show to everyone, or nil if filtering failed.
local function filterForEveryone(text: string, fromUserId: number): string?
	local ok, result = pcall(function()
		local filterResult = TextService:FilterStringAsync(text, fromUserId, Enum.TextFilterContext.PublicChat)
		return filterResult:GetNonChatStringForBroadcastAsync()
	end)
	if ok then
		return result
	end
	warn("Text filtering failed: " .. tostring(result))
	return nil
end

updateSign.OnServerEvent:Connect(function(player: Player, text: any)
	local valid, tidy = SignRules.clean(text)
	if not valid then
		return
	end
	if not cooldown.try(player.UserId, os.clock()) then
		return
	end

	local filtered = filterForEveryone(tidy, player.UserId)
	if filtered == nil then
		-- If filtering fails, show nothing. Never fall back to the raw text.
		return
	end

	label.Text = filtered
end)

Players.PlayerRemoving:Connect(function(player: Player)
	cooldown.forget(player.UserId)
end)
```

What each part does:

- **`OnServerEvent`** gives you the player who sent the event as the first argument. You do not send it from the client, and a client cannot fake it.
- **`SignRules.clean`** and **`cooldown.try`** run before the filter, so bad input never reaches the filter service.
- **`pcall`** catches a filter failure. On failure the function returns `nil` and the sign does not change.
- **`GetNonChatStringForBroadcastAsync`** is the method for text that everyone in the server can see.

## Step 5: Add the client script

<Steps>

1. Insert a **LocalScript** into the **TextBox**. Rename it `SignClient`.
2. Replace its contents with this code.

</Steps>

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local updateSign = ReplicatedStorage:WaitForChild("UpdateSign")
local textBox = script.Parent

textBox.FocusLost:Connect(function(enterPressed: boolean)
	if not enterPressed then
		return
	end
	updateSign:FireServer(textBox.Text)
	textBox.Text = ""
end)
```

The client sends the text and clears the box. It does not touch the sign.

## Step 6: Test it

<Steps>

1. Select **Play**.
2. Type `Welcome to my shop` in the text box and press Enter.

   **Check:** the sign shows the message.

3. Right away, type a second message and press Enter.

   **Check:** the sign does not change. The cooldown refused the message.

4. Wait 5 seconds and send a message longer than 60 characters.

   **Check:** the sign does not change.

5. Select **Stop**.

</Steps>

## If something goes wrong

| What you see | Likely cause |
| --- | --- |
| `Infinite yield possible` in the **Output** window | A name does not match. Check `Sign`, `SurfaceGui`, `TextLabel` and `UpdateSign` for spelling and capital letters. |
| Nothing happens when you press Enter | `SignClient` is not inside the TextBox, or it is a Script and not a LocalScript. |
| `Text filtering failed` in the **Output** window | The filter service did not answer. The sign keeps its old text, which is the intended result. |
| The sign never changes | `SignServer` is not in **ServerScriptService**, or `SignRules` is not next to it. |

## How this was tested

| Part | How | Result |
| --- | --- | --- |
| `SignRules` module | 16 unit tests in [`SignRules.spec.luau`](https://github.com/kopyk/portfolio/blob/main/examples/filtered-sign/SignRules.spec.luau), run on the Luau command-line tool by GitHub Actions on every change | See the CI status on the repository |
| Studio steps 1 to 6 | Run by hand in Roblox Studio | **Not yet run.** [JORDAN: run every step, then record the Studio version and the date here.] |

## Reuse the pattern

Any feature that shows one player's words to another follows the same four moves: send from the client, check on the server, filter on the server, and show only the filtered result.
