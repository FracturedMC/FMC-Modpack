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

    event.shaped('astralsorcery:wand', [
        ' AS',
        ' MA',
        'M  '
      ], {
        S: 'ars_nouveau:mana_gem',
        M: '#forge:marble',
        A: 'astralsorcery:aquamarine'
      })

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
  })