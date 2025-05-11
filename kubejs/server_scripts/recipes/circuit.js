ServerEvents.recipes(event => {
    //circuits
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            tag: "c:plates/obsidian"
        },
        loops: 2,
        results: [
            {
                chance: 70.0,
                id: "fwnc:mechanical_circuit"
            },
            {
                chance: 16.0,
                id: "create:precision_mechanism"
            },
            {
                chance: 5.0,
                id: "create:brass_sheet"
            },
            {
                chance: 3.0,
                id: "create:electron_tube"
            },
            {
                chance: 3.0,
                id: "create:sturdy_sheet"
            },
            {
                chance: 1.0,
                id: "create:large_cogwheel"
            },
            {
                chance: 1.0,
                id: "create:cogwheel"
            },
            {
                chance: 1.0,
                id: "create:shaft"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_mechanical_circuit"
                    },
                    {
                        tag: "c:plates/brass"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_mechanical_circuit"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_mechanical_circuit"
                    },
                    {
                        item: "create:precision_mechanism"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_mechanical_circuit"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_mechanical_circuit"
                    },
                    {
                        item: "create:electron_tube"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_mechanical_circuit"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_mechanical_circuit"
                    },
                    {
                        item: "createaddition:capacitor"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_mechanical_circuit"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "fwnc:incomplete_mechanical_circuit"
        }
    }).id("fwnc:circuit/mechanical_circuit_assemble")

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: "immersiveengineering:circuit_board"
        },
        loops: 2,
        results: [
            {
                chance: 75.0,
                id: "fwnc:early_electronic_circuit"
            },
            {
                chance: 8.0,
                id: "immersiveengineering:circuit_board"
            },
            {
                chance: 7.0,
                id: "immersiveengineering:component_electronic"
            },
            {
                chance: 4.0,
                id: "immersiveengineering:electron_tube"
            },
            {
                chance: 3.0,
                id: "immersiveengineering:wire_electrum"
            },
            {
                chance: 2.0,
                id: "immersiveengineering:treated_wood_horizontal"
            },
            {
                chance: 1.0,
                id: "minecraft:redstone"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_early_electronic_circuit"
                    },
                    {
                        item: "immersiveengineering:component_electronic"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_early_electronic_circuit"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_early_electronic_circuit"
                    },
                    {
                        item: "immersiveengineering:electron_tube"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_early_electronic_circuit"
                    }
                ]
            },
            {
                type: "create:filling",
                ingredients: [
                    {
                        item: "fwnc:incomplete_early_electronic_circuit"
                    },
                    {
                        type: "fluid_stack",
                        amount: 250,
                        fluid: "immersiveengineering:redstone_acid"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_early_electronic_circuit"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "fwnc:incomplete_early_electronic_circuit"
        }
    }).id("fwnc:circuit/early_electronic_circuit_assemble")

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: "immersiveengineering:alu_scaffolding_standard"
        },
        loops: 2,
        results: [
            {
                chance: 70.0,
                id: "fwnc:early_circuit_complex"
            },
            {
                chance: 8.0,
                id: "immersiveengineering:alu_scaffolding_standard"
            },
            {
                chance: 7.0,
                id: "fwnc:early_electronic_circuit"
            },
            {
                chance: 4.0,
                id: "immersiveengineering:component_electronic_adv"
            },
            {
                chance: 3.0,
                id: "immersiveengineering:wirecoil_redstone"
            },
            {
                chance: 3.0,
                id: "immersiveengineering:wirecoil_electrum_ins"
            },
            {
                chance: 3.0,
                id: "immersiveengineering:plate_aluminum"
            },
            {
                chance: 2.0,
                id: "immersiveengineering:plate_duroplast"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_early_circuit_complex"
                    },
                    {
                        item: "immersiveengineering:component_electronic_adv"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_early_circuit_complex"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_early_circuit_complex"
                    },
                    {
                        tag: "c:plates/plastic"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_early_circuit_complex"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_early_circuit_complex"
                    },
                    {
                        tag: "c:plates/aluminum"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_early_circuit_complex"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_early_circuit_complex"
                    },
                    {
                        item: "immersiveengineering:wirecoil_redstone"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_early_circuit_complex"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "fwnc:incomplete_early_circuit_complex"
                    },
                    {
                        item: "immersiveengineering:wirecoil_electrum_ins"
                    }
                ],
                results: [
                    {
                        id: "fwnc:incomplete_early_circuit_complex"
                    }
                ]
            }
        ],
        transitional_item: {
            id: "fwnc:incomplete_early_circuit_complex"
        }
    }).id("fwnc:circuit/early_circuit_complex_assemble")

    //computer
    event.remove({ id: 'computercraft:computer_normal' })
    event.shaped(Item.of('computercraft:computer_normal',1), [
        'SSS',
        'SCS',
        'SGS'
    ],
    {
        C: '#fwnc:tier_one_circuit',
        S: '#c:plates/steel',
        G: '#c:glass_panes'
    }).id("fwnc:crafting/computer_normal")
    event.remove({ id: 'computercraft:pocket_computer_normal' })
    event.shaped(Item.of('computercraft:pocket_computer_normal',1), [
        ' S ',
        'SCS',
        ' G '
    ],
    {
        C: '#fwnc:tier_one_circuit',
        S: '#c:plates/steel',
        G: '#c:glass_panes'
    }).id("fwnc:crafting/pocket_computer_normal")
    event.remove({ id: 'computercraft:turtle_normal' })
    event.shaped(Item.of('computercraft:turtle_normal',1), [
        'MCM',
        ' B '
    ],
    {
        C: 'computercraft:computer_normal',
        M: 'create:precision_mechanism',
        B: 'create_sa:vault_component'
    }).id("fwnc:crafting/turtle_normal")

    event.remove({ id: 'computercraft:computer_advanced' })
    event.remove({ id: 'computercraft:computer_advanced_upgrade' })
    event.shaped(Item.of('computercraft:computer_advanced',1), [
        'SSS',
        'SCS',
        'SGS'
    ],
    {
        C: '#fwnc:tier_two_circuit',
        S: '#c:plates/aluminum',
        G: '#c:glass_panes'
    }).id("fwnc:crafting/computer_advanced")
    event.remove({ id: 'computercraft:pocket_computer_advanced' })
    event.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' })
    event.shaped(Item.of('computercraft:pocket_computer_advanced',1), [
        ' S ',
        'SCS',
        ' G '
    ],
    {
        C: '#fwnc:tier_two_circuit',
        S: '#c:plates/aluminum',
        G: '#c:glass_panes'
    }).id("fwnc:crafting/pocket_computer_advanced")
    event.remove({ id: 'computercraft:turtle_advanced' })
    event.remove({ id: 'computercraft:turtle_advanced_upgrade' })
    event.shaped(Item.of('computercraft:turtle_advanced',1), [
        'MCM',
        ' B '
    ],
    {
        C: 'computercraft:computer_advanced',
        M: 'create:precision_mechanism',
        B: 'create_sa:vault_component'
    }).id("fwnc:crafting/turtle_advanced")

    event.replaceInput({ id: 'waterframes:remote' }, "#c:dusts/redstone", "#fwnc:tier_zero_circuit")
    event.replaceInput({ id: 'waterframes:remote' }, "minecraft:copper_block", "create:transmitter")
})