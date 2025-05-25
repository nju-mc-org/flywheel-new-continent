ServerEvents.recipes(event => {
    //circuits
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {
            item: "create_connected:control_chip"
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
                chance: 2.0,
                id: "create:large_cogwheel"
            },
            {
                chance: 2.0,
                id: "create:cogwheel"
            },
            {
                chance: 2.0,
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
                chance: 80.0,
                id: "fwnc:early_electronic_circuit"
            },
            {
                chance: 6.0,
                id: "immersiveengineering:circuit_board"
            },
            {
                chance: 6.0,
                id: "immersiveengineering:component_electronic"
            },
            {
                chance: 3.0,
                id: "immersiveengineering:electron_tube"
            },
            {
                chance: 2.0,
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
                chance: 75.0,
                id: "fwnc:early_circuit_complex"
            },
            {
                chance: 6.0,
                id: "immersiveengineering:alu_scaffolding_standard"
            },
            {
                chance: 6.0,
                id: "fwnc:early_electronic_circuit"
            },
            {
                chance: 3.0,
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
                chance: 2.0,
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
                        item: "fwnc:early_electronic_circuit"
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
    /*
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
    */
    event.remove({ id: 'computercraft:pocket_computer_advanced' })
    event.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' })
    /*
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
    */
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

    event.remove({ id: 'computercraft:monitor_normal' })
    event.shaped(Item.of('computercraft:monitor_normal',1), [
        'SSS',
        'SCS',
        'GGG'
    ],
    {
        C: '#fwnc:tier_zero_circuit',
        S: '#c:plates/steel',
        G: '#c:glass_panes'
    }).id("fwnc:crafting/monitor_normal")
    event.remove({ id: 'computercraft:monitor_advanced' })
    event.shaped(Item.of('computercraft:monitor_advanced',1), [
        'SSS',
        'SCS',
        'GGG'
    ],
    {
        C: '#fwnc:tier_one_circuit',
        S: '#c:plates/aluminum',
        G: '#c:glass_panes'
    }).id("fwnc:crafting/monitor_advanced")
    event.remove({ id: 'computercraft:wired_modem' })
    event.shaped(Item.of('computercraft:wired_modem',1), [
        'SCS',
        'SCS',
        'SCS'
    ],
    {
        C: '#fwnc:tier_zero_circuit',
        S: '#c:plates/steel',
        R: 'computercraft:cable'
    }).id("fwnc:crafting/wired_modem")
    event.remove({ id: 'computercraft:wireless_modem_normal' })
    event.shaped(Item.of('computercraft:wireless_modem_normal',1), [
        'SES',
        'SCS',
        'SES'
    ],
    {
        C: '#fwnc:tier_zero_circuit',
        S: '#c:plates/steel',
        E: 'minecraft:ender_pearl'
    }).id("fwnc:crafting/wireless_modem_normal")
    event.remove({ id: 'computercraft:wireless_modem_advanced' })
    event.shaped(Item.of('computercraft:wireless_modem_advanced',1), [
        'SES',
        'SCS',
        'SES'
    ],
    {
        C: '#fwnc:tier_one_circuit',
        S: '#c:plates/aluminum',
        E: 'minecraft:ender_eye'
    }).id("fwnc:crafting/wireless_modem_advanced")
    event.replaceInput({ id: 'computercraft:cable' }, "minecraft:stone", "#c:plates/plastic")
    event.remove({ id: 'computercraft:disk_drive' })
    event.shaped(Item.of('computercraft:disk_drive',1), [
        'SPS',
        'SCS',
        'SDS'
    ],
    {
        C: '#fwnc:tier_zero_circuit',
        S: '#c:plates/steel',
        D: 'create:content_observer',
        P: 'create:precision_mechanism'
    }).id("fwnc:crafting/disk_drive")
    event.remove({ id: 'computercraft:printer' })
    event.shaped(Item.of('computercraft:printer',1), [
        'SPS',
        'SCS',
        'SDS'
    ],
    {
        C: '#fwnc:tier_zero_circuit',
        S: '#c:plates/steel',
        D: '#c:dyes/black',
        P: 'create:precision_mechanism'
    }).id("fwnc:crafting/printer")
    event.remove({ id: 'computercraft:speaker' })
    event.shaped(Item.of('computercraft:speaker',1), [
        'SSS',
        'SCS',
        'SDS'
    ],
    {
        C: '#fwnc:tier_zero_circuit',
        S: '#c:plates/steel',
        D: 'minecraft:note_block'
    }).id("fwnc:crafting/speaker")

    //waterframes
    event.replaceInput({ id: 'waterframes:remote' }, "#c:dusts/redstone", "#fwnc:tier_zero_circuit")
    event.replaceInput({ id: 'waterframes:remote' }, "minecraft:copper_block", "create:transmitter")

    //furniture
    event.replaceInput({ id: 'refurbished_furniture:television_remote' }, "minecraft:redstone", "create:transmitter")
    event.remove({ id: 'refurbished_furniture:constructing/television' })
    event.custom({
        "type": "refurbished_furniture:workbench_constructing",
        "materials": [
            {
                "count": 8,
                "ingredient": {
                    "item": "immersiveengineering:ingot_aluminum"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "create:brass_ingot"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:glass"
                }
            },
            {
                "count": 8,
                "ingredient": {
                    "item": "minecraft:redstone"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:amethyst_shard"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "tag": "fwnc:tier_zero_circuit"
                }
            }
        ],
        "result": {
            "count": 1,
            "id": "refurbished_furniture:television"
        }
    }).id("fwnc:furniture/television")
    event.remove({ id: 'refurbished_furniture:constructing/computer' })
    event.custom({
        "type": "refurbished_furniture:workbench_constructing",
        "materials": [
            {
                "count": 12,
                "ingredient": {
                    "item": "immersiveengineering:ingot_aluminum"
                }
            },
            {
                "count": 3,
                "ingredient": {
                    "item": "create:brass_ingot"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "item": "minecraft:glass"
                }
            },
            {
                "count": 12,
                "ingredient": {
                    "item": "minecraft:redstone"
                }
            },
            {
                "count": 2,
                "ingredient": {
                    "item": "minecraft:amethyst_shard"
                }
            },
            {
                "count": 1,
                "ingredient": {
                    "tag": "fwnc:tier_one_circuit"
                }
            }
        ],
        "result": {
            "count": 1,
            "id": "refurbished_furniture:computer"
        }
    }).id("fwnc:furniture/computer")
    event.remove({ id: 'refurbished_furniture:constructing/circuit_manager' })
    event.shaped(Item.of('cfm_circuit_breaker:circuit_breaker',1), [
        'RPP',
        'ICP',
        'RPP'
    ],
    {
        R: '#c:storage_blocks/redstone',
        C: 'create_connected:control_chip',
        P: '#c:plates/aluminum',
        I: '#c:ingots/copper'
    }).id("fwnc:crafting/circuit_breaker_a")
    event.shaped(Item.of('cfm_circuit_breaker:circuit_breaker',1), [
        'RPP',
        'ICP',
        'RPP'
    ],
    {
        R: '#c:storage_blocks/redstone',
        C: 'immersiveengineering:component_electronic',
        P: '#c:plates/aluminum',
        I: '#c:ingots/copper'
    }).id("fwnc:crafting/circuit_breaker_b")

    //railwaynav
    event.remove({ id: 'createrailwaysnavigator:advanced_display' })
    event.shaped(Item.of('createrailwaysnavigator:advanced_display',6), [
        'AOA',
        'BCB',
        'AOA'
    ],
    {
        A: 'create:andesite_alloy',
        C: '#fwnc:tier_zero_circuit',
        O: '#c:plates/obsidian',
        B: 'create:display_board'
    }).id("fwnc:crafting/advanced_display")
    event.remove({ id: 'createrailwaysnavigator:navigator' })
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "T": {
                "item": "create:transmitter"
            },
            "I": {
                "tag": "c:plates/iron"
            },
            "G": {
                "tag": "c:glass_panes/colorless"
            },
            "P": {
                "tag": "fwnc:tier_zero_circuit"
            },
            "C": {
                "tag": "c:plates/copper"
            }
        },
        "pattern": [
            "AIA",
            "IGI",
            "IPI",
            "ACA"
        ],
        "result": {
            "id": "createrailwaysnavigator:navigator",
            "count": 1
        }
    }).id("fwnc:mechanical_crafter/navigator")
})