ServerEvents.recipes(event => {
    event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
                "item": 'biomesoplenty:rose_quartz_chunk'
            }
        ],
        "results": [
            {
                "id": 'create:rose_quartz'
            }
        ]
    }).id("fwnc:bop_compact/rose_quartz_polish")
    event.shapeless(Item.of('minecraft:glow_ink_sac'),[
        'biomesoplenty:glowworm_silk','minecraft:ink_sac'
    ]).id("fwnc:bop_compact/golw_ink_sac")
    event.custom({type: "create:emptying",
        "ingredients": [
            {
                "item": 'biomesoplenty:blood_bucket'
            }
        ],
        "results": [
            {
                "amount": 50,
                "id": "irons_spellbooks:blood"
            },
            {
                "id": 'minecraft:bucket'
            }
        ]
    }).id("fwnc:bop_compact/blood")
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": 'irons_spellbooks:hogskin'
            },
            {
                "type": "fluid_stack",
                "amount": 1000,
                "fluid": "irons_spellbooks:blood"
            }
        ],
        "results": [
            {
                "id": 'irons_spellbooks:bloody_vellum'
            }
        ]
    }).id("fwnc:filling/bloody_vellum")
})




