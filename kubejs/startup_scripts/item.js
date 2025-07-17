StartupEvents.registry('item', event => {
    const MODID = "fwnc:"
    function MaterialRegister(name, rarity) {
        event.create(MODID + name + '_ingot')
            .rarity(rarity)
            .texture("fwnc:item/material/" + name + "/ingot")
            .tag("c:ingots/wrought_iron")
        event.create(MODID + name + '_nugget')
            .rarity(rarity)
            .texture("fwnc:item/material/" + name + "/nugget")
            .tag("c:nuggets/wrought_iron")
        event.create(MODID + name + '_dust')
            .rarity(rarity)
            .texture("fwnc:item/material/" + name + "/dust")
            .tag("c:dusts/wrought_iron")
        event.create(MODID + name + '_plate')
            .rarity(rarity)
            .texture("fwnc:item/material/" + name + "/plate")
            .tag("c:plates/wrought_iron")
        event.create(MODID + name + '_rod')
            .rarity(rarity)
            .texture("fwnc:item/material/" + name + "/rod")
            .tag("c:rods/wrought_iron")
    }
    let itemRegisters = [
        ["coin", "rare", false],
        ["uncommon_upgrade_essence", "common", false],
        ["rare_upgrade_essence", "common", false],
        ["epic_upgrade_essence", "common", false],
        ["legendary_upgrade_essence", "common", false],
        ["alloybrick_brick", "common", false],
        ["alloybrick_clay", "common", false],
        ["cokebrick_brick", "common", false],
        ["cokebrick_clay", "common", false],
        ["blastbrick_brick", "common", false],
        ["blastbrick_clay", "common", false],
        ["cookie_dough", "common", false],
        ["sweet_berry_cookie_dough", "common", false],
        ["honey_cookie_dough", "common", false],
        ["bayberry_cookie_dough", "common", false],
        ["persimmon_cookie_dough", "common", false],
        ["lemon_cookie_dough", "common", false],
        ["cranberry_cookie_dough", "common", false],
        ["mechanical_circuit", "common", false],
        ["incomplete_mechanical_circuit", "common", false],
        ["early_electronic_circuit", "common", false],
        ["incomplete_early_electronic_circuit", "common", false],
        ["early_circuit_complex", "common", false],
        ["incomplete_early_circuit_complex", "common", false]
    ]
    itemRegisters.forEach(([name, rarity, glow]) => {
        event.create(MODID + name)
            .rarity(rarity)
            .glow(glow)
    })
    MaterialRegister("wrought_iron", "common")
    Platform.mods.kubejs.name = "Flywheel: New Continent"
})

