ServerEvents.recipes(event => {
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
            'G': "minecraft:iron_ingot", // probably grout once we have tinkers
            "A": "totemic:baykok_bow",
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