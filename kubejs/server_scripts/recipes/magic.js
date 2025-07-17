ServerEvents.recipes(event => {
    let tier_common = ['iron', 'zinc', 'aluminum']
    let tier_uncommon = ['gold', 'brass', 'wrought_iron']
    let tier_rare = ['steel', 'uranium']
    let tier_epic = ['mithril', 'netherite']
    let tier_legendary = ['echo']

    //tier_common
    event.remove({ id: 'irons_spellbooks:mixing/common_ink' })
    event.remove({ id: 'create_wizardry:mixing/common_ink_mana_recipe' })
    event.remove({ id: "create_enchantment_industry:mixing/cei_common_ink_recipe" })
    tier_common.forEach(value => {
        event.custom({
            type: 'create:mixing',
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    item: "minecraft:ink_sac"
                },
                {
                    item: "minecraft:ink_sac"
                },
                {
                    item: "minecraft:ink_sac"
                },
                {
                    type: "fluid_stack",
                    amount: 500,
                    fluid: "create_wizardry:mana"
                }
            ],
            results: [
                {
                    amount: 750,
                    id: "irons_spellbooks:common_ink"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_brewing_common_ink_fluid_by_${value}`)
        event.custom({
            type: 'create:mixing',
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    item: "minecraft:ink_sac"
                },
                {
                    item: "minecraft:ink_sac"
                },
                {
                    item: "minecraft:ink_sac"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                }
            ],
            results: [
                {
                    amount: 750,
                    id: "irons_spellbooks:common_ink"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_brewing_common_ink_solid_by_${value}`)
    })
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: "c:gems/amethyst"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "create_wizardry:mana"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:common_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_common_ink_fluid_by_amethyst")
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: "c:gems/amethyst"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:common_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_common_ink_solid_by_amethyst")
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: "c:gems/lapis"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "create_wizardry:mana"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:common_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_common_ink_fluid_by_lapis")
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: "c:gems/lapis"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "minecraft:ink_sac"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:common_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_common_ink_solid_by_lapis")

    //tier_uncommon
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_uncommon_ink' })
    event.remove({ id: 'irons_spellbooks:mixing/uncommon_ink' })
    event.remove({ id: "create_wizardry:mixing/uncommon_ink_mana_recipe" })
    event.custom({
        type: "irons_spellbooks:alchemist_cauldron_brew",
        base_fluid: {
            amount: 1000,
            id: "irons_spellbooks:common_ink"
        },
        input: {
            item: "fwnc:uncommon_upgrade_essence"
        },
        results: [
            {
                amount: 250,
                id: "irons_spellbooks:uncommon_ink"
            }
        ]
    }).id("fwnc:alchemist_cauldron/brew_uncommon_ink")
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "fwnc:uncommon_upgrade_essence"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "create_wizardry:mana"
            },
            {
                type: "fluid_stack",
                amount: 1000,
                fluid: "irons_spellbooks:common_ink"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:uncommon_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_uncommon_ink_fluid")
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "fwnc:uncommon_upgrade_essence"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                type: "fluid_stack",
                amount: 1000,
                fluid: "irons_spellbooks:common_ink"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:uncommon_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_uncommon_ink_solid")
    tier_uncommon.forEach(value => {
        event.custom({
            type: 'create:mixing',
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    type: "fluid_stack",
                    amount: 250,
                    fluid: "create_wizardry:mana"
                }
            ],
            results: [
                {
                    id: "fwnc:uncommon_upgrade_essence"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_uncommon_essence_fluid_by_${value}`)
        event.custom({
            type: 'create:mixing',
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                }
            ],
            results: [
                {
                    id: "fwnc:uncommon_upgrade_essence"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_uncommon_essence_solid_by_${value}`)
    })
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "create:polished_rose_quartz"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "create_wizardry:mana"
            }
        ],
        results: [
            {
                id: "fwnc:uncommon_upgrade_essence"
            }
        ]
    }).id("fwnc:mixing/create_mixing_uncommon_essence_fluid_by_rose_quartz")
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: "create:polished_rose_quartz"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            }
        ],
        results: [
            {
                id: "fwnc:uncommon_upgrade_essence"
            }
        ]
    }).id("fwnc:mixing/create_mixing_uncommon_essence_solid_by_rose_quartz")

    //rare_tier
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_rare_ink' })
    event.remove({ id: 'irons_spellbooks:mixing/rare_ink' })
    event.remove({ id: "create_wizardry:mixing/rare_ink_mana_recipe" })
    event.remove({ id: "create_enchantment_industry:mixing/cei_rare_ink_recipe" })
    event.custom({
        type: "irons_spellbooks:alchemist_cauldron_brew",
        base_fluid: {
            amount: 1000,
            id: "irons_spellbooks:uncommon_ink"
        },
        input: {
            item: "fwnc:rare_upgrade_essence"
        },
        results: [
            {
                amount: 250,
                id: "irons_spellbooks:rare_ink"
            }
        ]
    }).id("fwnc:alchemist_cauldron/brew_rare_ink")
    event.custom({
        type: 'create:mixing',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "fwnc:rare_upgrade_essence"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "create:experience_nugget"
            },
            {
                item: "create:experience_nugget"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "create_wizardry:mana"
            },
            {
                type: "fluid_stack",
                amount: 1000,
                fluid: "irons_spellbooks:uncommon_ink"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:rare_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_rare_ink_fluid")
    event.custom({
        type: 'create:mixing',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "fwnc:rare_upgrade_essence"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "create:experience_nugget"
            },
            {
                item: "create:experience_nugget"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                type: "fluid_stack",
                amount: 1000,
                fluid: "irons_spellbooks:uncommon_ink"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:rare_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_rare_ink_solid")
    tier_rare.forEach(value => {
        event.custom({
            type: 'create:mixing',
            heat_requirement: "heated",
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    type: "fluid_stack",
                    amount: 500,
                    fluid: "create_wizardry:mana"
                }
            ],
            results: [
                {
                    id: "fwnc:rare_upgrade_essence"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_rare_essence_fluid_by_${value}`)
        event.custom({
            type: 'create:mixing',
            heat_requirement: "heated",
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                }
            ],
            results: [
                {
                    id: "fwnc:rare_upgrade_essence"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_rare_essence_solid_by_${value}`)
    })
    event.custom({
        type: 'create:mixing',
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:gems/diamond"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "create_wizardry:mana"
            }
        ],
        results: [
            {
                id: "fwnc:rare_upgrade_essence"
            }
        ]
    }).id("fwnc:mixing/create_mixing_rare_essence_fluid_by_diamond")
    event.custom({
        type: 'create:mixing',
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:gems/diamond"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            }
        ],
        results: [
            {
                id: "fwnc:rare_upgrade_essence"
            }
        ]
    }).id("fwnc:mixing/create_mixing_rare_essence_solid_by_diamond")

    //tier_epic
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_epic_ink' })
    event.remove({ id: 'irons_spellbooks:mixing/epic_ink' })
    event.remove({ id: "create_wizardry:mixing/epic_ink_mana_recipe" })
    event.remove({ id: "create_enchantment_industry:mixing/cei_epic_ink_recipe" })
    event.custom({
        type: "irons_spellbooks:alchemist_cauldron_brew",
        base_fluid: {
            amount: 1000,
            id: "irons_spellbooks:rare_ink"
        },
        input: {
            item: "fwnc:epic_upgrade_essence"
        },
        results: [
            {
                amount: 250,
                id: "irons_spellbooks:epic_ink"
            }
        ]
    }).id("fwnc:alchemist_cauldron/brew_epic_ink")
    event.custom({
        type: 'create:mixing',
        heat_requirement: "heated",
        ingredients: [
            {
                item: "fwnc:epic_upgrade_essence"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "create_sa:heap_of_experience"
            },
            {
                item: "create_sa:heap_of_experience"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                type: "fluid_stack",
                amount: 500,
                fluid: "irons_spellbooks:blood"
            },
            {
                type: "fluid_stack",
                amount: 1000,
                fluid: "irons_spellbooks:rare_ink"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:epic_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_epic_ink")
    tier_epic.forEach(value => {
        event.custom({
            type: 'create:mixing',
            heat_requirement: "heated",
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    type: "fluid_stack",
                    amount: 1000,
                    fluid: "create_wizardry:mana"
                }
            ],
            results: [
                {
                    id: "fwnc:epic_upgrade_essence"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_epic_essence_fluid_by_${value}`)
        event.custom({
            type: 'create:mixing',
            heat_requirement: "heated",
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                }
            ],
            results: [
                {
                    id: "fwnc:epic_upgrade_essence"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_epic_essence_solid_by_${value}`)
    })

    //tier_legendary
    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_legendary_ink' })
    event.remove({ id: 'irons_spellbooks:mixing/legendary_ink' })
    event.remove({ id: "create_wizardry:mixing/legendary_ink_mana_recipe" })
    event.remove({ id: "create_enchantment_industry:mixing/cei_legendary_ink_recipe" })
    event.custom({
        type: "irons_spellbooks:alchemist_cauldron_brew",
        base_fluid: {
            amount: 1000,
            id: "irons_spellbooks:epic_ink"
        },
        input: {
            item: "fwnc:legendary_upgrade_essence"
        },
        results: [
            {
                amount: 250,
                id: "irons_spellbooks:legendary_ink"
            }
        ]
    }).id("fwnc:alchemist_cauldron/brew_legendary_ink")
    event.custom({
        type: 'create:mixing',
        heat_requirement: "superheated",
        ingredients: [
            {
                item: "fwnc:legendary_upgrade_essence"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "minecraft:glow_ink_sac"
            },
            {
                item: "create_enchantment_industry:super_experience_nugget"
            },
            {
                item: "create_enchantment_industry:super_experience_nugget"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:arcane_essence"
            },
            {
                item: "irons_spellbooks:cinder_essence"
            },
            {
                type: "fluid_stack",
                amount: 50,
                fluid: "create_dragons_plus:dragon_breath"
            },
            {
                type: "fluid_stack",
                amount: 1000,
                fluid: "irons_spellbooks:epic_ink"
            }
        ],
        results: [
            {
                amount: 750,
                id: "irons_spellbooks:legendary_ink"
            }
        ]
    }).id("fwnc:mixing/create_mixing_brewing_legendary_ink")
    tier_legendary.forEach(value => {
        event.custom({
            type: 'create:mixing',
            heat_requirement: "superheated",
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    type: "fluid_stack",
                    amount: 1000,
                    fluid: "create_wizardry:mana"
                },
                {
                    item: "irons_spellbooks:cinder_essence"
                }
            ],
            results: [
                {
                    id: "fwnc:legendary_upgrade_essence"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_legendary_essence_fluid_by_${value}`)
        event.custom({
            type: 'create:mixing',
            heat_requirement: "superheated",
            ingredients: [
                {
                    tag: `c:ingots/${value}`
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:arcane_essence"
                },
                {
                    item: "irons_spellbooks:cinder_essence"
                }
            ],
            results: [
                {
                    id: "fwnc:legendary_upgrade_essence"
                }
            ]
        }).id(`fwnc:mixing/create_mixing_legendary_essence_solid_by_${value}`)
    })

    //cei
    event.custom({
        type: 'create:mixing',
        heat_requirement: "superheated",
        ingredients: [
            {
                item: "create:polished_rose_quartz"
            },
            {
                tag: "c:gems/lapis"
            },
            {
                type: "fluid_stack",
                amount: 24,
                fluid: "create_enchantment_industry:experience"
            },
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "create_dragons_plus:dragon_breath"
            }
        ],
        results: [
            {
                id: "create_enchantment_industry:super_experience_nugget"
            }
        ]
    }).id("fwnc:mixing/create_mixing_super_experience")
    event.custom({
        type: 'create:mixing',
        heat_requirement: "superheated",
        ingredients: [
            {
                item: "create:polished_rose_quartz"
            },
            {
                tag: "c:gems/lapis"
            },
            {
                type: "fluid_stack",
                amount: 24,
                fluid: "sophisticatedcore:xp_still"
            },
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "create_dragons_plus:dragon_breath"
            }
        ],
        results: [
            {
                id: "create_enchantment_industry:super_experience_nugget"
            }
        ]
    }).id("fwnc:mixing/create_mixing_super_experience_b")
    event.custom({
        type: 'create:mixing',
        heat_requirement: "superheated",
        ingredients: [
            {
                item: "create:polished_rose_quartz"
            },
            {
                tag: "c:gems/lapis"
            },
            {
                item: "create_sa:heap_of_experience"
            },
            {
                item: "create_sa:heap_of_experience"
            },
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "create_dragons_plus:dragon_breath"
            }
        ],
        results: [
            {
                id: "create_enchantment_industry:super_experience_nugget"
            }
        ]
    }).id("fwnc:mixing/create_mixing_super_experience_c")
})