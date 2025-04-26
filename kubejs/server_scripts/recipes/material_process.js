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
                id: "emendatusenigmatica:wrought_iron_ingot"
            }
        ]
    }).id("fwnc:mixing/wrought_steel")
    event.remove({ id: 'createaddition:constantan' })
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
                count: 1,
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
        event.shaped(Item.of(`emendatusenigmatica:${material}_plate`, 1), [
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
                    id: `emendatusenigmatica:${material}_dust`
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
                item: `emendatusenigmatica:${material}_dust`
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
                id: `emendatusenigmatica:${material}_plate`
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
                id: `emendatusenigmatica:${material}_plate`
            }
        }).id(`fwnc:ie_metal_press/ingot_to_plate_iepress_${material}`)
        event.custom({
            type: 'createaddition:rolling',
            input: {
                tag: `c:ingots/${material}`
            },
            result: {
                count: 2,
                id: `emendatusenigmatica:${material}_rod`
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
                id: `emendatusenigmatica:${material}_rod`
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

    event.remove({ id: 'emendatusenigmatica:plate/from_ingot/wrought_iron' })
    event.remove({ id: 'emendatusenigmatica:rod/from_ingot/wrought_iron' })
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
})