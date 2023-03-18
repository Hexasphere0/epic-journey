onEvent('recipes', event => {
    event.shaped(
        "minecraft:campfire",
        [
            " C ",
            "SFS",
            "BBB"
        ],
        {
            "S": "minecraft:stick",
            "F": "minecraft:flint",
            "C": "minecraft:coal",
            "B": "#minecraft:logs"
        }
    )
    
    event.shaped(
        "minecraft:furnace",
        [
            "BBB",
            "BFB",
            "SSS"
        ],
        {
            "B": "minecraft:bricks",
            "F": "minecraft:flint",
            "S": "minecraft:cobblestone"
        }
    )

    event.shaped(
        "minecraft:blast_furnace",
        [
            "SSS",
            "SFS",
            "BBB"
        ],
        {
            "S": "minecraft:smooth_stone",
            "F": "minecraft:furnace",
            "B": "minecraft:stone"
        }
    )

    
    event.shaped(
        "minecraft:stonecutter",
        [
            " C ",
            "LCL",
            "SSS"
        ],
        {
            "S": "minecraft:smooth_stone",
            "L": "#minecraft:wooden_slabs",
            "C": "thermal:copper_plate"
        }
    )

    event.shaped(
        "minecraft:stonecutter",
        [
            " C ",
            "LCL",
            "SSS"
        ],
        {
            "S": "minecraft:smooth_stone",
            "L": "#minecraft:wooden_slabs",
            "C": "thermal:copper_plate"
        }
    )


    event.campfireCooking("minecraft:brick", "minecraft:clay_ball")
})