onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
    event.get('forge:marble').add('quark:marble')
    event.get('forge:marble').add('astralsorcery:marble_raw')
})


onEvent('recipes', event => {
    event.remove({id: 'astralsorcery:shaped/wand'})
    event.remove({id: 'astralsorcery:altar/wand'})
    event.remove({id: 'astralsorcery:altar/linking_tool'})
    event.remove({output: 'ars_nouveau:arcane_core'})
    event.remove({id: 'ars_nouveau:enchanting_apparatus'})
    event.remove({id: 'ars_nouveau:arcane_pedestal'})
    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.remove({output: 'ars_nouveau:whelp_charm'})


    //resonating wand
    event.shaped('astralsorcery:wand', [
        ' AS',
        ' MA',
        'M  '
      ], {
        S: 'ars_nouveau:mana_gem',
        M: '#forge:marble',
        A: 'astralsorcery:aquamarine'
      })

    //marble to infused marble
    event.custom({
      'type': 'astralsorcery:block_transmutation',
      'input': [
        {
          'block': 'quark:marble',
          'display': {
            'item': 'quark:marble',
            'count': 1
          }
        }
      ],
      'output': {
        'block': 'astralsorcery:marble_raw'
      },
      'display': {
        'item': 'astralsorcery:marble_raw',
        'count': 1
      },
      'starlight': 60
    })

    //linking tool recipe
    event.custom({

      "type": "astralsorcery:altar",
      "altar_type": 0,
      "duration": 100,
      "starlight": 200,
      "pattern": [
        "_____",
        "__BC_",
        "_ACB_",
        "_BA__",
        "_____"
      ],
      "key": {
        "A": {
          "item": "astralsorcery:infused_wood"
        },
        "B": {
          "tag": "forge:rods/wooden"
        },
        "C": {
          "item": "astralsorcery:aquamarine"
        }
      },
      "output": [
        {
          "item": "astralsorcery:linking_tool",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam"
      ]

    })

    //empty core
    event.custom({

      "type": "astralsorcery:altar",
      "altar_type": 1,
      "duration": 200,
      "starlight": 1500,
      "pattern": [
        "C___C",
        "_BDB_",
        "_BAB_",
        "_BDB_",
        "C___C"
      ],
      "key": {
        "A": {
          "item": "astralsorcery:rock_crystal"
        },
        "B": {
          "tag": "forge:ingots/gold"
        },
        "C": {
          "item": "minecraft:gold_block"
        },
        "D": {
          "item": "ars_nouveau:arcane_stone"
        }
      },
      "output": [
        {
          "item": "kubejs:empty_core",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]

    })

    //enchanting apparatus
    event.custom({

      "type": "astralsorcery:altar",
      "altar_type": 1,
      "duration": 200,
      "starlight": 1500,
      "pattern": [
        "B___B",
        "_BCB_",
        "_BAB_",
        "_BCB_",
        "B___B"
      ],
      "key": {
        "A": {
          "tag": "forge:gems/diamond"
        },
        "B": {
          "tag": "forge:ingots/gold"
        },
        "C": {
          "item": "ars_nouveau:arcane_stone"
        }
      },
      "output": [
        {
          "item": "ars_nouveau:enchanting_apparatus",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]

    })

    //arcane pedestal
    event.custom({

      "type": "astralsorcery:altar",
      "altar_type": 1,
      "duration": 200,
      "starlight": 1500,
      "pattern": [
        "B___B",
        "_CAC_",
        "_BCB_",
        "_BCB_",
        "B___B"
      ],
      "key": {
        "A": {
          "tag": "forge:gems/diamond"
        },
        "B": {
          "tag": "forge:ingots/gold"
        },
        "C": {
          "item": "ars_nouveau:arcane_stone"
        }
      },
      "output": [
        {
          "item": "ars_nouveau:arcane_pedestal",
          "count": 1
        }
      ],
      "effects": [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]

    })

    //empty core to arcane core
    event.custom({
      'type': 'astralsorcery:block_transmutation',
      'input': [
        {
          'block': 'kubejs:empty_core',
          'display': {
            'item': 'kubejs:empty_core',
            'count': 1
          }
        }
      ],
      'output': {
        'block': 'ars_nouveau:arcane_core'
      },
      'display': {
        'item': 'ars_nouveau:arcane_core',
        'count': 1
      },
      'starlight': 1600
    })

    //Book Wyrm Charm
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "item_1": [
        {
          "item": "ars_nouveau:blank_parchment"
        }
      ],
      "item_2": [
        {
          "tag": "forge:ingots/gold"
        }
      ],
      "item_3": [
        {
          "item": "ars_nouveau:blank_parchment"
        }
      ],
      "item_4": [
        {
          "tag": "forge:ingots/gold"
        }
      ],
      "item_5": [
        {
          "tag": "forge:ingots/gold"
        }
      ],
      "item_6": [
        {
          "item": "ars_nouveau:blank_parchment"
        }
      ],
      "item_7": [
        {
          "item": 'minecraft:lectern'
        }
      ],
      "item_8": [
        {
          "item": "ars_nouveau:blank_parchment"
        }
      ],
      "reagent": [
        {
          "item": "minecraft:book"
        }
      ],
      "output": {
        "item": 'ars_nouveau:whelp_charm'
      }
    })

    //Novice Spell Book
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "item_1": [
        {
          "tag": "forge:ingots/gold"
        }
      ],
      "item_2": [
        {
          "item": "ars_nouveau:carbuncle_shards"
        }
      ],
      "item_3": [
        {
          "item": "ars_nouveau:blank_parchment"
        }
      ],
      "item_4": [
        {
          "tag": "forge:ingots/gold"
        }
      ],
      "item_5": [
        {
          "tag": "forge:nuggets/gold"
        }
      ],
      "item_6": [
        {
          "tag": "forge:ingots/gold"
        }
      ],
      "item_7": [
        {
          "item": "ars_nouveau:whelp_charm"
        }
      ],
      "item_8": [
        {
          "item": "ars_nouveau:blank_parchment"
        }
      ],
      "reagent": [
        {
          "item": "ars_nouveau:worn_notebook"
        }
      ],
      "output": {
        "item": "ars_nouveau:novice_spell_book"
      }
    })
  })