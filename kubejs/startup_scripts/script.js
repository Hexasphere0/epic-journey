// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	event.create("rainbow_petal").displayName("Rainbow Petal");
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	event.create("infused_bricks").displayName("Infused Bricks").hardness(2.0)
})