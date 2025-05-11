ServerEvents.recipes(event => {
    //wooden
    function WoodenRecycle(mod, material) {
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 1600,
            input: {
                item: `${mod}:${material}_boat`
            },
            result: {
                basePredicate: {
                    item: `${mod}:${material}_planks`
                },
                count: 3
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:recycle/${material}_boat`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 1600,
            input: {
                item: `${mod}:${material}_chest_boat`
            },
            result: {
                basePredicate: {
                    item: `${mod}:${material}_planks`
                },
                count: 8
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:recycle/${material}_chest_boat`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 800,
            input: {
                item: `${mod}:${material}_fence`
            },
            result: {
                basePredicate: {
                    item: "minecraft:stick"
                },
                count: 2
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:recycle/${material}_fence`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 800,
            input: {
                item: `${mod}:${material}_fence_gate`
            },
            result: {
                basePredicate: {
                    item: "minecraft:stick"
                },
                count: 2
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:recycle/${material}_fence_gate`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 1200,
            input: {
                item: `${mod}:${material}_trapdoor`
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
        }).id(`fwnc:recycle/${material}_trapdoor`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 800,
            input: {
                item: `${mod}:${material}_sign`
            },
            result: {
                basePredicate: {
                    item: `${mod}:${material}_planks`
                },
                count: 1
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:recycle/${material}_sign`)
        event.custom({
            type: 'immersiveengineering:sawmill',
            energy: 800,
            input: {
                item: `${mod}:${material}_hanging_sign`
            },
            result: {
                basePredicate: {
                    item: `${mod}:${material}_planks`
                },
                count: 2
            },
            secondaryOutputs: [
                {
                    tag: "c:dusts/wood"
                }
            ],
            strippingSecondaries: []
        }).id(`fwnc:recycle/${material}_hanging_sign`)
    }

    WoodenRecycle("minecraft", "oak")
    WoodenRecycle("minecraft", "birch")
    WoodenRecycle("minecraft", "spruce")
    WoodenRecycle("minecraft", "jungle")
    WoodenRecycle("minecraft", "acacia")
    WoodenRecycle("minecraft", "dark_oak")
    WoodenRecycle("minecraft", "crimson")
    WoodenRecycle("minecraft", "warped")
    WoodenRecycle("minecraft", "mangrove")
    WoodenRecycle("minecraft", "cherry")
    WoodenRecycle("minecraft", "bamboo")
    event.custom({
        type: 'immersiveengineering:sawmill',
        energy: 1600,
        input: {
            item: "minecraft:bamboo_raft"
        },
        result: {
            basePredicate: {
                item: "minecraft:bamboo_planks"
            },
            count: 3
        },
        secondaryOutputs: [
            {
                tag: "c:dusts/wood"
            }
        ],
        strippingSecondaries: []
    }).id("fwnc:recycle/bamboo_raft")
    event.custom({
        type: 'immersiveengineering:sawmill',
        energy: 1600,
        input: {
            item: "minecraft:bamboo_chest_raft"
        },
        result: {
            basePredicate: {
                item: "minecraft:bamboo_planks"
            },
            count: 8
        },
        secondaryOutputs: [
            {
                tag: "c:dusts/wood"
            }
        ],
        strippingSecondaries: []
    }).id("fwnc:recycle/bamboo_chest_raft")
    WoodenRecycle("biomesoplenty", "fir")
    WoodenRecycle("biomesoplenty", "redwood")
    WoodenRecycle("biomesoplenty", "mahogany")
    WoodenRecycle("biomesoplenty", "jacaranda")
    WoodenRecycle("biomesoplenty", "palm")
    WoodenRecycle("biomesoplenty", "willow")
    WoodenRecycle("biomesoplenty", "dead")
    WoodenRecycle("biomesoplenty", "magic")
    WoodenRecycle("biomesoplenty", "umbran")
    WoodenRecycle("biomesoplenty", "hellbark")
    WoodenRecycle("biomesoplenty", "pine")
    WoodenRecycle("biomesoplenty", "maple")
    WoodenRecycle("biomesoplenty", "empyreal")
    event.custom({
        type: 'immersiveengineering:sawmill',
        energy: 800,
        input: {
            item: "minecraft:wooden_shovel"
        },
        result: {
            item: "immersiveengineering:dust_wood",
            count: 1
        },
        secondaryOutputs: [],
        strippingSecondaries: []
    }).id("fwnc:recycle/wooden_shovel")
    event.custom({
        type: 'immersiveengineering:sawmill',
        energy: 800,
        input: {
            item: "minecraft:wooden_sword"
        },
        result: {
            item: "immersiveengineering:dust_wood",
            count: 2
        },
        secondaryOutputs: [],
        strippingSecondaries: []
    }).id("fwnc:recycle/wooden_sword")
    event.custom({
        type: 'immersiveengineering:sawmill',
        energy: 800,
        input: {
            item: "minecraft:wooden_axe"
        },
        result: {
            item: "immersiveengineering:dust_wood",
            count: 3
        },
        secondaryOutputs: [],
        strippingSecondaries: []
    }).id("fwnc:recycle/wooden_axe")
    event.custom({
        type: 'immersiveengineering:sawmill',
        energy: 800,
        input: {
            item: "minecraft:wooden_pickaxe"
        },
        result: {
            item: "immersiveengineering:dust_wood",
            count: 3
        },
        secondaryOutputs: [],
        strippingSecondaries: []
    }).id("fwnc:recycle/wooden_pickaxe")
    event.custom({
        type: 'immersiveengineering:sawmill',
        energy: 800,
        input: {
            item: "minecraft:wooden_hoe"
        },
        result: {
            item: "immersiveengineering:dust_wood",
            count: 2
        },
        secondaryOutputs: [],
        strippingSecondaries: []
    }).id("fwnc:recycle/wooden_hoe")
    event.custom({
        type: 'immersiveengineering:sawmill',
        energy: 1600,
        input: {
            item: "minecraft:chest"
        },
        result: {
            item: "immersiveengineering:dust_wood",
            count: 5
        },
        secondaryOutputs: [],
        strippingSecondaries: []
    }).id("fwnc:recycle/chest")

    //stone

    //metal

    //colored_recycle

    //color_plus_woodtype
})