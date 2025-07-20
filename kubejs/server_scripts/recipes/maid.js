ServerEvents.recipes(event => {
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "create:experience_block"
            },
            {
                "tag": "touhou_little_maid:gohei_enchantable"
            }
        ],
        "keep_held_item": true,
        "results": [
            {
                "id": "touhou_little_maid:power_point"
            }
        ]
    }).id("fwnc:deploying/power_point_from_exp")
    event.remove({ id: 'touhou_little_maid:altar_recipe/spawn_box' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:entity_placeholder").set("touhou_little_maid:recipe_id", "spawn_box"),
        ["irons_spellbooks:evocation_rune", "irons_spellbooks:evocation_rune", "irons_spellbooks:arcane_rune", "irons_spellbooks:arcane_rune", "irons_spellbooks:mithril_ingot", "create:cardboard_block"],
        2.5,
        "touhou_little_maid:box",
        "jei.touhou_little_maid.altar_craft.spawn_box.result"
    ).id("fwnc:maid_altar/spawn")
    event.remove({ id: 'touhou_little_maid:altar_recipe/reborn_maid' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:entity_placeholder").set("touhou_little_maid:recipe_id", "reborn_maid"),
        ["touhou_little_maid:film", "irons_spellbooks:evocation_rune", "irons_spellbooks:evocation_rune", "irons_spellbooks:arcane_rune", "irons_spellbooks:arcane_rune", "irons_spellbooks:arcane_ingot"],
        2.0,
        "touhou_little_maid:maid",
        "jei.touhou_little_maid.altar_craft.reborn_maid.result"
    ).id("fwnc:maid_altar/reborn")
    event.remove({ id: 'touhou_little_maid:altar_recipe/ultramarine_orb_elixir' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:ultramarine_orb_elixir").withCount(1),
        [
            {
                "item": "minecraft:totem_of_undying",
                "count": 1
            },
            {
                "item": "minecraft:totem_of_undying",
                "count": 1
            },
            {
                "item": "irons_spellbooks:nature_rune",
                "count": 1
            },
            {
                "item": "irons_spellbooks:nature_rune",
                "count": 1
            },
            {
                "item": "irons_spellbooks:holy_rune",
                "count": 1
            },
            {
                "item": "irons_spellbooks:holy_rune",
                "count": 1
            }
        ],
        2.5
    ).id("fwnc:maid_altar/ultramarine_orb_elixir")
    event.remove({ id: 'touhou_little_maid:altar_recipe/projectile_protect_bauble' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:projectile_protect_bauble").withCount(1),
        [
            {
                "item": "irons_spellbooks:upgrade_orb",
                "count": 1
            },
            {
                "item": "irons_spellbooks:evocation_rune",
                "count": 1
            },
            {
                "item": "minecraft:shield",
                "count": 1
            },
            {
                "item": "minecraft:shield",
                "count": 1
            },
            {
                "item": "minecraft:shield",
                "count": 1
            },
            {
                "item": "minecraft:shield",
                "count": 1
            }
        ],
        2.0
    ).id("fwnc:maid_altar/projectile_protect_bauble")
    event.remove({ id: 'touhou_little_maid:altar_recipe/fire_protect_bauble' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:fire_protect_bauble").withCount(1),
        [
            {
                "item": "irons_spellbooks:upgrade_orb",
                "count": 1
            },
            {
                "item": "irons_spellbooks:fire_rune",
                "count": 1
            },
            {
                "item": "minecraft:blaze_powder",
                "count": 1
            },
            {
                "item": "minecraft:blaze_powder",
                "count": 1
            },
            {
                "item": "minecraft:blaze_powder",
                "count": 1
            },
            {
                "item": "minecraft:blaze_powder",
                "count": 1
            }
        ],
        2.0
    ).id("fwnc:maid_altar/fire_protect_bauble")
    event.remove({ id: 'touhou_little_maid:altar_recipe/drown_protect_bauble' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:drown_protect_bauble").withCount(1),
        [
            {
                "item": "irons_spellbooks:upgrade_orb",
                "count": 1
            },
            {
                "item": "minecraft:conduit",
                "count": 1
            },
            {
                "tag": "minecraft:fishes",
                "count": 1
            },
            {
                "tag": "minecraft:fishes",
                "count": 1
            },
            {
                "tag": "minecraft:fishes",
                "count": 1
            },
            {
                "tag": "minecraft:fishes",
                "count": 1
            }
        ],
        2.0
    ).id("fwnc:maid_altar/drown_protect_bauble")
    event.remove({ id: 'touhou_little_maid:altar_recipe/fall_protect_bauble' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:fall_protect_bauble").withCount(1),
        [
            {
                "item": "irons_spellbooks:upgrade_orb",
                "count": 1
            },
            {
                "item": "irons_spellbooks:holy_rune",
                "count": 1
            },
            {
                "item": "minecraft:feather",
                "count": 1
            },
            {
                "item": "minecraft:feather",
                "count": 1
            },
            {
                "item": "minecraft:feather",
                "count": 1
            },
            {
                "item": "minecraft:feather",
                "count": 1
            }
        ],
        2.0
    ).id("fwnc:maid_altar/fall_protect_bauble")
    event.remove({ id: 'touhou_little_maid:altar_recipe/explosion_protect_bauble' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:explosion_protect_bauble").withCount(1),
        [
            {
                "item": "irons_spellbooks:upgrade_orb",
                "count": 1
            },
            {
                "item": "minecraft:netherite_block",
                "count": 1
            },
            {
                "item": "minecraft:obsidian",
                "count": 1
            },
            {
                "item": "minecraft:obsidian",
                "count": 1
            },
            {
                "item": "minecraft:obsidian",
                "count": 1
            },
            {
                "item": "minecraft:obsidian",
                "count": 1
            }
        ],
        2.0
    ).id("fwnc:maid_altar/explosion_protect_bauble")
    event.remove({ id: 'touhou_little_maid:altar_recipe/magic_protect_bauble' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:magic_protect_bauble").withCount(1),
        [
            {
                "item": "irons_spellbooks:upgrade_orb",
                "count": 1
            },
            {
                "item": "irons_spellbooks:nature_rune",
                "count": 1
            },
            {
                "item": "minecraft:sugar",
                "count": 1
            },
            {
                "item": "minecraft:sugar",
                "count": 1
            },
            {
                "item": "minecraft:sugar",
                "count": 1
            },
            {
                "item": "minecraft:sugar",
                "count": 1
            }
        ],
        2.0
    ).id("fwnc:maid_altar/magic_protect_bauble")
    event.remove({ id: 'touhou_little_maid:altar_recipe/nimble_fabric' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:nimble_fabric").withCount(1),
        [
            {
                "item": "irons_spellbooks:magic_cloth",
                "count": 1
            },
            {
                "item": "irons_spellbooks:magic_cloth",
                "count": 1
            },
            {
                "item": "irons_spellbooks:magic_cloth",
                "count": 1
            },
            {
                "item": "irons_spellbooks:ender_rune",
                "count": 1
            }
        ],
        1.5
    ).id("fwnc:maid_altar/nimble_fabric")
    event.remove({ id: 'touhou_little_maid:altar_recipe/item_magnet_bauble' })
    event.recipes.touhou_little_maid.altar_recipe_serializers(
        Item.of("touhou_little_maid:item_magnet_bauble").withCount(1),
        [
            {
                "item": "minecraft:redstone",
                "count": 1
            },
            {
                "item": "create_sa:copper_magnet",
                "count": 1
            },
            {
                "item": "minecraft:iron_ingot",
                "count": 1
            }
        ],
        1.5
    ).id("fwnc:maid_altar/item_magnet_bauble")
})