ServerEvents.recipes(event => {
    let tier_uncommon = ['gold', 'brass', 'wrought_iron']
    let tier_rare = ['steel']
    let tier_epic = ['mithril', 'netherite']
    let tier_legendary = ['echo']

    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_uncommon_ink' })
    tier_uncommon.forEach(value => {
        event.custom({
            type: "irons_spellbooks:alchemist_cauldron_brew",
            base_fluid: {
                amount: 1000,
                id: "irons_spellbooks:common_ink"
            },
            input: {
                tag: `c:ingots/${value}`
            },
            results: [
                {
                    amount: 250,
                    id: "irons_spellbooks:uncommon_ink"
                }
            ]
        }).id(`fwnc:magic/brew_uncommon_ink_by_${value}`)
    })
    event.custom({
        type: "irons_spellbooks:alchemist_cauldron_brew",
        base_fluid: {
            amount: 1000,
            id: "irons_spellbooks:common_ink"
        },
        input: {
            tag: "c:gems/amethyst"
        },
        results: [
            {
                amount: 250,
                id: "irons_spellbooks:uncommon_ink"
            }
        ]
    }).id("fwnc:magic/brew_uncommon_ink_by_rose_quartz")

    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_rare_ink' })
    tier_rare.forEach(value => {
        event.custom({
            type: "irons_spellbooks:alchemist_cauldron_brew",
            base_fluid: {
                amount: 1000,
                id: "irons_spellbooks:uncommon_ink"
            },
            input: {
                tag: `c:ingots/${value}`
            },
            results: [
                {
                    amount: 250,
                    id: "irons_spellbooks:rare_ink"
                }
            ]
        }).id(`fwnc:magic/brew_rare_ink_by_${value}`)
    })
    event.custom({
        type: "irons_spellbooks:alchemist_cauldron_brew",
        base_fluid: {
            amount: 1000,
            id: "irons_spellbooks:uncommon_ink"
        },
        input: {
            tag: "c:gems/diamond"
        },
        results: [
            {
                amount: 250,
                id: "irons_spellbooks:rare_ink"
            }
        ]
    }).id("fwnc:magic/brew_rare_ink_by_diamond")
    event.custom({
        type: "irons_spellbooks:alchemist_cauldron_brew",
        base_fluid: {
            amount: 1000,
            id: "irons_spellbooks:uncommon_ink"
        },
        input: {
            item: "create:polished_rose_quartz"
        },
        results: [
            {
                amount: 250,
                id: "irons_spellbooks:rare_ink"
            }
        ]
    }).id("fwnc:magic/brew_rare_ink_by_rose_quartz")

    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_epic_ink' })
    tier_epic.forEach(value => {
        event.custom({
            type: "irons_spellbooks:alchemist_cauldron_brew",
            base_fluid: {
                amount: 1000,
                id: "irons_spellbooks:rare_ink"
            },
            input: {
                tag: `c:ingots/${value}`
            },
            results: [
                {
                    amount: 250,
                    id: "irons_spellbooks:epic_ink"
                }
            ]
        }).id(`fwnc:magic/brew_epic_ink_by_${value}`)
    })

    event.remove({ id: 'irons_spellbooks:alchemist_cauldron/brew_legendary_ink' })
    tier_legendary.forEach(value => {
        event.custom({
            type: "irons_spellbooks:alchemist_cauldron_brew",
            base_fluid: {
                amount: 1000,
                id: "irons_spellbooks:epic_ink"
            },
            input: {
                tag: `c:ingots/${value}`
            },
            results: [
                {
                    amount: 250,
                    id: "irons_spellbooks:legendary_ink"
                }
            ]
        }).id(`fwnc:magic/brew_legendary_ink_by_${value}`)
    })
})