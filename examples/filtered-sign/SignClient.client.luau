-- SignClient: a LocalScript inside the TextBox (StarterGui > SignGui > TextBox).
-- Sends what the player typed to the server. It does not change the sign
-- itself: only the server does, after filtering.

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
