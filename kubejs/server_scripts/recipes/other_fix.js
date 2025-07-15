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
    event.stonecutting(Item.of('create_connected:copycat_block', 1), '#c:ingots/iron').id("fwnc:stonecutting/copycat_by_iron")
    event.stonecutting(Item.of('create_connected:copycat_block', 2), '#c:ingots/wrought_iron').id("fwnc:stonecutting/copycat_by_wrought_iron")
    event.stonecutting(Item.of('create_connected:copycat_block', 4), '#c:ingots/steel').id("fwnc:stonecutting/copycat_by_steel")
    event.stonecutting(Item.of('create_connected:copycat_block', 2), '#c:ingots/aluminum').id("fwnc:stonecutting/copycat_by_aluminum")

    //server_protect
    event.remove({ id: "immersiveengineering:crafting/turret_chem" })
    event.remove({ id: "immersiveengineering:crafting/turret_gun" })
})