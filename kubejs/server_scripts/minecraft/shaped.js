ServerEvents.recipes(event => {
    event.shaped(
        "minecraft:campfire",
        [
            " L ",
            "SFS",
            "BBB"
        ],
        {
            "S": "minecraft:stick",
            "L": "minecraft:leaves",
            "F": "minecraft:flint",
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
            " B ",
            "LCL",
            "SSS"
        ],
        {
            "S": "minecraft:smooth_stone",
            "L": "totemic:cedar_slabs",
            "C": "thermal:copper_plate",
            "B": "kubejs:bronze_blade"
        }
    )

    event.shaped(
        "immersiveengineering:hammer",
        [
            " IS",
            " DI",
            "L  "
        ],
        {
            'S': "minecraft:string",
            "D": "minecraft:diamond",
            "I": "minecraft:iron_ingot",
            "L": "minecraft:stick"
        }
    )

    event.shaped(
        "8x kubejs:infused_bricks",
        [
            " B ",
            "BAB",
            " B " // something in the corners
        ],
        {
            "B": "minecraft:brick",
            "A": "totemic:baykok_bow"
        }
    )

    event.shaped(
        "immersiveengineering:cokebrick",
        [
            "GBG",
            "BSB",
            "CBC"
        ],
        {
            'G': "minecraft:gravel", // probably grout once we have tinkers
            "B": "minecraft:bricks",
            "C": "minecraft:clay",
            "S": "minecraft:sandstone"
        }
    )

    event.shaped(
        "3x immersiveengineering:blastbrick",
        [
            "GBG",
            "BAB",
            "GRG"
        ],
        {
            'G': "minecraft:iron_ingot",
            "A": "kubejs:infused_bricks",
            "B": "minecraft:bricks",
            "R": "minecraft:redstone"
        }
    )

    event.shaped(
        "immersiveengineering:reinforced_blastbrick",
        [
            " I ",
            "GBG",
            " I "
        ],
        {
            'G': "thermal:gold_plate",
            'I': "thermal:invar_plate",
            "B": "immersiveengineering:blastbrick"
        }
    )
})