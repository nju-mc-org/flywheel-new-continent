ServerEvents.recipes(event => {
    event.custom({
        type: 'immersiveengineering:generator_fuel',
        burnTime: 200,
        fluidTag: "c:biofuel"
    }).id("fwnc:fuel/biofuel")
    event.custom({
        type: 'immersiveengineering:generator_fuel',
        burnTime: 50,
        fluidTag: "c:ethanol"
    }).id("fwnc:fuel/ethanol")
})