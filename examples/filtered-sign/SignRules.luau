--!strict
-- SignRules: the checks a sign message must pass before it is filtered.
--
-- This module has no Roblox calls in it, so it runs in Studio as a
-- ModuleScript and on the standalone Luau CLI, where its tests run
-- (SignRules.spec.luau).

local SignRules = {}

SignRules.MAX_LENGTH = 60
SignRules.COOLDOWN_SECONDS = 5

-- Checks text sent by a client. Never trust the type or the length of
-- anything a client sends.
-- Returns true and the tidied text, or false and the reason.
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

-- A per-player cooldown. `try` returns true and starts the cooldown, or
-- returns false if the player's last accepted message was too recent.
function SignRules.newCooldown(seconds: number)
	local lastAccepted: {[number]: number} = {}
	local cooldown = {}

	function cooldown.try(userId: number, now: number): boolean
		local last = lastAccepted[userId]
		if last ~= nil and now - last < seconds then
			return false
		end
		lastAccepted[userId] = now
		return true
	end

	-- Call when a player leaves so the table does not grow forever.
	function cooldown.forget(userId: number)
		lastAccepted[userId] = nil
	end

	return cooldown
end

return SignRules
