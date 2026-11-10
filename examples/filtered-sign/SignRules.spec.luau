-- Tests for SignRules. Run from this folder: luau SignRules.spec.luau
local SignRules = require("./SignRules")

local passed, failed = 0, 0

local function check(name: string, condition: boolean)
	if condition then
		passed += 1
	else
		failed += 1
		print("FAIL  " .. name)
	end
end

-- clean: accepts and tidies
do
	local ok, text = SignRules.clean("  Welcome   to\tmy\nshop  ")
	check("tidies spaces", ok and text == "Welcome to my shop")
end
do
	local ok, text = SignRules.clean(string.rep("a", SignRules.MAX_LENGTH))
	check("accepts text at the limit", ok and #text == SignRules.MAX_LENGTH)
end
do
	-- 60 two-byte characters: within the limit in characters, not in bytes.
	local ok = SignRules.clean(string.rep("é", SignRules.MAX_LENGTH))
	check("counts characters, not bytes", ok)
end

-- clean: rejects
check("rejects a number", SignRules.clean(42) == false)
check("rejects nil", SignRules.clean(nil) == false)
check("rejects a table", SignRules.clean({}) == false)
check("rejects empty text", SignRules.clean("") == false)
check("rejects only spaces", SignRules.clean("   \n ") == false)
check("rejects text over the limit", SignRules.clean(string.rep("a", SignRules.MAX_LENGTH + 1)) == false)
check("rejects invalid UTF-8", SignRules.clean("\255\254") == false)
do
	local _, reason = SignRules.clean(string.rep("a", 61))
	check("gives a reason", reason == "Text is too long.")
end

-- cooldown
do
	local cooldown = SignRules.newCooldown(5)
	check("first message is allowed", cooldown.try(1, 100) == true)
	check("second message inside the cooldown is refused", cooldown.try(1, 104.9) == false)
	check("a refused message does not restart the cooldown", cooldown.try(1, 105) == true)
	check("players do not share a cooldown", cooldown.try(2, 105.1) == true)
	cooldown.forget(1)
	check("forget clears a player", cooldown.try(1, 105.2) == true)
end

print(string.format("%d passed, %d failed", passed, failed))
if failed > 0 then
	error("SignRules tests failed")
end
