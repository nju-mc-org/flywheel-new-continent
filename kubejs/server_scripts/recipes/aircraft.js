ServerEvents.recipes(event => {
    //aircraft
    event.remove({ id: 'immersive_aircraft:hull' })
    event.shaped(Item.of('immersive_aircraft:hull',1), [
        'WWW',
        'PPP',
        'WWW'
    ],
    {
        W: '#minecraft:logs',
        P: '#c:plates/obsidian'
    }).id("fwnc:crafting/aircraft_hull_a")
    event.shaped(Item.of('immersive_aircraft:hull',2), [
        'WWW',
        'PPP',
        'WWW'
    ],
    {
        W: '#minecraft:logs',
        P: '#c:plates/steel'
    }).id("fwnc:crafting/aircraft_hull_b")
    event.shaped(Item.of('immersive_aircraft:hull',3), [
        'WWW',
        'PPP',
        'WWW'
    ],
    {
        W: '#minecraft:logs',
        P: '#c:plates/aluminum'
    }).id("fwnc:crafting/aircraft_hull_c")
    event.remove({ id: 'immersive_aircraft:hull_reinforcement' })
    event.shaped(Item.of('immersive_aircraft:hull_reinforcement',1), [
        'PPP',
        'HHH',
        'PPP'
    ],
    {
        H: 'immersive_aircraft:hull',
        P: '#c:plates/aluminum'
    }).id("fwnc:crafting/aircraft_hull_reinforcement")

    event.remove({ id: 'immersive_aircraft:propeller' })
    event.shaped(Item.of('immersive_aircraft:propeller',1), [
        'PP ',
        ' P ',
        ' PP'
    ],
    {
        P: '#c:plates/obsidian'
    }).id("fwnc:crafting/aircraft_propeller_a")
    event.shaped(Item.of('immersive_aircraft:propeller',2), [
        'PP ',
        ' P ',
        ' PP'
    ],
    {
        P: '#c:plates/steel'
    }).id("fwnc:crafting/aircraft_propeller_b")
    event.remove({ id: 'immersive_aircraft:enhanced_propeller' })
    event.shaped(Item.of('immersive_aircraft:enhanced_propeller',1), [
        'CC ',
        ' P ',
        ' CC'
    ],
    {
        P: 'immersive_aircraft:propeller',
        C: '#c:plates/constantan'
    }).id("fwnc:crafting/aircraft_propeller")

    event.remove({ id: 'immersive_aircraft:engine' })
    event.shaped(Item.of('immersive_aircraft:engine',1), [
        'SSS',
        'PFP',
        'PBP'
    ],
    {
        F: 'minecraft:blast_furnace',
        B: 'immersive_aircraft:boiler',
        P: 'minecraft:piston',
        S: '#c:plates/obsidian'
    }).id("fwnc:crafting/aircraft_engine_a")
    event.shaped(Item.of('immersive_aircraft:engine',1), [
        ' S ',
        'PFP',
        'PBP'
    ],
    {
        F: 'minecraft:blast_furnace',
        B: 'immersive_aircraft:boiler',
        P: 'minecraft:piston',
        S: '#c:plates/steel'
    }).id("fwnc:crafting/aircraft_engine_b")

    event.remove({ id: 'immersive_aircraft:sail' })
    event.shaped(Item.of('immersive_aircraft:sail',1), [
        'WWS',
        'WWS',
        'WWS'
    ],
    {
        W: '#minecraft:wool',
        S: 'minecraft:string'
    }).id("fwnc:crafting/aircraft_sail_a")
    event.shaped(Item.of('immersive_aircraft:sail',2), [
        'WWS',
        'WWS'
    ],
    {
        W: 'immersiveengineering:hemp_fabric',
        S: 'minecraft:string'
    }).id("fwnc:crafting/aircraft_sail_b")

    event.remove({ id: 'immersive_aircraft:steel_boiler' })
    event.shaped(Item.of('immersive_aircraft:steel_boiler',1), [
        'SSS',
        'SBS',
        'SFS'
    ],
    {
        S: '#c:plates/steel',
        B: 'immersive_aircraft:boiler',
        F: 'minecraft:blast_furnace',
    }).id("fwnc:crafting/aircraft_steel_boiler")

    event.remove({ id: 'immersive_aircraft:industrial_gears' })
    event.shaped(Item.of('immersive_aircraft:industrial_gears',1), [
        ' SS',
        'CPS',
        'CC '
    ],
    {
        S: '#c:ingots/steel',
        p: 'create:precision_mechanism',
        C: '#c:ingots/brass'
    }).id("fwnc:crafting/aircraft_industrial_gears")

    event.remove({ id: 'immersive_aircraft:sturdy_pipes' })
    event.shaped(Item.of('immersive_aircraft:sturdy_pipes',1), [
        '  C',
        'SCS',
        'C  '
    ],
    {
        S: '#c:ingots/steel',
        C: '#c:ingots/brass'
    }).id("fwnc:crafting/aircraft_sturdy_pipes")

    event.remove({ id: 'immersive_aircraft:improved_landing_gear' })
    event.shaped(Item.of('immersive_aircraft:improved_landing_gear',1), [
        ' SS',
        'DDS',
        'DD '
    ],
    {
        S: '#c:ingots/steel',
        D: '#c:plates/plastic'
    }).id("fwnc:crafting/aircraft_improved_landing_gear")

    event.remove({ id: 'immersive_aircraft:biplane' })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            H: {
                item: "immersive_aircraft:hull"
            },
            E: {
                item: "immersive_aircraft:engine"
            },
            P: {
                item: "immersive_aircraft:propeller"
            }
        },
        pattern: [
            "  P  ",
            "HHEHH",
            "  H  ",
            "  H  "
        ],
        result:{
            count: 1,
            id: "immersive_aircraft:biplane"
        },
        show_notification: false
    }).id("fwnc:mechanical_crafter/aircraft_biplane")

    event.remove({ id: 'immersive_aircraft:gyrodyne' })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            H: {
                item: "immersive_aircraft:hull"
            },
            S: {
                item: "immersive_aircraft:sail"
            },
            P: {
                item: "immersive_aircraft:propeller"
            }
        },
        pattern: [
            "  S  ",
            "  S  ",
            "HHPHH",
            "  S  ",
            "  S  "
        ],
        result:{
            count: 1,
            id: "immersive_aircraft:gyrodyne"
        },
        show_notification: false
    }).id("fwnc:mechanical_crafter/aircraft_gyrodyne")
    
    event.remove({ id: 'immersive_aircraft:quadrocopter' })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            H: {
                item: "immersive_aircraft:hull"
            },
            E: {
                item: "immersive_aircraft:engine"
            },
            P: {
                item: "immersive_aircraft:propeller"
            },
            B: {
                item: "minecraft:bamboo_planks"
            }
        },
        pattern: [
            "PB BP",
            "BBHBB",
            " HEH ",
            "BBHBB",
            "PB BP"
        ],
        result:{
            count: 1,
            id: "immersive_aircraft:quadrocopter"
        },
        show_notification: false
    }).id("fwnc:mechanical_crafter/aircraft_quadrocopter")

    event.remove({ id: 'immersive_aircraft:airship' })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            H: {
                item: "immersive_aircraft:hull"
            },
            E: {
                item: "immersive_aircraft:engine"
            },
            S: {
                item: "immersive_aircraft:sail"
            }
        },
        pattern: [
            "SSSSS",
            "SSSSS",
            "SSSSS",
            "HHHHE"
        ],
        result:{
            count: 1,
            id: "immersive_aircraft:airship"
        },
        show_notification: false
    }).id("fwnc:mechanical_crafter/aircraft_airship")

    event.remove({ id: 'immersive_aircraft:warship' })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            H: {
                item: "immersive_aircraft:hull"
            },
            E: {
                item: "immersive_aircraft:engine"
            },
            S: {
                item: "immersive_aircraft:sail"
            },
            G: {
                item: "immersive_aircraft:industrial_gears"
            },
            N: {
                item: "minecraft:netherite_ingot"
            }
        },
        pattern: [
            "SSSSSSSSS",
            "SSSSSSSSS",
            "SSSSSSSSS",
            "EHHHGHHHE",
            " NHHHHHN "
        ],
        result:{
            count: 1,
            id: "immersive_aircraft:warship"
        },
        show_notification: false
    }).id("fwnc:mechanical_crafter/aircraft_warship")

    event.remove({ id: 'man_of_many_planes:scarlet_biplane' })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            H: {
                item: "immersive_aircraft:hull"
            },
            E: {
                item: "immersive_aircraft:nether_engine"
            },
            P: {
                item: "immersive_aircraft:propeller"
            },
            U: {
                tag: "c:plates/aluminum"
            }
        },
        pattern: [
            "  P  ",
            "HHEHH",
            "UUHUU",
            "  H  "
        ],
        result:{
            count: 1,
            id: "man_of_many_planes:scarlet_biplane"
        },
        show_notification: false
    }).id("fwnc:mechanical_crafter/aircraft_scarlet_biplane")

    event.remove({ id: 'man_of_many_planes:economy_plane' })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        key: {
            H: {
                item: "immersive_aircraft:hull"
            },
            E: {
                item: "immersive_aircraft:eco_engine"
            },
            P: {
                item: "immersive_aircraft:propeller"
            },
            U: {
                tag: "c:plates/aluminum"
            }
        },
        pattern: [
            "  P  ",
            "HHEHH",
            "UUHUU",
            "  H  "
        ],
        result:{
            count: 1,
            id: "man_of_many_planes:economy_plane"
        },
        show_notification: false
    }).id("fwnc:mechanical_crafter/aircraft_economy_plane")
})