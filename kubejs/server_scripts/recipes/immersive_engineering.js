ServerEvents.recipes(event => {
    //tool
    event.shaped(Item.of('immersiveengineering:screwdriver',1), [
        ' R',
        'S '
    ],
    {
        R: '#c:rods/steel',
        S: '#c:rods/wooden'
    }).id("fwnc:crafting/ie_screwdriver_b")
    event.shaped(Item.of('immersiveengineering:wirecutter',1), [
        'SI',
        ' S'
    ],
    {
        I: '#c:ingots/steel',
        S: '#c:rods/wooden'
    }).id("fwnc:crafting/ie_wirecutter_b")
    event.shaped(Item.of('immersiveengineering:hammer',1), [
        ' IT',
        ' SI',
        'S  '
    ],
    {
        I: '#c:ingots/steel',
        S: '#c:rods/wooden',
        T: 'minecraft:string'
    }).id("fwnc:crafting/ie_hammer_b")

    //bricks
    event.remove({ id: 'immersiveengineering:crafting/alloybrick' })
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: "c:sands"
            },
            {
                item: "minecraft:clay_ball"
            }
        ],
        results: [
            {
                count: 2,
                id: "fwnc:alloybrick_clay"
            }
        ]
    }).id("fwnc:mixing/alloybrick_clay")
    event.smelting('fwnc:alloybrick_brick','fwnc:alloybrick_clay',0,2000).id("fwnc:furnace/alloybrick_brick")
    event.shaped(Item.of('immersiveengineering:alloybrick',1), [
            'BB',
            'BB'
        ],
        {
            B: 'fwnc:alloybrick_brick'
        }).id("fwnc:crafting/ie_alloybrick")
    event.remove({ id: 'immersiveengineering:crafting/cokebrick' })
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "minecraft:mud"
            },
            {
                item: "minecraft:clay_ball"
            }
        ],
        results: [
            {
                count: 2,
                id: "fwnc:cokebrick_clay"
            }
        ]
    }).id("fwnc:mixing/cokebrick_clay")
    event.smelting('fwnc:cokebrick_brick','fwnc:cokebrick_clay',0,2000).id("fwnc:furnace/cokebrick_brick")
    event.shaped(Item.of('immersiveengineering:cokebrick',1), [
        'BB',
        'BB'
    ],
    {
        B: 'fwnc:cokebrick_brick'
    }).id("fwnc:crafting/ie_cokebrick")
    event.remove({ id: 'immersiveengineering:crafting/blastbrick' })
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "minecraft:magma_block"
            },
            {
                item: "minecraft:clay_ball"
            }
        ],
        results: [
            {
                count: 2,
                id: "fwnc:blastbrick_clay"
            }
        ]
    }).id("fwnc:mixing/blastbrick_clay")
    event.smelting('fwnc:blastbrick_brick','fwnc:blastbrick_clay',0,2000).id("fwnc:furnace/blastbrick_brick")
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "fwnc:blastbrick_brick"
            },
            {
                item: "fwnc:blastbrick_brick"
            },
            {
                item: "minecraft:nether_brick"
            },
            {
                item: "minecraft:nether_brick"
            }
        ],
        results: [
            {
                id: "immersiveengineering:blastbrick"
            }
        ]
    }).id("fwnc:compacting/ie_blastbrick")

    //arc furnace
    event.custom({
        type: 'immersiveengineering:arc_furnace',
        additives: [],
        energy: 512000,
        input: {
            tag: "c:raw_materials/mithril"
        },
        results: [
            {
                tag: "c:ingots/mithril"
            }
        ],
        secondaries: [
            {
                chance: 0.5,
                output: {
                    tag: "c:ingots/mithril"
                }
            }
        ],
        time: 100
    }).id("fwnc:ie_arcfur/mithril")

    event.custom({
        type: 'immersiveengineering:arc_furnace',
        additives: [],
        energy: 2560,
        input: {
            tag: "c:nuggets/iron"
        },
        results: [
            {
                tag: "c:nuggets/wrought_iron"
            }
        ],
        time: 20
    }).id("fwnc:ie_arcfur/wrought_iron_by_nugget")

    //crush
    function SecondProcess(material) {
        event.custom({
            type: 'immersiveengineering:crusher',
            energy: 4500,
            input: {
                item: `create:crushed_raw_${material}`
            },
            result: {
                tag: `c:dusts/${material}`
            },
            secondaries: [
                {
                    chance: 0.5,
                    output: {
                        tag: `c:dusts/${material}`
                    }
                }
            ]
        }).id(`fwnc:ie_crusher/second_process_${material}`)
    }

    SecondProcess('iron')
    SecondProcess('gold')
    SecondProcess('copper')
    //SecondProcess('zinc')
    SecondProcess('silver')
    SecondProcess('lead')
    SecondProcess('aluminum')
    SecondProcess('uranium')
    SecondProcess('nickel')

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'biomesoplenty:brimstone'
        },
        result: {
            tag: "c:dusts/sulfur",
            count: 4
        },
        secondaries: []
    }).id("fwnc:ie_crusher/brimstone")

    //cloche
    function ClotheOneProduct(name, seed, rendertype, renderblock, base, timecost, outa, outacount) {
        event.custom({
            type: 'immersiveengineering:cloche',
            input: {
                item: seed
            },
            render: {
                type: rendertype,
                block: renderblock
            },
            results: [
                {
                    count: outacount,
                    id: outa
                }
            ],
            soil: {
                item: base
            },
            time: timecost
        }).id(name)
    }
    function ClotheTwoProduct(name, seed, rendertype, renderblock, base, timecost, outa, outacount, outb, outbcount) {
        event.custom({
            type: 'immersiveengineering:cloche',
            input: {
                item: seed
            },
            render: {
                type: rendertype,
                block: renderblock
            },
            results: [
                {
                    count: outacount,
                    id: outa
                },
                {
                    count: outbcount,
                    id: outb
                }
            ],
            soil: {
                item: base
            },
            time: timecost
        }).id(name)
    }
    function ClotheMelon(name, seed, renderattachedstem, renderstem, base, timecost, out) {
        event.custom({
            type: 'immersiveengineering:cloche',
            input: {
                item: seed
            },
            render: {
                type: "immersiveengineering:stem",
                attachedStem: renderattachedstem,
                crop: out,
                stem: renderstem
            },
            results: [
                {
                    count: 1,
                    id: out
                }
            ],
            soil: {
                item: base
            },
            time: timecost
        }).id(name)
    }

    event.remove({mod: 'tmted', type: 'immersiveengineering:cloche'});

    ClotheTwoProduct("fwnc:ie_cloche/oak", "minecraft:oak_sapling", "immersiveengineering:generic", "minecraft:oak_sapling", "minecraft:dirt", 2400, "minecraft:oak_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/oak_boosted", "minecraft:oak_sapling", "immersiveengineering:generic", "minecraft:oak_sapling", "farmersdelight:rich_soil", 1800, "minecraft:oak_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/spruce", "minecraft:spruce_sapling", "immersiveengineering:generic", "minecraft:spruce_sapling", "minecraft:dirt", 2400, "minecraft:spruce_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/spruce_boosted", "minecraft:spruce_sapling", "immersiveengineering:generic", "minecraft:spruce_sapling", "farmersdelight:rich_soil", 1800, "minecraft:spruce_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/birch", "minecraft:birch_sapling", "immersiveengineering:generic", "minecraft:birch_sapling", "minecraft:dirt", 2400, "minecraft:birch_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/birch_boosted", "minecraft:birch_sapling", "immersiveengineering:generic", "minecraft:birch_sapling", "farmersdelight:rich_soil", 1800, "minecraft:birch_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/jungle", "minecraft:jungle_sapling", "immersiveengineering:generic", "minecraft:jungle_sapling", "minecraft:dirt", 2400, "minecraft:jungle_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/jungle_boosted", "minecraft:jungle_sapling", "immersiveengineering:generic", "minecraft:jungle_sapling", "farmersdelight:rich_soil", 1800, "minecraft:jungle_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/acacia", "minecraft:acacia_sapling", "immersiveengineering:generic", "minecraft:acacia_sapling", "minecraft:dirt", 2400, "minecraft:acacia_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/acacia_boosted", "minecraft:acacia_sapling", "immersiveengineering:generic", "minecraft:acacia_sapling", "farmersdelight:rich_soil", 1800, "minecraft:acacia_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/dark_oak", "minecraft:dark_oak_sapling", "immersiveengineering:generic", "minecraft:dark_oak_sapling", "minecraft:dirt", 2400, "minecraft:dark_oak_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/dark_oak_boosted", "minecraft:dark_oak_sapling", "immersiveengineering:generic", "minecraft:dark_oak_sapling", "farmersdelight:rich_soil", 1800, "minecraft:dark_oak_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/mangrove", "minecraft:mangrove_propagule", "immersiveengineering:generic", "minecraft:mangrove_propagule", "minecraft:dirt", 2400, "minecraft:mangrove_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/mangrove_boosted", "minecraft:mangrove_propagule", "immersiveengineering:generic", "minecraft:mangrove_propagule", "farmersdelight:rich_soil", 1800, "minecraft:mangrove_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/cherry", "minecraft:cherry_sapling", "immersiveengineering:generic", "minecraft:cherry_sapling", "minecraft:dirt", 2400, "minecraft:cherry_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/cherry_boosted", "minecraft:cherry_sapling", "immersiveengineering:generic", "minecraft:cherry_sapling", "farmersdelight:rich_soil", 1800, "minecraft:cherry_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/fir", "biomesoplenty:fir_sapling", "immersiveengineering:generic", "biomesoplenty:fir_sapling", "minecraft:dirt", 2400, "biomesoplenty:fir_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/fir_boosted", "biomesoplenty:fir_sapling", "immersiveengineering:generic", "biomesoplenty:fir_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:fir_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/redwood", "biomesoplenty:redwood_sapling", "immersiveengineering:generic", "biomesoplenty:redwood_sapling", "minecraft:dirt", 2400, "biomesoplenty:redwood_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/redwood_boosted", "biomesoplenty:redwood_sapling", "immersiveengineering:generic", "biomesoplenty:redwood_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:redwood_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/mahogany", "biomesoplenty:mahogany_sapling", "immersiveengineering:generic", "biomesoplenty:mahogany_sapling", "minecraft:dirt", 2400, "biomesoplenty:mahogany_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/mahogany_boosted", "biomesoplenty:mahogany_sapling", "immersiveengineering:generic", "biomesoplenty:mahogany_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:mahogany_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/jacaranda", "biomesoplenty:jacaranda_sapling", "immersiveengineering:generic", "biomesoplenty:jacaranda_sapling", "minecraft:dirt", 2400, "biomesoplenty:jacaranda_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/jacaranda_boosted", "biomesoplenty:jacaranda_sapling", "immersiveengineering:generic", "biomesoplenty:jacaranda_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:jacaranda_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/palm", "biomesoplenty:palm_sapling", "immersiveengineering:generic", "biomesoplenty:palm_sapling", "minecraft:dirt", 2400, "biomesoplenty:palm_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/palm_boosted", "biomesoplenty:palm_sapling", "immersiveengineering:generic", "biomesoplenty:palm_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:palm_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/willow", "biomesoplenty:willow_sapling", "immersiveengineering:generic", "biomesoplenty:willow_sapling", "minecraft:dirt", 2400, "biomesoplenty:willow_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/willow_boosted", "biomesoplenty:willow_sapling", "immersiveengineering:generic", "biomesoplenty:willow_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:willow_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/dead", "biomesoplenty:dead_sapling", "immersiveengineering:generic", "biomesoplenty:dead_sapling", "minecraft:dirt", 2400, "biomesoplenty:dead_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/dead_boosted", "biomesoplenty:dead_sapling", "immersiveengineering:generic", "biomesoplenty:dead_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:dead_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/magic", "biomesoplenty:magic_sapling", "immersiveengineering:generic", "biomesoplenty:magic_sapling", "minecraft:dirt", 2400, "biomesoplenty:magic_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/magic_boosted", "biomesoplenty:magic_sapling", "immersiveengineering:generic", "biomesoplenty:magic_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:magic_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/umbran", "biomesoplenty:umbran_sapling", "immersiveengineering:generic", "biomesoplenty:umbran_sapling", "minecraft:dirt", 2400, "biomesoplenty:umbran_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/umbran_boosted", "biomesoplenty:umbran_sapling", "immersiveengineering:generic", "biomesoplenty:umbran_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:umbran_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/hellbark", "biomesoplenty:hellbark_sapling", "immersiveengineering:generic", "biomesoplenty:hellbark_sapling", "minecraft:soul_soil", 2000, "biomesoplenty:hellbark_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/pine", "biomesoplenty:pine_sapling", "immersiveengineering:generic", "biomesoplenty:pine_sapling", "minecraft:dirt", 2400, "biomesoplenty:pine_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/pine_boosted", "biomesoplenty:pine_sapling", "immersiveengineering:generic", "biomesoplenty:pine_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:pine_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/red_maple", "biomesoplenty:red_maple_sapling", "immersiveengineering:generic", "biomesoplenty:red_maple_sapling", "minecraft:dirt", 2400, "biomesoplenty:red_maple_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/red_maple_boosted", "biomesoplenty:red_maple_sapling", "immersiveengineering:generic", "biomesoplenty:red_maple_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:red_maple_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/orange_maple", "biomesoplenty:orange_maple_sapling", "immersiveengineering:generic", "biomesoplenty:orange_maple_sapling", "minecraft:dirt", 2400, "biomesoplenty:orange_maple_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/orange_maple_boosted", "biomesoplenty:orange_maple_sapling", "immersiveengineering:generic", "biomesoplenty:orange_maple_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:orange_maple_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/yellow_maple", "biomesoplenty:yellow_maple_sapling", "immersiveengineering:generic", "biomesoplenty:yellow_maple_sapling", "minecraft:dirt", 2400, "biomesoplenty:yellow_maple_log", 4, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/yellow_maple_boosted", "biomesoplenty:yellow_maple_sapling", "immersiveengineering:generic", "biomesoplenty:yellow_maple_sapling", "farmersdelight:rich_soil", 1800, "biomesoplenty:yellow_maple_log", 6, "minecraft:stick", 2)
    ClotheTwoProduct("fwnc:ie_cloche/empyreal", "biomesoplenty:empyreal_sapling", "immersiveengineering:generic", "biomesoplenty:empyreal_sapling", "minecraft:end_stone", 2000, "biomesoplenty:empyreal_log", 4, "minecraft:stick", 2)

    ClotheOneProduct("fwnc:ie_cloche/pear", "fruitsdelight:pear_sapling", "immersiveengineering:generic", "fruitsdelight:pear_sapling", "minecraft:dirt", 2000, "fruitsdelight:pear", 4)
    ClotheOneProduct("fwnc:ie_cloche/pear_boosted", "fruitsdelight:pear_sapling", "immersiveengineering:generic", "fruitsdelight:pear_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:pear", 6)
    ClotheOneProduct("fwnc:ie_cloche/hawberry", "fruitsdelight:hawberry_sapling", "immersiveengineering:generic", "fruitsdelight:hawberry_sapling", "minecraft:dirt", 2000, "fruitsdelight:hawberry", 4)
    ClotheOneProduct("fwnc:ie_cloche/hawberry_boosted", "fruitsdelight:hawberry_sapling", "immersiveengineering:generic", "fruitsdelight:hawberry_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:hawberry", 6)
    ClotheOneProduct("fwnc:ie_cloche/lychee", "fruitsdelight:lychee_sapling", "immersiveengineering:generic", "fruitsdelight:lychee_sapling", "minecraft:dirt", 2000, "fruitsdelight:lychee", 4)
    ClotheOneProduct("fwnc:ie_cloche/lychee_boosted", "fruitsdelight:lychee_sapling", "immersiveengineering:generic", "fruitsdelight:lychee_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:lychee", 6)
    ClotheOneProduct("fwnc:ie_cloche/mango", "fruitsdelight:mango_sapling", "immersiveengineering:generic", "fruitsdelight:mango_sapling", "minecraft:dirt", 2000, "fruitsdelight:mango", 4)
    ClotheOneProduct("fwnc:ie_cloche/mango_boosted", "fruitsdelight:mango_sapling", "immersiveengineering:generic", "fruitsdelight:mango_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:mango", 6)
    ClotheOneProduct("fwnc:ie_cloche/persimmon", "fruitsdelight:persimmon_sapling", "immersiveengineering:generic", "fruitsdelight:persimmon_sapling", "minecraft:dirt", 2000, "fruitsdelight:persimmon", 4)
    ClotheOneProduct("fwnc:ie_cloche/persimmon_boosted", "fruitsdelight:persimmon_sapling", "immersiveengineering:generic", "fruitsdelight:persimmon_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:persimmon", 6)
    ClotheOneProduct("fwnc:ie_cloche/peach", "fruitsdelight:peach_sapling", "immersiveengineering:generic", "fruitsdelight:peach_sapling", "minecraft:dirt", 2000, "fruitsdelight:peach", 4)
    ClotheOneProduct("fwnc:ie_cloche/peach_boosted", "fruitsdelight:peach_sapling", "immersiveengineering:generic", "fruitsdelight:peach_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:peach", 6)
    ClotheOneProduct("fwnc:ie_cloche/orange", "fruitsdelight:orange_sapling", "immersiveengineering:generic", "fruitsdelight:orange_sapling", "minecraft:dirt", 2000, "fruitsdelight:orange", 4)
    ClotheOneProduct("fwnc:ie_cloche/orange_boosted", "fruitsdelight:orange_sapling", "immersiveengineering:generic", "fruitsdelight:orange_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:orange", 6)
    ClotheOneProduct("fwnc:ie_cloche/apple", "fruitsdelight:apple_sapling", "immersiveengineering:generic", "fruitsdelight:apple_sapling", "minecraft:dirt", 2000, "minecraft:apple", 4)
    ClotheOneProduct("fwnc:ie_cloche/apple_boosted", "fruitsdelight:apple_sapling", "immersiveengineering:generic", "fruitsdelight:apple_sapling", "farmersdelight:rich_soil", 1500, "minecraft:apple", 6)
    ClotheOneProduct("fwnc:ie_cloche/mangosteen", "fruitsdelight:mangosteen_sapling", "immersiveengineering:generic", "fruitsdelight:mangosteen_sapling", "minecraft:dirt", 2000, "fruitsdelight:mangosteen", 4)
    ClotheOneProduct("fwnc:ie_cloche/mangosteen_boosted", "fruitsdelight:mangosteen_sapling", "immersiveengineering:generic", "fruitsdelight:mangosteen_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:mangosteen", 6)
    ClotheOneProduct("fwnc:ie_cloche/bayberry", "fruitsdelight:bayberry_sapling", "immersiveengineering:generic", "fruitsdelight:bayberry_sapling", "minecraft:dirt", 2000, "fruitsdelight:bayberry", 4)
    ClotheOneProduct("fwnc:ie_cloche/bayberry_boosted", "fruitsdelight:bayberry_sapling", "immersiveengineering:generic", "fruitsdelight:bayberry_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:bayberry", 6)
    ClotheOneProduct("fwnc:ie_cloche/kiwi", "fruitsdelight:kiwi_sapling", "immersiveengineering:generic", "fruitsdelight:kiwi_sapling", "minecraft:dirt", 2000, "fruitsdelight:kiwi", 4)
    ClotheOneProduct("fwnc:ie_cloche/kiwi_boosted", "fruitsdelight:kiwi_sapling", "immersiveengineering:generic", "fruitsdelight:kiwi_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:kiwi", 6)
    ClotheOneProduct("fwnc:ie_cloche/fig", "fruitsdelight:fig_sapling", "immersiveengineering:generic", "fruitsdelight:fig_sapling", "minecraft:dirt", 2000, "fruitsdelight:fig", 4)
    ClotheOneProduct("fwnc:ie_cloche/fig_boosted", "fruitsdelight:fig_sapling", "immersiveengineering:generic", "fruitsdelight:fig_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:fig", 6)
    ClotheOneProduct("fwnc:ie_cloche/durian", "fruitsdelight:durian_sapling", "immersiveengineering:generic", "fruitsdelight:durian_sapling", "minecraft:dirt", 2000, "fruitsdelight:durian", 4)
    ClotheOneProduct("fwnc:ie_cloche/durian_boosted", "fruitsdelight:durian_sapling", "immersiveengineering:generic", "fruitsdelight:durian_sapling", "farmersdelight:rich_soil", 1500, "fruitsdelight:durian", 6)

    ClotheOneProduct("fwnc:ie_cloche/blueberry", "fruitsdelight:blueberry", "immersiveengineering:crop", "fruitsdelight:blueberry_bush", "minecraft:dirt", 1200, "fruitsdelight:blueberry", 3)
    ClotheOneProduct("fwnc:ie_cloche/blueberry_boosted", "fruitsdelight:blueberry", "immersiveengineering:crop", "fruitsdelight:blueberry_bush", "farmersdelight:rich_soil", 900, "fruitsdelight:blueberry", 4)
    ClotheOneProduct("fwnc:ie_cloche/lemon", "fruitsdelight:lemon_seeds", "immersiveengineering:crop", "fruitsdelight:lemon_tree", "minecraft:dirt", 1200, "fruitsdelight:lemon", 3)
    ClotheOneProduct("fwnc:ie_cloche/lemon_boosted", "fruitsdelight:lemon_seeds", "immersiveengineering:crop", "fruitsdelight:lemon_tree", "farmersdelight:rich_soil", 900, "fruitsdelight:lemon", 4)
    ClotheOneProduct("fwnc:ie_cloche/cranberry", "fruitsdelight:cranberry", "immersiveengineering:crop", "fruitsdelight:cranberry_bush", "minecraft:dirt", 1200, "fruitsdelight:cranberry", 3)
    ClotheOneProduct("fwnc:ie_cloche/cranberry_boosted", "fruitsdelight:cranberry", "immersiveengineering:crop", "fruitsdelight:cranberry_bush", "farmersdelight:rich_soil", 900, "fruitsdelight:cranberry", 4)
    ClotheOneProduct("fwnc:ie_cloche/pineapple", "fruitsdelight:pineapple_sapling", "immersiveengineering:crop", "fruitsdelight:pineapple", "minecraft:sand", 800, "fruitsdelight:pineapple", 2)
    ClotheOneProduct("fwnc:ie_cloche/carrot_boosted", "minecraft:carrot", "immersiveengineering:crop", "minecraft:carrots", "farmersdelight:rich_soil", 600, "minecraft:carrot", 3)
    ClotheOneProduct("fwnc:ie_cloche/potato_boosted", "minecraft:potato", "immersiveengineering:crop", "minecraft:potatoes", "farmersdelight:rich_soil", 600, "minecraft:potato", 3)
    ClotheOneProduct("fwnc:ie_cloche/cocoas", "minecraft:cocoa_beans", "immersiveengineering:crop", "minecraft:cocoa", "minecraft:jungle_log", 800, "minecraft:cocoa_beans", 3)

    ClotheOneProduct("fwnc:ie_cloche/red_grapes", "create_winery:red_grapes", "immersiveengineering:generic", "create_winery:red_grape_bush_stage_2", "minecraft:dirt", 1200, "create_winery:red_grapes", 3)
    ClotheOneProduct("fwnc:ie_cloche/red_grapes_boosted", "create_winery:red_grapes", "immersiveengineering:generic", "create_winery:red_grape_bush_stage_2", "farmersdelight:rich_soil", 900, "create_winery:red_grapes", 4)
    ClotheOneProduct("fwnc:ie_cloche/white_grapes", "create_winery:white_grapes", "immersiveengineering:generic", "create_winery:white_grape_bush_stage_2", "minecraft:dirt", 1200, "create_winery:white_grapes", 3)
    ClotheOneProduct("fwnc:ie_cloche/white_grapes_boosted", "create_winery:white_grapes", "immersiveengineering:generic", "create_winery:white_grape_bush_stage_2", "farmersdelight:rich_soil", 900, "create_winery:white_grapes", 4)
    /*
    ClotheOneProduct("fwnc:ie_cloche/colony_bell_pepper", "minecolonies:bell_pepper", "immersiveengineering:generic", "minecolonies:bell_pepper", "minecraft:dirt", 1600, "minecolonies:bell_pepper", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_bell_pepper_boosted", "minecolonies:bell_pepper", "immersiveengineering:generic", "minecolonies:bell_pepper", "farmersdelight:rich_soil", 1200, "minecolonies:bell_pepper", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_cabbage", "minecolonies:cabbage", "immersiveengineering:generic", "minecolonies:cabbage", "minecraft:dirt", 1600, "minecolonies:cabbage", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_cabbage_boosted", "minecolonies:cabbage", "immersiveengineering:generic", "minecolonies:cabbage", "farmersdelight:rich_soil", 1200, "minecolonies:cabbage", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_chickpea", "minecolonies:chickpea", "immersiveengineering:generic", "minecolonies:chickpea", "minecraft:dirt", 1600, "minecolonies:chickpea", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_chickpea_boosted", "minecolonies:chickpea", "immersiveengineering:generic", "minecolonies:chickpea", "farmersdelight:rich_soil", 1200, "minecolonies:chickpea", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_durum", "minecolonies:durum", "immersiveengineering:generic", "minecolonies:durum", "minecraft:dirt", 1600, "minecolonies:durum", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_durum_boosted", "minecolonies:durum", "immersiveengineering:generic", "minecolonies:durum", "farmersdelight:rich_soil", 1200, "minecolonies:durum", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_eggplant", "minecolonies:eggplant", "immersiveengineering:generic", "minecolonies:eggplant", "minecraft:dirt", 1600, "minecolonies:eggplant", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_eggplant_boosted", "minecolonies:eggplant", "immersiveengineering:generic", "minecolonies:eggplant", "farmersdelight:rich_soil", 1200, "minecolonies:eggplant", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_garlic", "minecolonies:garlic", "immersiveengineering:generic", "minecolonies:garlic", "minecraft:dirt", 1600, "minecolonies:garlic", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_garlic_boosted", "minecolonies:garlic", "immersiveengineering:generic", "minecolonies:garlic", "farmersdelight:rich_soil", 1200, "minecolonies:garlic", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_onion", "minecolonies:onion", "immersiveengineering:generic", "minecolonies:onion", "minecraft:dirt", 1600, "minecolonies:onion", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_onion_boosted", "minecolonies:onion", "immersiveengineering:generic", "minecolonies:onion", "farmersdelight:rich_soil", 1200, "minecolonies:onion", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_soybean", "minecolonies:soybean", "immersiveengineering:generic", "minecolonies:soybean", "minecraft:dirt", 1600, "minecolonies:soybean", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_soybean_boosted", "minecolonies:soybean", "immersiveengineering:generic", "minecolonies:soybean", "farmersdelight:rich_soil", 1200, "minecolonies:soybean", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_tomato", "minecolonies:tomato", "immersiveengineering:generic", "minecolonies:tomato", "minecraft:dirt", 1600, "minecolonies:tomato", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_tomato_boosted", "minecolonies:tomato", "immersiveengineering:generic", "minecolonies:tomato", "farmersdelight:rich_soil", 1200, "minecolonies:tomato", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_rice", "minecolonies:rice", "immersiveengineering:generic", "minecolonies:rice", "minecraft:dirt", 1600, "minecolonies:rice", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_rice_boosted", "minecolonies:rice", "immersiveengineering:generic", "minecolonies:rice", "farmersdelight:rich_soil", 1200, "minecolonies:rice", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_corn", "minecolonies:corn", "immersiveengineering:generic", "minecolonies:corn", "minecraft:dirt", 1600, "minecolonies:corn", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_corn_boosted", "minecolonies:corn", "immersiveengineering:generic", "minecolonies:corn", "farmersdelight:rich_soil", 1200, "minecolonies:corn", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_nether_pepper", "minecolonies:nether_pepper", "immersiveengineering:generic", "minecolonies:nether_pepper", "minecraft:dirt", 1600, "minecolonies:nether_pepper", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_nether_pepper_boosted", "minecolonies:nether_pepper", "immersiveengineering:generic", "minecolonies:nether_pepper", "farmersdelight:rich_soil", 1200, "minecolonies:nether_pepper", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_peas", "minecolonies:peas", "immersiveengineering:generic", "minecolonies:peas", "minecraft:dirt", 1600, "minecolonies:peas", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_peas_boosted", "minecolonies:peas", "immersiveengineering:generic", "minecolonies:peas", "farmersdelight:rich_soil", 1200, "minecolonies:peas", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_mint", "minecolonies:mint", "immersiveengineering:generic", "minecolonies:mint", "minecraft:dirt", 1600, "minecolonies:mint", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_mint_boosted", "minecolonies:mint", "immersiveengineering:generic", "minecolonies:mint", "farmersdelight:rich_soil", 1200, "minecolonies:mint", 3)
    ClotheOneProduct("fwnc:ie_cloche/colony_butternut_squash", "minecolonies:butternut_squash", "immersiveengineering:generic", "minecolonies:butternut_squash", "minecraft:dirt", 1600, "minecolonies:butternut_squash", 2)
    ClotheOneProduct("fwnc:ie_cloche/colony_butternut_squash_boosted", "minecolonies:butternut_squash", "immersiveengineering:generic", "minecolonies:butternut_squash", "farmersdelight:rich_soil", 1200, "minecolonies:butternut_squash", 3)
    */
    ClotheTwoProduct("fwnc:ie_cloche/wheat_boosted", "minecraft:wheat_seeds", "immersiveengineering:crop", "minecraft:wheat", "farmersdelight:rich_soil", 480, "minecraft:wheat", 3, "minecraft:wheat_seeds", 1)
    ClotheTwoProduct("fwnc:ie_cloche/beetroot_boosted", "minecraft:beetroot_seeds", "immersiveengineering:crop", "minecraft:beetroots", "farmersdelight:rich_soil", 600, "minecraft:beetroot", 3, "minecraft:beetroot_seeds", 1)
    ClotheTwoProduct("fwnc:ie_cloche/cabbage_boosted", "farmersdelight:cabbage_seeds", "immersiveengineering:crop", "farmersdelight:cabbages", "farmersdelight:rich_soil", 600, "farmersdelight:cabbage", 3, "farmersdelight:cabbage_seeds", 1)
    ClotheTwoProduct("fwnc:ie_cloche/tomato_boosted", "farmersdelight:tomato_seeds", "immersiveengineering:crop", "farmersdelight:tomatoes", "farmersdelight:rich_soil", 600, "farmersdelight:tomato", 3, "farmersdelight:tomato_seeds", 1)

    ClotheMelon("fwnc:ie_cloche/hamimelon", "fruitsdelight:hamimelon_seeds", "fruitsdelight:attached_hamimelon_stem", "fruitsdelight:hamimelon_stem", "minecraft:dirt", 800, "fruitsdelight:hamimelon")
    ClotheMelon("fwnc:ie_cloche/hamimelon_boosted", "fruitsdelight:hamimelon_seeds", "fruitsdelight:attached_hamimelon_stem", "fruitsdelight:hamimelon_stem", "farmersdelight:rich_soil", 600, "fruitsdelight:hamimelon")
    ClotheMelon("fwnc:ie_cloche/pumpkin_boosted", "minecraft:pumpkin_seeds", "minecraft:attached_pumpkin_stem", "minecraft:pumpkin_stem", "farmersdelight:rich_soil", 600, "minecraft:pumpkin")
    ClotheMelon("fwnc:ie_cloche/melon_boosted", "minecraft:melon_seeds", "minecraft:attached_melon_stem", "minecraft:melon_stem", "farmersdelight:rich_soil", 600, "minecraft:melon")

    ClotheOneProduct("fwnc:ie_cloche/rose", "biomesoplenty:rose", "immersiveengineering:generic", "biomesoplenty:rose", "minecraft:dirt", 480, "biomesoplenty:rose", 1)
    ClotheOneProduct("fwnc:ie_cloche/violet", "biomesoplenty:violet", "immersiveengineering:generic", "biomesoplenty:violet", "minecraft:dirt", 480, "biomesoplenty:violet", 1)
    ClotheOneProduct("fwnc:ie_cloche/lavender", "biomesoplenty:lavender", "immersiveengineering:generic", "biomesoplenty:lavender", "minecraft:dirt", 480, "biomesoplenty:lavender", 1)
    ClotheOneProduct("fwnc:ie_cloche/tall_lavender", "biomesoplenty:tall_lavender", "immersiveengineering:generic", "biomesoplenty:tall_lavender", "minecraft:dirt", 480, "biomesoplenty:tall_lavender", 1)
    ClotheOneProduct("fwnc:ie_cloche/white_lavender", "biomesoplenty:white_lavender", "immersiveengineering:generic", "biomesoplenty:white_lavender", "minecraft:dirt", 480, "biomesoplenty:white_lavender", 1)
    ClotheOneProduct("fwnc:ie_cloche/tall_white_lavender", "biomesoplenty:tall_white_lavender", "immersiveengineering:generic", "biomesoplenty:tall_white_lavender", "minecraft:dirt", 480, "biomesoplenty:tall_white_lavender", 1)
    ClotheOneProduct("fwnc:ie_cloche/blue_hydrangea", "biomesoplenty:blue_hydrangea", "immersiveengineering:generic", "biomesoplenty:blue_hydrangea", "minecraft:dirt", 480, "biomesoplenty:blue_hydrangea", 1)
    ClotheOneProduct("fwnc:ie_cloche/goldenrod", "biomesoplenty:goldenrod", "immersiveengineering:generic", "biomesoplenty:goldenrod", "minecraft:dirt", 480, "biomesoplenty:goldenrod", 1)
    ClotheOneProduct("fwnc:ie_cloche/orange_cosmos", "biomesoplenty:orange_cosmos", "immersiveengineering:generic", "biomesoplenty:orange_cosmos", "minecraft:dirt", 480, "biomesoplenty:orange_cosmos", 1)
    ClotheOneProduct("fwnc:ie_cloche/pink_daffodil", "biomesoplenty:pink_daffodil", "immersiveengineering:generic", "biomesoplenty:pink_daffodil", "minecraft:dirt", 480, "biomesoplenty:pink_daffodil", 1)
    ClotheOneProduct("fwnc:ie_cloche/pink_hibiscus", "biomesoplenty:pink_hibiscus", "immersiveengineering:generic", "biomesoplenty:pink_hibiscus", "minecraft:dirt", 480, "biomesoplenty:pink_hibiscus", 1)
    ClotheOneProduct("fwnc:ie_cloche/white_petals", "biomesoplenty:white_petals", "immersiveengineering:generic", "biomesoplenty:white_petals", "minecraft:dirt", 480, "biomesoplenty:white_petals", 1)
    ClotheOneProduct("fwnc:ie_cloche/icy_iris", "biomesoplenty:icy_iris", "immersiveengineering:generic", "biomesoplenty:icy_iris", "minecraft:dirt", 480, "biomesoplenty:icy_iris", 1)
    ClotheOneProduct("fwnc:ie_cloche/wildflower", "biomesoplenty:wildflower", "immersiveengineering:generic", "biomesoplenty:wildflower", "minecraft:dirt", 480, "biomesoplenty:wildflower", 1)
    ClotheOneProduct("fwnc:ie_cloche/glowflower", "biomesoplenty:glowflower", "immersiveengineering:generic", "biomesoplenty:glowflower", "minecraft:dirt", 480, "biomesoplenty:glowflower", 1)
    ClotheOneProduct("fwnc:ie_cloche/burning_blossom", "biomesoplenty:burning_blossom", "immersiveengineering:generic", "biomesoplenty:burning_blossom", "minecraft:netherrack", 480, "biomesoplenty:burning_blossom", 1)
    ClotheOneProduct("fwnc:ie_cloche/wilted_lily", "biomesoplenty:wilted_lily", "immersiveengineering:generic", "biomesoplenty:wilted_lily", "minecraft:soul_soil", 480, "biomesoplenty:wilted_lily", 1)
    ClotheOneProduct("fwnc:ie_cloche/endbloom", "biomesoplenty:endbloom", "immersiveengineering:generic", "biomesoplenty:endbloom", "minecraft:end_stone", 480, "biomesoplenty:endbloom", 1)

    //sawmill
    function Sawmill(mod, material) {
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 1600,
            input: {
                item: `${mod}:${material}_log`
            },
            result: {
                basePredicate: {
                    item: `${mod}:${material}_planks`
                },
                count: 6
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            stripped:{
                item: `${mod}:stripped_${material}_log`
            },
            strippingSecondaries: [
                {
                    tag: "c:dusts/wood"
                }
            ]
        }).id(`fwnc:ie_sawmill/${material}_log`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 1600,
            input: {
                item: `${mod}:${material}_wood`
            },
            result: {
                basePredicate: {
                    item: `${mod}:${material}_planks`
                },
                count: 6
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            stripped:{
                item: `${mod}:stripped_${material}_wood`
            },
            strippingSecondaries: [
                {
                    tag: "c:dusts/wood"
                }
            ]
        }).id(`fwnc:ie_sawmill/${material}_wood`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 1600,
            input: {
                item: `${mod}:${material}_stairs`
            },
            result: {
                item: `${mod}:${material}_planks`
            },
            secondaryOutputs: [],
            strippingSecondaries: [
                {
                    tag: "c:dusts/wood"
                }
            ]
        }).id(`fwnc:ie_sawmill/${material}_stairs`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 800,
            input: {
                item: `${mod}:${material}_planks`
            },
            result: {
                basePredicate: {
                    item: `${mod}:${material}_slab`
                },
                count: 2
            },
            secondaryOutputs: [],
            strippingSecondaries: [
                {
                    tag: "c:dusts/wood"
                }
            ]
        }).id(`fwnc:ie_sawmill/${material}_slab`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 800,
            input: {
                item: `${mod}:${material}_door`
            },
            result: {
                item: `${mod}:${material}_planks`
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:ie_sawmill/${material}_door`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 1600,
            input: {
                item: `everycomp:fd/${mod}/${material}_cabinet`
            },
            result: {
                basePredicate: {
                    item: `${mod}:${material}_slab`
                },
                count: 3
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:recycle/${material}_cabinet`)
    }

    function SawmillFix(material) {
        event.remove({ id: `tmted:sawmill/${material}_cabinet` })
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 1600,
            input: {
                item: `farmersdelight:${material}_cabinet`
            },
            result: {
                basePredicate: {
                    item: `minecraft:${material}_slab`
                },
                count: 3
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:recycle/${material}_cabinet`)
    }

    SawmillFix("oak")
    SawmillFix("birch")
    SawmillFix("spruce")
    SawmillFix("jungle")
    SawmillFix("acacia")
    SawmillFix("dark_oak")
    SawmillFix("crimson")
    SawmillFix("warped")
    SawmillFix("mangrove")
    SawmillFix("cherry")
    SawmillFix("bamboo")

    Sawmill("biomesoplenty", "fir")
    Sawmill("biomesoplenty", "redwood")
    Sawmill("biomesoplenty", "mahogany")
    Sawmill("biomesoplenty", "jacaranda")
    Sawmill("biomesoplenty", "palm")
    Sawmill("biomesoplenty", "willow")
    Sawmill("biomesoplenty", "dead")
    Sawmill("biomesoplenty", "magic")
    Sawmill("biomesoplenty", "umbran")
    Sawmill("biomesoplenty", "hellbark")
    Sawmill("biomesoplenty", "pine")
    Sawmill("biomesoplenty", "maple")
    Sawmill("biomesoplenty", "empyreal")

    //wrought_iron
    event.replaceInput({ mod: 'immersiveengineering', type: 'crafting_shaped' }, "#c:ingots/iron", "#c:ingots/wrought_iron")
    event.replaceInput({ mod: 'immersiveengineering', type: 'crafting_shaped' }, "#c:rods/iron", "#c:rods/wrought_iron")
    event.replaceInput({ mod: 'immersiveengineering', type: 'crafting_shaped' }, "#c:plates/iron", "#c:plates/wrought_iron")
    event.replaceInput({ mod: 'immersiveengineering', type: 'crafting_shaped' }, "#c:storage_blocks/iron", "#c:storage_blocks/wrought_iron")
    event.replaceInput({ mod: 'immersiveengineering', type: 'crafting_shaped' }, "#c:nuggets/iron", "#c:nuggets/wrought_iron")

    event.remove({ id: 'immersiveengineering:blueprint/component_iron' })
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: "components",
        inputs: [
            {
                basePredicate: {
                    tag: "c:plates/wrought_iron"
                },
                count: 2
            },
            {
                tag: "c:ingots/copper"
            }
        ],
        result: {
            count: 1,
            id: "immersiveengineering:component_iron"
        }
    }).id("fwnc:ie_blueprint/component_iron")

    event.custom({
        type: 'immersiveengineering:blast_furnace',
        input: {
            tag: "c:ingots/wrought_iron"
        },
        result: {
            tag: "c:ingots/steel"
        },
        slag: {
            tag: "c:slag"
        },
        time: 600
    }).id("fwnc:ie_blastfur/wrought_to_steel")
    event.custom({
        type: 'immersiveengineering:blast_furnace',
        input: {
            tag: "c:storage_blocks/wrought_iron"
        },
        result: {
            tag: "c:storage_blocks/steel"
        },
        slag: {
            basePredicate: {
                tag: "c:slag"
            },
            count: 9
        },
        time: 5400
    }).id("fwnc:ie_blastfur/wrought_to_steel_block")
    event.custom({
        type: 'immersiveengineering:arc_furnace',
        additives: [
            {
                tag: "c:dusts/coal_coke"
            }
        ],
        energy: 153600,
        input: {
            tag: "c:ingots/wrought_iron"
        },
        results: [
            {
                tag: "c:ingots/steel"
            }
        ],
        slag: {
            tag: "c:slag"
        },
        time: 300
    }).id("fwnc:ie_arcfur/wrought_to_steel")

    //brass
    event.replaceInput({ id: 'immersiveengineering:crafting/empty_casing' }, "#c:plates/copper", "#c:plates/brass")
    event.replaceInput({ id: 'immersiveengineering:crafting/empty_shell' }, "#c:plates/copper", "#c:plates/brass")
    event.replaceInput({ id: 'immersiveengineering:crafting/wooden_grip' }, "#c:nuggets/copper", "#c:nuggets/brass")

    event.remove({ id: 'immersiveengineering:metalpress/bullet_casing' })
    event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 2400,
        input: {
            tag: "c:ingots/brass"
        },
        mold: "immersiveengineering:mold_bullet_casing",
        result: {
            count: 2,
            id: "immersiveengineering:empty_casing"
        }
    }).id("fwnc:ie_metal_press/empty_casing")
    event.remove({ id: 'immersiveengineering:bottling/empty_shell' })
    event.custom({
        type: "immersiveengineering:bottling_machine",
        fluid: {
            amount: 250,
            tag: "c:phenolic_resin"
        },
        inputs: [
            {
                item: "immersiveengineering:mold_bullet_casing"
            },
            {
                basePredicate: {
                    tag: "c:nuggets/brass"
                },
                count: 3
            }
        ],
        results: [
            {
                basePredicate: {
                    item: "immersiveengineering:empty_shell"
                },
                count: 2
            },
            {
                item: "immersiveengineering:mold_bullet_casing"
            }
        ]
    }).id("fwnc:ie_bottling/empty_shell")
})