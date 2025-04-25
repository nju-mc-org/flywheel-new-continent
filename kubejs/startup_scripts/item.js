StartupEvents.registry('item', event => {
    const MODID = "fwnc:"
    let itemRegisters = [
        ["alloybrick_brick", "common", false],
        ["alloybrick_clay", "common", false],
        ["cokebrick_brick", "common", false],
        ["cokebrick_clay", "common", false],
        ["blastbrick_brick", "common", false],
        ["blastbrick_clay", "common", false]
    ]
    itemRegisters.forEach(([name, rarity, glow]) => {
        event.create(MODID + name)
            .rarity(rarity)
            .glow(glow)
    })
})

