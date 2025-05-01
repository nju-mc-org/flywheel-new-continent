ServerEvents.recipes(event => {
    //flour and dough problem
    event.remove({ id: 'create:milling/wheat' })
    event.custom({
        type: 'create:milling',
        ingredients: [
            {
                item: "minecraft:wheat"
            }
        ],
        results: [
            {
                id: "tmted:wheat_flour"
            },
            {
                chance: 0.25,
                count: 2,
                id: "tmted:wheat_flour"
            },
            {
                chance: 0.25,
                id: "minecraft:wheat_seeds"
            }
        ],
        processingTime: 150
    }).id("fwnc:food_process/create_milling_wheat_using_tmted_flour")
    event.remove({ id: 'create_wizardry:filling/arcane_essence_flour_filling' })
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "tmted:wheat_flour"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "create_wizardry:mana"
            }
        ],
        results: [
            {
                id: "irons_spellbooks:arcane_essence"
            }
        ]
    }).id("fwnc:food_process/create_filling_arcane_essence_using_tmted_flour")
    event.remove({ id: 'create:crafting/appliances/dough' })
    event.remove({ id: 'create:splashing/wheat_flour' })
    event.remove({ id: 'create:mixing/dough_by_mixing' })
    event.custom({
        type: 'create:splashing',
        ingredients: [
            {
                ingredients: "c:flours/wheat"
            }
        ],
        results: [
            {
                id: "farmersdelight:wheat_dough"
            }
        ]
    }).id("fwnc:food_process/create_splashing_wheat_flour_using_tmted_dough")
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: "c:flours/wheat"
            },
            {
                type: "fluid_stack",
                amount: 1000,
                fluid: "minecraft:water"
            }
        ],
        results: [
            {
                id: "farmersdelight:wheat_dough"
            }
        ]
    }).id("fwnc:food_process/create_mixing_wheat_flour_using_tmted_dough")
    event.remove({ id: 'createaddition:compacting/cake_base' })
    event.remove({ id: 'minecraft:cake' })
    event.remove({ id: 'farmersdelight:cake_from_milk_bottle' })
    event.remove({ id: 'create:crafting/curiosities/cake' })
    event.shaped(Item.of('createaddition:cake_base',1), [
            ' E ',
            'SDS',
            ' D '
        ],
        {
            E: '#c:eggs',
            S: 'minecraft:sugar',
            D: 'farmersdelight:wheat_dough'
        }).id("fwnc:food_process/crafting_cake_base")
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                tag: "c:eggs"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "farmersdelight:wheat_dough"
            }
        ],
        results: [
            {
                id: "createaddition:cake_base"
            }
        ]
    }).id("fwnc:food_process/create_compacting_cake_base_using_tmted_dough")
    event.campfireCooking('minecraft:bread','farmersdelight:wheat_dough',0,2000).id("fwnc:food_process/campfire_bread_using_tmted_dough")
    event.remove({ id: 'farmersdelight:wheat_dough_from_eggs' })
    event.remove({ id: 'farmersdelight:wheat_dough_from_water' })

    //pie
    event.replaceInput({ id: 'farmersdelight:pie_crust' }, "minecraft:wheat", "#c:flours/wheat")
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                tag: "c:flours/wheat"
            },
            {
                tag: "c:flours/wheat"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "minecraft:milk"
            }
        ],
        results: [
            {
                id: "farmersdelight:pie_crust"
            }
        ]
    }).id("fwnc:food_process/create_compacting_pie_crust")

    event.replaceOutput({ id: 'minecraft:pumpkin_pie' }, "minecraft:pumpkin_pie", "minecolonies:raw_pumpkin_pie")
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:eggs"
            },
            {
                item: "farmersdelight:pumpkin_slice"
            },
            {
                item: "farmersdelight:pumpkin_slice"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "farmersdelight:pie_crust"
            }
        ],
        results: [
            {
                id: "minecraft:pumpkin_pie"
            }
        ]
    }).id("fwnc:food_process/create_compacting_pumpkin_pie")
    event.custom({
        type: 'farmersdelight:cooking',
        experience: 1.0,
        ingredients: [
            {
                item: "farmersdelight:pumpkin_slice"
            },
            {
                item: "farmersdelight:pumpkin_slice"
            },
            {
                item: "farmersdelight:pie_crust"
            },
            {
                tag: "c:eggs"
            },
            {
                item: "minecraft:sugar"
            }
        ],
        recipe_book_tab: "meals",
        result: {
            id: "minecraft:pumpkin_pie"
        }
    }).id("fwnc:food_process/cooking_pumpkin_pie")

    event.remove({ id: 'farmersdelight:apple_pie' })
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:flours/wheat"
            },
            {
                item: "minecraft:apple"
            },
            {
                item: "minecraft:apple"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "farmersdelight:pie_crust"
            }
        ],
        results: [
            {
                id: "farmersdelight:apple_pie"
            }
        ]
    }).id("fwnc:food_process/create_compacting_apple_pie")
    event.custom({
        type: 'farmersdelight:cooking',
        experience: 1.0,
        ingredients: [
            {
                tag: "c:flours/wheat"
            },
            {
                item: "minecraft:apple"
            },
            {
                item: "minecraft:apple"
            },
            {
                item: "farmersdelight:pie_crust"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "minecraft:sugar"
            }
        ],
        recipe_book_tab: "meals",
        result: {
            id: "farmersdelight:apple_pie"
        }
    }).id("fwnc:food_process/cooking_apple_pie")

    event.remove({ id: 'farmersdelight:sweet_berry_cheesecake' })
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "farmersdelight:pie_crust"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "minecraft:milk"
            }
        ],
        results: [
            {
                id: "farmersdelight:sweet_berry_cheesecake"
            }
        ]
    }).id("fwnc:food_process/create_compacting_sweet_berry_cheesecake")
    event.custom({
        type: 'farmersdelight:cooking',
        experience: 1.0,
        ingredients: [
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "minecraft:sweet_berries"
            },
            {
                item: "farmersdelight:pie_crust"
            },
            {
                tag: "c:foods/milk"
            }
        ],
        recipe_book_tab: "meals",
        result: {
            id: "farmersdelight:sweet_berry_cheesecake"
        }
    }).id("fwnc:food_process/cooking_sweet_berry_cheesecake")

    event.remove({ id: 'farmersdelight:chocolate_pie' })
    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "minecraft:sugar"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "farmersdelight:pie_crust"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "create:chocolate"
            }
        ],
        results: [
            {
                id: "farmersdelight:chocolate_pie"
            }
        ]
    }).id("fwnc:food_process/create_compacting_chocolate_pie")
    event.custom({
        type: 'farmersdelight:cooking',
        experience: 1.0,
        ingredients: [
            {
                item: "minecraft:cocoa_beans"
            },
            {
                item: "minecraft:cocoa_beans"
            },
            {
                item: "farmersdelight:pie_crust"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "minecraft:sugar"
            },
            {
                tag: "c:foods/milk"
            }
        ],
        recipe_book_tab: "meals",
        result: {
            id: "farmersdelight:chocolate_pie"
        }
    }).id("fwnc:food_process/cooking_chocolate_pie")

    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:eggs"
            },
            {
                item: "fruitsdelight:pineapple_slice"
            },
            {
                item: "fruitsdelight:pineapple_slice"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "farmersdelight:pie_crust"
            }
        ],
        results: [
            {
                count: 2,
                id: "fruitsdelight:pineapple_pie"
            }
        ]
    }).id("fwnc:food_process/create_compacting_pineapple_pie")

    //drink
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "minecraft:glass_bottle"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "create:chocolate"
            }
        ],
        results: [
            {
                id: "farmersdelight:hot_cocoa"
            }
        ]
    }).id("fwnc:food_process/create_filling_hot_cocoa")
    event.custom({
        type: 'immersiveengineering:bottling_machine',
        fluid: {
            amount: 250,
            tag: "c:chocolates"
        },
        input: {
            item: "minecraft:glass_bottle"
        },
        results: [
            {
                item: "farmersdelight:hot_cocoa"
            }
        ]
    }).id("fwnc:food_process/ie_bottling_hot_cocoa")

    event.remove({ id: 'tmted:bottling/melon_juice' })
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "minecraft:glass_bottle"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "tmted:melon_juice"
            }
        ],
        results: [
            {
                id: "farmersdelight:melon_juice"
            }
        ]
    }).id("fwnc:food_process/create_filling_melon_juice")
    event.custom({
        type: 'immersiveengineering:bottling_machine',
        fluid: {
            amount: 250,
            tag: "c:melon_juice"
        },
        input: {
            item: "minecraft:glass_bottle"
        },
        results: [
            {
                item: "farmersdelight:melon_juice"
            }
        ]
    }).id("fwnc:food_process/ie_bottling_melon_juice")

    event.remove({ id: 'tmted:bottling/apple_cider' })
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "minecraft:glass_bottle"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "tmted:apple_cider"
            }
        ],
        results: [
            {
                id: "farmersdelight:apple_cider"
            }
        ]
    }).id("fwnc:food_process/create_filling_apple_cider")
    event.custom({
        type: 'immersiveengineering:bottling_machine',
        fluid: {
            amount: 250,
            tag: "c:apple_cider"
        },
        input: {
            item: "minecraft:glass_bottle"
        },
        results: [
            {
                item: "farmersdelight:apple_cider"
            }
        ]
    }).id("fwnc:food_process/ie_bottling_apple_cider")
    event.remove({ id: 'tmted:mixer/apple_cider' })
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "minecraft:sugar"
            },
            {
                item: "minecraft:apple"
            },
            {
                item: "minecraft:apple"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "immersiveengineering:ethanol"
            }
        ],
        results: [
            {
                amount: 250,
                id: "tmted:apple_cider"
            }
        ]
    }).id("fwnc:food_process/create_mixer_apple_cider")
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "minecraft:sugar"
            },
            {
                item: "minecraft:apple"
            },
            {
                item: "minecraft:apple"
            },
            {
                type: "fluid_stack",
                amount: 50,
                fluid: "createaddition:bioethanol"
            }
        ],
        results: [
            {
                amount: 250,
                id: "tmted:apple_cider"
            }
        ]
    }).id("fwnc:food_process/create_mixer_apple_cider_by_bioethanol")
    event.custom({
        type: 'immersiveengineering:mixer',
        energy: 3200,
        fluid: {
            amount: 500,
            tag: "c:ethanol"
        },
        inputs: [
            {
                item: "minecraft:apple"
            },
            {
                item: "minecraft:sugar"
            }
        ],
        result: {
            amount: 500,
            id: "tmted:apple_cider"
        }
    }).id("fwnc:food_process/ie_mixer_apple_cider")

    event.remove({ id: 'tmted:bottling/tomato_sauce' })
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "minecraft:bowl"
            },
            {
                type: "fluid_stack",
                amount: 150,
                fluid: "tmted:tomato_sauce"
            }
        ],
        results: [
            {
                id: "farmersdelight:tomato_sauce"
            }
        ]
    }).id("fwnc:food_process/create_filling_tomato_sauce")
    event.custom({
        type: 'immersiveengineering:bottling_machine',
        fluid: {
            amount: 150,
            tag: "c:tomato_sauce"
        },
        input: {
            item: "minecraft:bowl"
        },
        results: [
            {
                item: "farmersdelight:tomato_sauce"
            }
        ]
    }).id("fwnc:food_process/ie_bottling_tomato_sauce")
})