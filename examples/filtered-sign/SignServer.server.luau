-- SignServer: a Script in ServerScriptService, next to the SignRules ModuleScript.
-- Receives text from a player, checks it, filters it, and shows it on the sign.

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
