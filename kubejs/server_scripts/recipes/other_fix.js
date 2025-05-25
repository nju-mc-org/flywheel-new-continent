ServerEvents.recipes(event => {
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
    event.remove({ id: "create:schematicannon" })
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
})