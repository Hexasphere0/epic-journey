onEvent("recipes", event => {
    // final chapter 1 item

    event.custom({
        type: "extendedmushrooms:fairy_ring_recipe",
        ingredients: [
            {
                item: "tconstruct:amethyst_bronze_ingot"
            },
            {
                item: "extendedmushrooms:honey_fungus"
            },
            {
                item: "minecraft:bricks"
            },
            {
                item: "extendedmushrooms:slime_fungus"
            },
            {
                item: "extendedmushrooms:poisonous_mushroom"
            }
        ],
        result: {
            item: "kubejs:mycelial_bricks",
        },
        recipeTime: 60
    })

    event.custom({
        type: "extendedmushrooms:fairy_ring_recipe",
        ingredients: [
            {
                item: "minecraft:honey_bottle"
            },
            {
                item: "minecraft:honeycomb"
            },
            {
                item: "minecraft:red_mushroom"
            },
            {
                item: "thermal:bronze_nugget"
            }
        ],
        result: {
            item: "extendedmushrooms:honey_fungus"
        },
        recipeTime: 20
    })

    event.custom({
        type: "extendedmushrooms:fairy_ring_recipe",
        ingredients: [
            {
                item: "minecraft:slime_ball"
            },
            {
                item: "minecraft:lime_dye"
            },
            {
                item: "minecraft:rabbit_foot"
            },
            {
                item: "tconstruct:earth_slime_crystal"
            },
            {
                item: "minecraft:brown_mushroom"
            }
        ],
        result: {
            item: "extendedmushrooms:slime_fungus"
        },
        recipeTime: 20
    })

    event.custom({
        type: "extendedmushrooms:fairy_ring_recipe",
        ingredients: [
            {
                item: "minecraft:fermented_spider_eye"
            },
            {
                item: "minecraft:poisonous_potato"
            },
            {
                item: "minecraft:pink_dye"
            },
            {
                item: "minecraft:brown_mushroom"
            }
        ],
        result: {
            item: "extendedmushrooms:poisonous_mushroom"
        },
        recipeTime: 20
    })
})