onEvent('block.registry', event => {
	event.create('empty_core')
	.material('metal')
	.hardness(0.5)
	.notSolid()
	.displayName('Empty Core')
})