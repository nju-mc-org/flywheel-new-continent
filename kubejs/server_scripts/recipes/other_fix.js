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
})