StartupEvents.registry("block", (event) => {
    const MODID = "fwnc:"
    const toolType = {
		sword: "minecraft:mineable/sword",
		pickaxe: "minecraft:mineable/pickaxe",
		axe: "minecraft:mineable/axe",
		shovel: "minecraft:mineable/shovel",
		hoe: "minecraft:mineable/hoe"
	}
	const miningLevel = {
		wooden: "minecraft:needs_wooden_tool",
		stone: "minecraft:needs_stone_tool",
		iron: "minecraft:needs_iron_tool",
		gold: "minecraft:needs_gold_tool",
		diamond: "minecraft:needs_diamond_tool"
	}
    let MaterialRegisters = [
		["wrought_iron_block", "wrought_iron", "stone", 6, "pickaxe", "iron"],
	]
    MaterialRegisters.forEach(([name, material, soundType, hardness, tool, level]) => {
		event.create(MODID + name)
			.soundType(soundType)
			.hardness(hardness)
			.resistance(hardness)
			.tagBlock(toolType[tool])
			.tagBlock(miningLevel[level])
			.tagItem("c:storage_blocks/" + material)
			.requiresTool(true)
	})
})