StartupEvents.registry('item', event => {
    const MODID = "fwnc:"
    let itemRegisters = [
        ["alloybrick_brick", "common", false],
        ["alloybrick_clay", "common", false],
        ["cokebrick_brick", "common", false],
        ["cokebrick_clay", "common", false],
        ["blastbrick_brick", "common", false],
        ["blastbrick_clay", "common", false],
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
})

