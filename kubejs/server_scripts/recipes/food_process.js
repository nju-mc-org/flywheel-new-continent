ServerEvents.recipes(event => {
    function FurnaceFood(name, input, output) {
        event.smelting(output, input, 0, 2000).id(`fwnc:food_process/smelting_${name}`)
        event.smoking(output, input, 0, 2000).id(`fwnc:food_process/smoking_${name}`)
        event.campfireCooking(output, input, 0, 2000).id(`fwnc:food_process/campfire_${name}`)
    }

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

    //cookie
    event.remove({ id: 'minecraft:cookie' })
    event.shapeless(Item.of('minecolonies:cookie_dough',8),['#c:doughs/wheat', 'minecraft:cocoa_beans', 'minecraft:cocoa_beans']).id("fwnc:food_process/crafting_cookie_dough")
    event.remove({ id: 'farmersdelight:sweet_berry_cookie' })
    event.shapeless(Item.of('fwnc:sweet_berry_cookie_dough',8),['#c:doughs/wheat', 'minecraft:sweet_berries', 'minecraft:sweet_berries']).id("fwnc:food_process/crafting_sweet_berry_cookie_dough")
    FurnaceFood("sweet_berry_cookie", "fwnc:sweet_berry_cookie_dough", "farmersdelight:sweet_berry_cookie")
    event.remove({ id: 'farmersdelight:honey_cookie' })
    event.shapeless(Item.of('fwnc:honey_cookie_dough',8),['#c:doughs/wheat', 'minecraft:honey_bottle', 'minecraft:honey_bottle']).id("fwnc:food_process/crafting_honey_cookie_dough").replaceIngredient({ item: "minecraft:honey_bottle" }, Item.of('minecraft:glass_bottle'))
    FurnaceFood("honey_cookie", "fwnc:honey_cookie_dough", "farmersdelight:honey_cookie")
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                tag: "c:doughs/wheat"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "create:honey"
            }
        ],
        results: [
            {
                count: 8,
                id: "fwnc:honey_cookie_dough"
            }
        ]
    }).id("fwnc:food_process/create_filling_honey_cookie_dough")
    event.remove({ id: 'fruitsdelight:bayberry_cookie' })
    event.shapeless(Item.of('fwnc:bayberry_cookie_dough',8),['#c:doughs/wheat', 'fruitsdelight:bayberry', 'fruitsdelight:bayberry']).id("fwnc:food_process/crafting_bayberry_cookie_dough")
    FurnaceFood("bayberry_cookie", "fwnc:bayberry_cookie_dough", "fruitsdelight:bayberry_cookie")
    event.remove({ id: 'fruitsdelight:persimmon_cookie' })
    event.shapeless(Item.of('fwnc:persimmon_cookie_dough',8),['#c:doughs/wheat', 'fruitsdelight:dried_persimmon', 'fruitsdelight:dried_persimmon']).id("fwnc:food_process/crafting_persimmon_cookie_dough")
    FurnaceFood("persimmon_cookie", "fwnc:persimmon_cookie_dough", "fruitsdelight:persimmon_cookie")
    event.remove({ id: 'fruitsdelight:lemon_cookie' })
    event.shapeless(Item.of('fwnc:lemon_cookie_dough',8),['#c:doughs/wheat', 'fruitsdelight:lemon', 'farmersdelight:milk_bottle']).id("fwnc:food_process/crafting_lemon_cookie_dough").replaceIngredient({ item: "farmersdelight:milk_bottle" }, Item.of('minecraft:glass_bottle'))
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: "c:doughs/wheat"
            },
            {
                item: "fruitsdelight:lemon"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "minecraft:milk"
            }
        ],
        results: [
            {
                count: 8,
                id: "fwnc:lemon_cookie_dough"
            }
        ]
    }).id("fwnc:food_process/create_mixer_lemon_cookie_dough")
    FurnaceFood("lemon_cookie", "fwnc:lemon_cookie_dough", "fruitsdelight:lemon_cookie")
    event.remove({ id: 'fruitsdelight:cranberry_cookie' })
    event.shapeless(Item.of('fwnc:cranberry_cookie_dough',8),['#c:doughs/wheat', 'fruitsdelight:cranberry', 'fruitsdelight:cranberry']).id("fwnc:food_process/crafting_cranberry_cookie_dough")
    FurnaceFood("cranberry_cookie", "fwnc:cranberry_cookie_dough", "fruitsdelight:cranberry_cookie")

    //drink
    function CreateFilling(name, fluid, amount, container, out) {
        event.custom({
            type: 'create:filling',
            ingredients: [
                {
                    item: container
                },
                {
                    type: "fluid_stack",
                    amount: amount,
                    fluid: fluid
                }
            ],
            results: [
                {
                    id: out
                }
            ]
        }).id(`fwnc:food_process/create_filling_${name}`)
    }
    function CreateEmptying(name, fluid, amount, container, input) {
        event.custom({
            type: 'create:emptying',
            ingredients: [
                {
                    item: input
                }
            ],
            results: [
                {
                    amount: amount,
                    fluid: fluid
                },
                {
                    id: container
                }
            ]
        }).id(`fwnc:food_process/create_emptying_${name}`)
    }
    function IEBottling(name, fluidtag, amount, container, out) {
        event.custom({
            type: 'immersiveengineering:bottling_machine',
            fluid: {
                amount: amount,
                tag: fluidtag
            },
            input: {
                item: container
            },
            results: [
                {
                    item: out
                }
            ]
        }).id(`fwnc:food_process/ie_bottling_${name}`)
    }

    CreateFilling("hot_cocoa", "create:chocolate", 250, "minecraft:glass_bottle", "farmersdelight:hot_cocoa")
    CreateEmptying("hot_cocoa", "create:chocolate", 250, "minecraft:glass_bottle", "farmersdelight:hot_cocoa")
    IEBottling("hot_cocoa", "c:chocolates", 250, "minecraft:glass_bottle", "farmersdelight:hot_cocoa")
    event.remove({ id: 'tmted:bottling/melon_juice' })
    CreateFilling("melon_juice", "tmted:melon_juice", 250, "minecraft:glass_bottle", "farmersdelight:melon_juice")
    CreateEmptying("melon_juice", "tmted:melon_juice", 250, "minecraft:glass_bottle", "farmersdelight:melon_juice")
    IEBottling("melon_juice", "c:melon_juice", 250, "minecraft:glass_bottle", "farmersdelight:melon_juice")
    event.remove({ id: 'tmted:bottling/apple_cider' })
    CreateFilling("apple_cider", "tmted:apple_cider", 250, "minecraft:glass_bottle", "farmersdelight:apple_cider")
    CreateEmptying("apple_cider", "tmted:apple_cider", 250, "minecraft:glass_bottle", "farmersdelight:apple_cider")
    IEBottling("apple_cider", "c:apple_cider", 250, "minecraft:glass_bottle", "farmersdelight:apple_cider")
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
    CreateFilling("tomato_sauce", "tmted:tomato_sauce", 150, "minecraft:bowl", "farmersdelight:tomato_sauce")
    CreateEmptying("tomato_sauce", "tmted:tomato_sauce", 150, "minecraft:bowl", "farmersdelight:tomato_sauce")
    IEBottling("tomato_sauce", "c:tomato_sauce", 150, "minecraft:bowl", "farmersdelight:tomato_sauce")
    IEBottling("builders_tea", "c:teas", 250, "minecraft:glass_bottle", "create:builders_tea")

    IEBottling("hamimelon_juice", "c:hamimelon_juice", 250, "minecraft:glass_bottle", "fruitsdelight:hamimelon_juice")
    IEBottling("orange_juice", "c:orange_juice", 250, "minecraft:glass_bottle", "fruitsdelight:orange_juice")
    IEBottling("pear_juice", "c:pear_juice", 250, "minecraft:glass_bottle", "fruitsdelight:pear_juice")
    IEBottling("lemon_juice", "c:lemon_juice", 250, "minecraft:glass_bottle", "fruitsdelight:lemon_juice")
    IEBottling("kiwi_juice", "c:kiwi_juice", 250, "minecraft:glass_bottle", "fruitsdelight:kiwi_juice")
    IEBottling("bayberry_soup", "c:bayberry_soup", 250, "minecraft:glass_bottle", "fruitsdelight:bayberry_soup")
    IEBottling("hawberry_tea", "c:hawberry_tea", 250, "minecraft:glass_bottle", "fruitsdelight:hawberry_tea")
    IEBottling("mango_tea", "c:mango_tea", 250, "minecraft:glass_bottle", "fruitsdelight:mango_tea")
    IEBottling("peach_tea", "c:peach_tea", 250, "minecraft:glass_bottle", "fruitsdelight:peach_tea")
    IEBottling("mangosteen_tea", "c:mangosteen_tea", 250, "minecraft:glass_bottle", "fruitsdelight:mangosteen_tea")
    IEBottling("lychee_cherry_tea", "c:lychee_cherry_tea", 250, "minecraft:glass_bottle", "fruitsdelight:lychee_cherry_tea")
    IEBottling("bellini_cocktail", "c:bellini_cocktail", 250, "minecraft:glass_bottle", "fruitsdelight:bellini_cocktail")

    IEBottling("hamimelon_jello", "c:hamimelon_jello", 125, "minecraft:bowl", "fruitsdelight:hamimelon_jello")
    IEBottling("orange_jello", "c:orange_jello", 125, "minecraft:bowl", "fruitsdelight:orange_jello")
    IEBottling("pear_jello", "c:pear_jello", 125, "minecraft:bowl", "fruitsdelight:pear_jello")
    IEBottling("lemon_jello", "c:lemon_jello", 125, "minecraft:bowl", "fruitsdelight:lemon_jello")
    IEBottling("kiwi_jello", "c:kiwi_jello", 125, "minecraft:bowl", "fruitsdelight:kiwi_jello")
    IEBottling("bayberry_jello", "c:bayberry_jello", 125, "minecraft:bowl", "fruitsdelight:bayberry_jello")
    IEBottling("hawberry_jello", "c:hawberry_jello", 125, "minecraft:bowl", "fruitsdelight:hawberry_jello")
    IEBottling("mango_jello", "c:mango_jello", 125, "minecraft:bowl", "fruitsdelight:mango_jello")
    IEBottling("peach_jello", "c:peach_jello", 125, "minecraft:bowl", "fruitsdelight:peach_jello")
    IEBottling("mangosteen_jello", "c:mangosteen_jello", 125, "minecraft:bowl", "fruitsdelight:mangosteen_jello")
    IEBottling("lychee_jello", "c:lychee_jello", 125, "minecraft:bowl", "fruitsdelight:lychee_jello")
    IEBottling("apple_jello", "c:apple_jello", 125, "minecraft:bowl", "fruitsdelight:apple_jello")
    IEBottling("blueberry_jello", "c:blueberry_jello", 125, "minecraft:bowl", "fruitsdelight:blueberry_jello")
    IEBottling("glowberry_jello", "c:glowberry_jello", 125, "minecraft:bowl", "fruitsdelight:glowberry_jello")
    IEBottling("melon_jello", "c:melon_jello", 125, "minecraft:bowl", "fruitsdelight:melon_jello")
    IEBottling("persimmon_jello", "c:persimmon_jello", 125, "minecraft:bowl", "fruitsdelight:persimmon_jello")
    IEBottling("pineapple_jello", "c:pineapple_jello", 125, "minecraft:bowl", "fruitsdelight:pineapple_jello")
    IEBottling("cranberry_jello", "c:cranberry_jello", 125, "minecraft:bowl", "fruitsdelight:cranberry_jello")
    IEBottling("sweetberry_jello", "c:sweetberry_jello", 125, "minecraft:bowl", "fruitsdelight:sweetberry_jello")
    IEBottling("chorus_jello", "c:chorus_jello", 125, "minecraft:bowl", "fruitsdelight:chorus_jello")
    IEBottling("fig_jello", "c:fig_jello", 125, "minecraft:bowl", "fruitsdelight:fig_jello")
    IEBottling("durian_jello", "c:durian_jello", 125, "minecraft:bowl", "fruitsdelight:durian_jello")

    IEBottling("hamimelon_jam", "c:hamimelon_jam", 125, "minecraft:glass_bottle", "fruitsdelight:hamimelon_jam")
    IEBottling("orange_jam", "c:orange_jam", 125, "minecraft:glass_bottle", "fruitsdelight:orange_jam")
    IEBottling("pear_jam", "c:pear_jam", 125, "minecraft:glass_bottle", "fruitsdelight:pear_jam")
    IEBottling("lemon_jam", "c:lemon_jam", 125, "minecraft:glass_bottle", "fruitsdelight:lemon_jam")
    IEBottling("kiwi_jam", "c:kiwi_jam", 125, "minecraft:glass_bottle", "fruitsdelight:kiwi_jam")
    IEBottling("bayberry_jam", "c:bayberry_jam", 125, "minecraft:glass_bottle", "fruitsdelight:bayberry_jam")
    IEBottling("hawberry_jam", "c:hawberry_jam", 125, "minecraft:glass_bottle", "fruitsdelight:hawberry_jam")
    IEBottling("mango_jam", "c:mango_jam", 125, "minecraft:glass_bottle", "fruitsdelight:mango_jam")
    IEBottling("peach_jam", "c:peach_jam", 125, "minecraft:glass_bottle", "fruitsdelight:peach_jam")
    IEBottling("mangosteen_jam", "c:mangosteen_jam", 125, "minecraft:glass_bottle", "fruitsdelight:mangosteen_jam")
    IEBottling("lychee_jam", "c:lychee_jam", 125, "minecraft:glass_bottle", "fruitsdelight:lychee_jam")
    IEBottling("apple_jam", "c:apple_jam", 125, "minecraft:glass_bottle", "fruitsdelight:apple_jam")
    IEBottling("blueberry_jam", "c:blueberry_jam", 125, "minecraft:glass_bottle", "fruitsdelight:blueberry_jam")
    IEBottling("glowberry_jam", "c:glowberry_jam", 125, "minecraft:glass_bottle", "fruitsdelight:glowberry_jam")
    IEBottling("melon_jam", "c:melon_jam", 125, "minecraft:glass_bottle", "fruitsdelight:melon_jam")
    IEBottling("persimmon_jam", "c:persimmon_jam", 125, "minecraft:glass_bottle", "fruitsdelight:persimmon_jam")
    IEBottling("pineapple_jam", "c:pineapple_jam", 125, "minecraft:glass_bottle", "fruitsdelight:pineapple_jam")
    IEBottling("cranberry_jam", "c:cranberry_jam", 125, "minecraft:glass_bottle", "fruitsdelight:cranberry_jam")
    IEBottling("sweetberry_jam", "c:sweetberry_jam", 125, "minecraft:glass_bottle", "fruitsdelight:sweetberry_jam")
    IEBottling("chorus_jam", "c:chorus_jam", 125, "minecraft:glass_bottle", "fruitsdelight:chorus_jam")
    IEBottling("fig_jam", "c:fig_jam", 125, "minecraft:glass_bottle", "fruitsdelight:fig_jam")
    IEBottling("durian_jam", "c:durian_jam", 125, "minecraft:glass_bottle", "fruitsdelight:durian_jam")

    IEBottling("chocolate_glazed_berries", "c:chocolate", 250, "minecraft:sweet_berries", "create:chocolate_glazed_berries")
    IEBottling("honeyed_apple", "c:honey", 250, "minecraft:apple", "create:honeyed_apple")

    //golden

    //slicing
    event.remove({ id: 'refurbished_furniture:knife' })
    event.shaped(Item.of('refurbished_furniture:knife',1), [
        'N',
        'S'
    ],
    {
        N: '#c:nuggets/wrought_iron',
        S: '#c:rods/treated_wood'
    }).id("fwnc:crafting/home_knife")
})