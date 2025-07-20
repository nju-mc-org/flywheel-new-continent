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
                chance: 0.4,
                output: {
                    id: 'create:ochrum'
                }
            },
            {
                chance: 0.3,
                output: {
                    id: 'minecraft:tuff'
                }
            },
            {
                chance: 0.3,
                output: {
                    id: 'minecraft:dripstone_block'
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
                    id: 'minecraft:gravel'
                }
            }
        ],
        weight: 20
    }).id("immersiveengineering:mineral/ochrum")

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
                chance: 0.4,
                output: {
                    id: 'create:asurine'
                }
            },
            {
                chance: 0.3,
                output: {
                    id: 'minecraft:tuff'
                }
            },
            {
                chance: 0.3,
                output: {
                    id: 'minecraft:calcite'
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
                    id: 'minecraft:gravel'
                }
            }
        ],
        weight: 20
    }).id("immersiveengineering:mineral/asurine")

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
                chance: 0.4,
                output: {
                    id: 'create:crimsite'
                }
            },
            {
                chance: 0.3,
                output: {
                    id: 'minecraft:tuff'
                }
            },
            {
                chance: 0.3,
                output: {
                    id: 'create:limestone'
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
                    id: 'minecraft:gravel'
                }
            }
        ],
        weight: 20
    }).id("immersiveengineering:mineral/crimsite")

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
                chance: 0.4,
                output: {
                    id: 'create:veridium'
                }
            },
            {
                chance: 0.2,
                output: {
                    id: 'minecraft:tuff'
                }
            },
            {
                chance: 0.2,
                output: {
                    id: 'minecraft:andesite'
                }
            },
            {
                chance: 0.2,
                output: {
                    id: 'minecraft:smooth_basalt'
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
                    id: 'minecraft:gravel'
                }
            }
        ],
        weight: 20
    }).id("immersiveengineering:mineral/veridium")

    event.recipes.createoreexcavation.vein('{"text": "\u9f99\u606f"}', 'minecraft:dragon_breath').placement(128, 48, 34883410).id("fwnc:vein/dragon_breath")
	    .priority(2)
	    .veinSize(0.5, 4)
	    .biomeWhitelist('minecraft:is_end') 
    event.recipes.createoreexcavation.extracting('create_dragons_plus:dragon_breath 250', 'fwnc:vein/dragon_breath', 640).id("fwnc:vein_extracting/dragon_breath_vein")
	    .drill('createoreexcavation:netherite_drill')
	    .stress(1024)

    event.recipes.createoreexcavation.vein('{"text": "\u7194\u5ca9"}', 'minecraft:lava_bucket').placement(64, 8, 34883410).id("fwnc:vein/lava")
    	.priority(8)
    	.veinSize(4, 16)
    	.biomeWhitelist('minecraft:is_nether') 
    event.recipes.createoreexcavation.extracting('minecraft:lava 500', 'fwnc:vein/lava', 160).id("fwnc:vein_extracting/lava_vein")
	    .drill('createoreexcavation:diamond_drill')
	    .stress(512)
})