ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:saddle',1), [
        ' L ',
        'LIL'
    ],
    {
        I: '#c:ingots/iron',
        L: '#c:leathers'
    }).id("fwnc:crafting/saddle")

    event.remove({ id: "tmted:steel_knife" })
    event.shaped(Item.of('tmted:steel_knife',1), [
        'I',
        'S'
    ],
    {
        I: '#c:ingots/steel',
        S: '#c:rods/wooden'
    }).id("fwnc:crafting/steel_knife")
    event.replaceInput({ id: 'structurize:sceptersteel' }, "#c:ingots/iron", "#c:ingots/wrought_iron")

    event.replaceInput({ id: 'create:crafting/kinetics/mechanical_crafter' }, "minecraft:crafting_table", "minecraft:crafter")
    event.remove({ id: "create:crafting/schematics/schematicannon" })
    event.shaped(Item.of('create:schematicannon',1), [
        'PBP',
        'LDL',
        'MCM'
    ],
    {
        P: '#c:plates/obsidian',
        B: '#c:storage_blocks/wrought_iron',
        L: '#minecraft:logs',
        C: '#fwnc:tier_zero_circuit',
        D: 'minecraft:dispenser',
        M: 'create:precision_mechanism'
    }).id("fwnc:crafting/schematicannon")

    event.custom({
        type: 'create:compacting',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "minecraft:stone"
            }
        ],
        results: [
            {
                id: "minecraft:cobbled_deepslate"
            }
        ],
        processingTime: 150
    }).id("fwnc:compacting/stone_to_deepslate")

    event.remove({ id: "create_sa:vault_component" })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "create:item_vault"
            },
            {
                "item": "create:wrench"
            }
        ],
        "keep_held_item": true,
        "results": [
            {
                "id": "create_sa:vault_component"
            }
        ]
    }).id("fwnc:deploying/vault_component_a")
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "create_connected:item_silo"
            },
            {
                "item": "create:wrench"
            }
        ],
        "keep_held_item": true,
        "results": [
            {
                "id": "create_sa:vault_component"
            }
        ]
    }).id("fwnc:deploying/vault_component_b")

    event.remove({ id: "create_enchantment_industry:mixing/exp_to_exp_nugget_from_honeycomb" })
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:honeycomb"
            },
            {
                type: "fluid_stack",
                amount: 3,
                fluid: "create_enchantment_industry:experience"
            }
        ],
        results: [
            {
                id: "create:experience_nugget"
            }
        ]
    }).id("fwnc:compacting/create_compacting_exp_to_exp_nugget_from_honeycomb")
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:honeycomb"
            },
            {
                type: "fluid_stack",
                amount: 3,
                fluid: "sophisticatedcore:xp_still"
            }
        ],
        results: [
            {
                id: "create:experience_nugget"
            }
        ]
    }).id("fwnc:compacting/create_compacting_exp_to_exp_nugget_from_honeycomb_b")
    event.remove({ id: "create_enchantment_industry:mixing/exp_to_exp_nugget" })
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:slime_ball"
            },
            {
                type: "fluid_stack",
                amount: 3,
                fluid: "create_enchantment_industry:experience"
            }
        ],
        results: [
            {
                id: "create:experience_nugget"
            }
        ]
    }).id("fwnc:compacting/create_compacting_exp_to_exp_nugget")
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: "minecraft:slime_ball"
            },
            {
                type: "fluid_stack",
                amount: 3,
                fluid: "sophisticatedcore:xp_still"
            }
        ],
        results: [
            {
                id: "create:experience_nugget"
            }
        ]
    }).id("fwnc:compacting/create_compacting_exp_to_exp_nugget_b")

    //copycat
    function Copycat(material, mul) {
        event.stonecutting(Item.of('create_connected:copycat_block', 1), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_from_${material}`)
        event.stonecutting(Item.of('create_connected:copycat_stairs', 1*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_stairs_from_${material}`)
        event.stonecutting(Item.of('create_connected:copycat_wall', 1*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_wall_from_${material}`)
        event.stonecutting(Item.of('create_connected:copycat_fence_gate', 1*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_fence_gate_from_${material}`)
        event.stonecutting(Item.of('create:copycat_panel', 4*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_panel_from_${material}`)
        event.stonecutting(Item.of('create_connected:copycat_fence', 1*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_fence_from_${material}`)
        event.stonecutting(Item.of('create_connected:copycat_board', 8*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_board_from_${material}`)
        event.stonecutting(Item.of('create_connected:copycat_slab', 2*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_slab_from_${material}`)
        event.stonecutting(Item.of('create_connected:copycat_vertical_step', 4*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_vertical_step_from_${material}`)
        event.stonecutting(Item.of('create_connected:copycat_beam', 4*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_beam_from_${material}`)
        event.stonecutting(Item.of('create:copycat_step', 4*mul), `#c:ingots/${material}`).id(`fwnc:stonecutting/copycat_step_from_${material}`)
    }
    Copycat("iron", 1)
    Copycat("andesite_alloy", 2)
    Copycat("wrought_iron", 2)
    Copycat("steel", 4)
    Copycat("aluminum", 2)

    event.stonecutting(Item.of('create_connected:copycat_stairs', 1), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_stairs")
    event.stonecutting(Item.of('create_connected:copycat_wall', 1), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_wall")
    event.stonecutting(Item.of('create_connected:copycat_fence_gate', 1), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_fence_gate")
    event.stonecutting(Item.of('create:copycat_panel', 4), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_panel")
    event.stonecutting(Item.of('create_connected:copycat_fence', 1), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_fence")
    event.stonecutting(Item.of('create_connected:copycat_board', 8), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_board")
    event.stonecutting(Item.of('create_connected:copycat_slab', 2), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_slab")
    event.stonecutting(Item.of('create_connected:copycat_vertical_step', 4), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_vertical_step")
    event.stonecutting(Item.of('create_connected:copycat_beam', 4), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_beam")
    event.stonecutting(Item.of('create:copycat_step', 4), 'create_connected:copycat_block').id("fwnc:stonecutting/copycat_step")

    //server_protect
    //event.remove({ id: "immersiveengineering:crafting/turret_chem" })
    //event.remove({ id: "immersiveengineering:crafting/turret_gun" })
})