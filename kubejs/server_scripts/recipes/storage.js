ServerEvents.recipes(event => {
    //backpack
    event.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
    event.shaped(Item.of('sophisticatedbackpacks:upgrade_base',1), [
        'SPS',
        'PLP',
        'SPS'
    ],
    {
        L: '#c:leathers',
        P: '#c:plates/brass',
        S: 'minecraft:string'
    }).id("fwnc:crafting/backpack_upgrade_base_a")
    event.shaped(Item.of('sophisticatedbackpacks:upgrade_base',2), [
        'SPS',
        'PLP',
        'SPS'
    ],
    {
        L: '#c:leathers',
        P: '#c:plates/steel',
        S: 'minecraft:string'
    }).id("fwnc:crafting/backpack_upgrade_base_b")

    //drawer
    event.remove({ id: 'storagedrawers:upgrade_template' })
    event.shaped(Item.of('storagedrawers:upgrade_template',1), [
        'RRR',
        'RDR',
        'RRR'
    ],
    {
        R: '#c:rods/wooden',
        D: '#storagedrawers:drawers'
    }).id("fwnc:crafting/drawer_upgrade_template_a")
    event.shaped(Item.of('storagedrawers:upgrade_template',2), [
        'RUR',
        'UDU',
        'RUR'
    ],
    {
        R: '#c:rods/wooden',
        U: '#c:rods/iron',
        D: '#storagedrawers:drawers'
    }).id("fwnc:crafting/drawer_upgrade_template_b")
    event.shaped(Item.of('storagedrawers:upgrade_template',4), [
        'RUR',
        'UDU',
        'RUR'
    ],
    {
        R: '#c:rods/iron',
        U: '#c:rods/steel',
        D: '#storagedrawers:drawers'
    }).id("fwnc:crafting/drawer_upgrade_template_c")
    event.shaped(Item.of('storagedrawers:upgrade_template',8), [
        'RUR',
        'UDU',
        'RUR'
    ],
    {
        R: '#c:rods/steel',
        U: '#c:rods/aluminum',
        D: '#storagedrawers:drawers'
    }).id("fwnc:crafting/drawer_upgrade_template_d")
    event.shaped(Item.of('storagedrawers:upgrade_template',16), [
        'RUR',
        'UDU',
        'RUR'
    ],
    {
        R: '#c:rods/aluminum',
        U: '#c:rods/netherite',
        D: '#storagedrawers:drawers'
    }).id("fwnc:crafting/drawer_upgrade_template_e")

    event.remove({ id: 'storagedrawers:iron_storage_upgrade' })
    event.shaped(Item.of('storagedrawers:iron_storage_upgrade',1), [
        'RRR',
        'BDB',
        'RRR'
    ],
    {
        R: '#c:rods/iron',
        B: '#c:storage_blocks/iron',
        D: 'storagedrawers:obsidian_storage_upgrade'
    }).id("fwnc:crafting/drawer_iron_storage_upgrade")
    event.remove({ id: 'storagedrawers:gold_storage_upgrade' })
    event.shaped(Item.of('storagedrawers:gold_storage_upgrade',1), [
        'RRR',
        'BDB',
        'RRR'
    ],
    {
        R: '#c:rods/steel',
        B: '#c:storage_blocks/gold',
        D: 'storagedrawers:iron_storage_upgrade'
    }).id("fwnc:crafting/drawer_gold_storage_upgrade")
    event.remove({ id: 'storagedrawers:diamond_storage_upgrade' })
    event.shaped(Item.of('storagedrawers:diamond_storage_upgrade',1), [
        'RRR',
        'BDB',
        'RRR'
    ],
    {
        R: '#c:rods/aluminum',
        B: '#c:storage_blocks/diamond',
        D: 'storagedrawers:gold_storage_upgrade'
    }).id("fwnc:crafting/drawer_diamond_storage_upgrade")
    event.remove({ id: 'storagedrawers:emerald_storage_upgrade' })
    event.shaped(Item.of('storagedrawers:emerald_storage_upgrade',1), [
        'RRR',
        'BDB',
        'RRR'
    ],
    {
        R: '#c:rods/netherite',
        B: '#c:storage_blocks/emerald',
        D: 'storagedrawers:diamond_storage_upgrade'
    }).id("fwnc:crafting/drawer_emerald_storage_upgrade")
})