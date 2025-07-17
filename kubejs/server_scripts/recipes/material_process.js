ServerEvents.recipes(event => {
    //alloy
    event.custom({
        type: 'immersiveengineering:alloy',
        input0: {
            tag: "c:nuggets/iron"
        },
        input1: {
            item: "minecraft:andesite"
        },
        result: {
            basePredicate: {
                item: "create:andesite_alloy"
            },
            count: 1
        }
    }).id("fwnc:ie_alloy/andesite_alloy_from_iron")
    event.custom({
        type: 'immersiveengineering:alloy',
        input0: {
            tag: "c:nuggets/zinc"
        },
        input1: {
            item: "minecraft:andesite"
        },
        result: {
            basePredicate: {
                item: "create:andesite_alloy"
            },
            count: 1
        }
    }).id("fwnc:ie_alloy/andesite_alloy_from_zinc")
    event.custom({
        type: 'immersiveengineering:alloy',
        input0: {
            tag: "c:nuggets/wrought_iron"
        },
        input1: {
            item: "minecraft:andesite"
        },
        result: {
            basePredicate: {
                item: "create:andesite_alloy"
            },
            count: 2
        }
    }).id("fwnc:ie_alloy/andesite_alloy_from_wrought_iron")
    event.custom({
        type: 'immersiveengineering:alloy',
        input0: {
            tag: "c:nuggets/steel"
        },
        input1: {
            item: "minecraft:andesite"
        },
        result: {
            basePredicate: {
                item: "create:andesite_alloy"
            },
            count: 3
        }
    }).id("fwnc:ie_alloy/andesite_alloy_from_steel")

    //alloy_create
    event.custom({
        type: 'create:mixing',
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:ingots/iron"
            },
            {
                tag: "minecraft:coals"
            }
        ],
        results: [
            {
                count: 1,
                id: "fwnc:wrought_iron_ingot"
            }
        ]
    }).id("fwnc:mixing/wrought_steel")
    event.remove({ id: 'createaddition:compat/immersiveengineering/constantan' })
    event.custom({
        type: 'create:mixing',
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:ingots/nickel"
            },
            {
                tag: "c:ingots/copper"
            }
        ],
        results: [
            {
                count: 2,
                id: "immersiveengineering:ingot_constantan"
            }
        ]
    }).id("fwnc:mixing/constantan")

    //transform
    function IngotToPlate(name, ingot, plate) {
        event.shaped(Item.of(plate, 1), [
            'H',
            'I',
            'I'
        ],
        {
            I: ingot,
            H: 'immersiveengineering:hammer'
        }).id(`fwnc:crafting/ingot_to_plate_${name}`).damageIngredient({ item: 'immersiveengineering:hammer'}, 1)
    }
    function NewMetal(material) {
        event.shaped(Item.of(`fwnc:${material}_nugget`, 9), [
            'I'
        ],
        {
            I: `#c:ingots/${material}`
        }).id(`fwnc:crafting/ingot_to_nugget_${material}`)
        event.shaped(Item.of(`fwnc:${material}_ingot`, 1), [
            'NNN',
            'NNN',
            'NNN'
        ],
        {
            N: `#c:nuggets/${material}`
        }).id(`fwnc:crafting/nugget_to_ingot_${material}`)
        event.shaped(Item.of(`fwnc:${material}_ingot`, 9), [
            'B'
        ],
        {
            B: `#c:storage_blocks/${material}`
        }).id(`fwnc:crafting/block_to_ingot_${material}`)
        event.shaped(Item.of(`fwnc:${material}_block`, 1), [
            'III',
            'III',
            'III'
        ],
        {
            I: `#c:ingots/${material}`
        }).id(`fwnc:crafting/ingot_to_block_${material}`)
        event.shaped(Item.of(`fwnc:${material}_plate`, 1), [
            'H',
            'I',
            'I'
        ],
        {
            I: `#c:ingots/${material}`,
            H: 'immersiveengineering:hammer'
        }).id(`fwnc:crafting/ingot_to_plate_${material}`).damageIngredient({ item: 'immersiveengineering:hammer'}, 1)
        event.custom({
            type: 'create:crushing',
            ingredients: [
                {
                    tag: `c:ingots/${material}`
                }
            ],
            results: [
                {
                    id: `fwnc:${material}_dust`
                }
            ],
            processingTime: 300
        }).id(`fwnc:crushing_wheel/ingot_to_dust_${material}`)
        event.custom({
            type: 'immersiveengineering:crusher',
            energy: 3000,
            input: {
                tag: `c:ingots/${material}`
            },
            result: {
                item: `fwnc:${material}_dust`
            }
        }).id(`fwnc:ie_crusher/ingot_to_dust_iecrusher_${material}`)
        event.custom({
            type: 'create:pressing',
            ingredients: [
                {
                    tag: `c:ingots/${material}`
                }
            ],
            results: [
                {
                id: `fwnc:${material}_plate`
                }
            ]
        }).id(`fwnc:pressing/ingot_to_plate_pressing_${material}`)
        event.custom({
            type: 'immersiveengineering:metal_press',
            energy: 2400,
            input: {
                tag: `c:ingots/${material}`
            },
            mold: "immersiveengineering:mold_plate",
            result: {
                id: `fwnc:${material}_plate`
            }
        }).id(`fwnc:ie_metal_press/ingot_to_plate_iepress_${material}`)
        event.custom({
            type: 'createaddition:rolling',
            input: {
                tag: `c:ingots/${material}`
            },
            result: {
                count: 2,
                id: `fwnc:${material}_rod`
            }
        }).id(`fwnc:rolling/ingot_to_rod_rolling_${material}`)
        event.custom({
            type: 'immersiveengineering:metal_press',
            energy: 2400,
            input: {
                tag: `c:ingots/${material}`
            },
            mold: "immersiveengineering:mold_rod",
            result: {
                count: 2,
                id: `fwnc:${material}_rod`
            }
        }).id(`fwnc:ie_metal_press/ingot_to_rod_iepress_${material}`)
    }

    event.remove({ id: 'immersiveengineering:crafting/plate_iron_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_iron' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_iron' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_iron' })
    IngotToPlate("iron", "#c:ingots/iron", "create:iron_sheet")
    event.shaped(Item.of('createaddition:iron_wire', 1), [
        'PW'
    ],
    {
        P: '#c:plates/iron',
        W: 'immersiveengineering:wirecutter'
    }).id(`fwnc:crafting/wirecut_iron`).damageIngredient({ item: 'immersiveengineering:wirecutter'}, 1)
    event.custom({
        type: 'create:cutting',
        ingredients: [
            {
                tag: 'c:plates/iron'
            }
        ],
        processing_time: 50,
        results: [
            {
                count: 2,
                id: 'createaddition:iron_wire'
            }
        ]
    }).id(`fwnc:cutting/wirecut_iron_cutter`)

    event.remove({ id: 'immersiveengineering:crafting/plate_copper_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_copper' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_copper' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_copper' })
    IngotToPlate("copper", "#c:ingots/copper", "create:copper_sheet")

    event.remove({ id: 'immersiveengineering:crafting/plate_gold_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_gold' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_gold' })
    IngotToPlate("gold", "#c:ingots/gold", "create:golden_sheet")
    event.shaped(Item.of('createaddition:gold_wire', 1), [
        'PW'
    ],
    {
        P: '#c:plates/gold',
        W: 'immersiveengineering:wirecutter'
    }).id(`fwnc:crafting/wirecut_gold`).damageIngredient({ item: 'immersiveengineering:wirecutter'}, 1)
    event.custom({
        type: 'create:cutting',
        ingredients: [
            {
                tag: 'c:plates/gold'
            }
        ],
        processing_time: 50,
        results: [
            {
                count: 2,
                id: 'createaddition:gold_wire'
            }
        ]
    }).id(`fwnc:cutting/wirecut_gold_cutter`)

    IngotToPlate("brass", "#c:ingots/brass", "create:brass_sheet")
    IngotToPlate("zinc", "#c:ingots/zinc", "createaddition:zinc_sheet")

    event.remove({ id: 'immersiveengineering:crafting/plate_silver_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_silver' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_silver' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_silver' })
    IngotToPlate("silver", "#c:ingots/silver", "immersiveengineering:plate_silver")

    event.remove({ id: 'immersiveengineering:crafting/plate_nickel_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_nickel' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_nickel' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_nickel' })
    IngotToPlate("nickel", "#c:ingots/nickel", "immersiveengineering:plate_nickel")

    event.remove({ id: 'immersiveengineering:crafting/plate_lead_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_lead' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_lead' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_lead' })
    IngotToPlate("lead", "#c:ingots/lead", "immersiveengineering:plate_lead")

    event.remove({ id: 'immersiveengineering:crafting/plate_aluminum_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_aluminum' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_aluminum' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_aluminum' })
    IngotToPlate("aluminum", "#c:ingots/aluminum", "immersiveengineering:plate_aluminum")

    event.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_uranium' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_uranium' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_uranium' })
    IngotToPlate("uranium", "#c:ingots/uranium", "immersiveengineering:plate_uranium")

    event.remove({ id: 'immersiveengineering:crafting/plate_electrum_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_electrum' })
    IngotToPlate("electrum", "#c:ingots/electrum", "immersiveengineering:plate_electrum")

    event.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_steel' })
    IngotToPlate("steel", "#c:ingots/steel", "immersiveengineering:plate_steel")

    event.remove({ id: 'immersiveengineering:crafting/plate_constantan_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/stick_constantan' })
    IngotToPlate("constantan", "#c:ingots/constantan", "immersiveengineering:plate_constantan")

    event.remove({ id: 'immersiveengineering:crafting/stick_netherite' })
    event.custom({
        type: 'createaddition:rolling',
        input: {
            tag: 'c:ingots/netherite'
        },
        result: {
            count: 2,
            id: 'immersiveengineering:stick_netherite'
        }
    }).id('fwnc:rolling/ingot_to_rod_rolling_netherite')

    NewMetal("wrought_iron")

    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 2400,
        input: {
            item: 'create:pulp'
        },
        mold: "immersiveengineering:mold_plate",
        result: {
            id: 'create:cardboard'
        }
    }).id('fwnc:ie_metal_press/iepress_cardboard')

    //dup_tranform
    function Deduplication(name, input, output, count) {
        event.shapeless(Item.of(output, count),[input]).id(`fwnc:dedup/${name}`)
    }
    /*
    Deduplication("onion", "minecolonies:onion", "farmersdelight:onion", 2)
    Deduplication("wheat", "minecolonies:durum", "minecraft:wheat", 2)
    Deduplication("tomato", "minecolonies:tomato", "farmersdelight:tomato", 2)
    Deduplication("cabbage", "minecolonies:cabbage", "farmersdelight:cabbage", 2)
    Deduplication("rice", "minecolonies:rice", "farmersdelight:rice", 2)
    */

    //stones
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "minecraft:dripstone_block"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "minecraft:water"
            }
        ],
        results: [
            {
                id: "minecraft:pointed_dripstone",
                count: 6
            }
        ]
    }).id("fwnc:filling/dripstones")

    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:cobblestone"
            },
            {
                item: "minecraft:gold_nugget"
            },
            {
                item: "minecraft:gold_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:ochrum"
            },
            {
                id: "create:ochrum",
                chance: 0.25
            }
        ]
    }).id("fwnc:compacting/ochrums")
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "minecraft:stone"
            },
            {
                item: "minecraft:gold_nugget"
            },
            {
                item: "minecraft:gold_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:ochrum"
            },
            {
                id: "create:ochrum",
                count: 2,
                chance: 0.5
            }
        ]
    }).id("fwnc:compacting/ochrums_heated")
     event.custom({
        type: 'create:compacting',
        heat_requirement: "superheated",
        ingredients: [
            {
                item: "minecraft:deepslate"
            },
            {
                item: "minecraft:gold_nugget"
            },
            {
                item: "minecraft:gold_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:ochrum"
            },
            {
                id: "create:ochrum",
                count: 3
            }
        ]
    }).id("fwnc:compacting/ochrums_superheated")

    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:cobblestone"
            },
            {
                item: "minecraft:iron_nugget"
            },
            {
                item: "minecraft:iron_nugget",
            },
            {
                item: "minecraft:iron_nugget"
            },
            {
                item: "minecraft:iron_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:crimsite"
            },
            {
                id: "create:crimsite",
                chance: 0.25
            }
        ]
    }).id("fwnc:compacting/crimsites")
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "minecraft:stone"
            },
            {
                item: "minecraft:iron_nugget"
            },
            {
                item: "minecraft:iron_nugget",
            },
            {
                item: "minecraft:iron_nugget"
            },
            {
                item: "minecraft:iron_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:crimsite"
            },
            {
                id: "create:crimsite",
                count: 2,
                chance: 0.5
            }
        ]
    }).id("fwnc:compacting/crimsites_heated")
     event.custom({
        type: 'create:compacting',
        heat_requirement: "superheated",
        ingredients: [
            {
                item: "minecraft:deepslate"
            },
            {
                item: "minecraft:iron_nugget"
            },
            {
                item: "minecraft:iron_nugget",
            },
            {
                item: "minecraft:iron_nugget"
            },
            {
                item: "minecraft:iron_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:crimsite"
            },
            {
                id: "create:crimsite",
                count: 3
            }
        ]
    }).id("fwnc:compacting/crimsites_superheated")

    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:cobblestone"
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:veridium"
            },
            {
                id: "create:veridium",
                chance: 0.25
            }
        ]
    }).id("fwnc:compacting/veridiums")
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "minecraft:stone"
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:veridium"
            },
            {
                id: "create:veridium",
                count: 2,
                chance: 0.5
            }
        ]
    }).id("fwnc:compacting/veridiums_heated")
     event.custom({
        type: 'create:compacting',
        heat_requirement: "superheated",
        ingredients: [
            {
                item: "minecraft:deepslate"
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                item: "create:copper_nugget"
            },
            {
                item: "create:copper_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:veridium"
            },
            {
                id: "create:veridium",
                count: 3
            }
        ]
    }).id("fwnc:compacting/veridiums_superheated")

    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:cobblestone"
            },
            {
                item: "create:zinc_nugget"
            },
            {
                item: "create:zinc_nugget",
            },
            {
                item: "create:zinc_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:asurine"
            },
            {
                id: "create:asurine",
                chance: 0.25
            }
        ]
    }).id("fwnc:compacting/asurines")
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "minecraft:stone"
            },
            {
                item: "create:zinc_nugget"
            },
            {
                item: "create:zinc_nugget",
            },
            {
                item: "create:zinc_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:asurine"
            },
            {
                id: "create:asurine",
                count: 2,
                chance: 0.5
            }
        ]
    }).id("fwnc:compacting/asurines_heated")
     event.custom({
        type: 'create:compacting',
        heat_requirement: "superheated",
        ingredients: [
            {
                item: "minecraft:deepslate"
            },
            {
                item: "create:zinc_nugget"
            },
            {
                item: "create:zinc_nugget",
            },
            {
                item: "create:zinc_nugget",
            },
            {
                type: "fluid_stack",
                amount: 200,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "create:asurine"
            },
            {
                id: "create:asurine",
                count: 3
            }
        ]
    }).id("fwnc:compacting/asurines_superheated")

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "minecraft:calcite"
            },
            {
                type: "fluid_stack",
                amount: 100,
                fluid: "minecraft:water"
            }
        ],
        results: [
            {
                id: "create:limestone"
            },
            {
                id: "minecraft:calcite",
                chance: 0.5
            }
        ]
    }).id("fwnc:mixing/limestones")
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:bone_meal"
            }
        ],
        results: [
            {
                id: "minecraft:calcite"
            },
            {
                id: "minecraft:calcite",
                chance: 0.5
            }
        ]
    }).id("fwnc:compacting/calcites")

    event.custom({
        type: 'create:mixing',
        ingredients: [
            [{
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:sand"
            },
            {
                item: "minecraft:red_sand"
            },
            {
                item: "biomesoplenty:black_sand"
            }
            ],
            {
                type: "fluid_stack",
                amount: 100,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                id: "minecraft:tuff"
            }
        ]
    }).id("fwnc:mixing/tuffs")

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: "minecraft:blackstone"
            }
        ],
        results: [
            {
                id: "biomesoplenty:black_sand"
            }
        ]
    }).id("fwnc:crushing_wheel/black_sand")
    
    event.custom({
        type: 'create:splashing',
        ingredients: [
            {
                item: "biomesoplenty:black_sand"
            }
        ],
        results: [
            {
                id: "immersiveengineering:dust_coke",
                chance: 0.6
            }
        ]
    }).id("fwnc:splashing/black_sand")
})