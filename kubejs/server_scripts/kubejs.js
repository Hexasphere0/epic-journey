onEvent('recipes', (event) => {
    event.custom({
        type: "extendedmushrooms:fairy_ring_recipe",
        ingredients: [
            {
                item: "minecraft:red_mushroom"
            },
            {
                item: "extendedmushrooms:honey_fungus"
            },
            {
                item: "extendedmushrooms:slime_fungus"
            },
            {
                item: "extendedmushrooms:poisonous_mushroom"
            }
        ],
        result: {
            item: "kubejs:mycelial_compound",
        },
        recipeTime: 60
    })

    event.shaped(
        "4x kubejs:mycelial_bricks",
        [
            "CBD",
            "BAB",
            "DBC"
        ],
        {
            "C": "tconstruct:amethyst_bronze_ingot",
            "B": "minecraft:bricks",
            "A": "kubejs:mycelial_compound",
            "D": "tconstruct:blood_slime_ball"
        }
    )
})