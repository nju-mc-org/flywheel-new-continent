ServerEvents.recipes(event => {
    event.custom({
        type: 'immersiveengineering:mineral_mix',
        biome_predicates: [
            [
                'minecraft:is_overworld'
            ]
        ],
        fail_chance: 0.1,
        ores: [
            {
                chance: 0.6,
                output: {
                    tag: "c:ores/zinc"
                }
            },
            {
                chance: 0.2,
                output: {
                    tag: "c:ores/iron"
                }
            },
            {
                chance: 0.2,
                output: {
                    tag: "c:dusts/sulfur"
                }
            }
        ],
        spoils: [
            {
                chance: 0.5,
                output: {
                    count: 1,
                    id: 'minecraft:cobblestone'
                }
            },
            {
                chance: 0.3,
                output: {
                    count: 1,
                    id: 'minecraft:cobbled_deepslate'
                }
            },
            {
                chance: 0.2,
                output: {
                    count: 1,
                    id: 'create:asurine'
                }
            }
        ],
        weight: 20
    }).id("immersiveengineering:mineral/zinc")
})