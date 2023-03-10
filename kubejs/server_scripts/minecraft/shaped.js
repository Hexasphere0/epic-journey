ServerEvents.recipes(event => {
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
            "L": "totemic:cedar_slab",
            "C": "thermal:copper_plate"
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
        "9x kubejs:infused_bricks",
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
        "3x immersiveengineering:cokebrick",
        [
            "GBG",
            "BSB",
            "CBC"
        ],
        {
            'G': "minecraft:gravel", // probably grout once we have tinkers
            "B": "minecraft:bricks",
            "C": "minecraft:clay",
            "S": "kubejs:infused_bricks"
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
        "immersiveengineering:blastbrick_reinforced",
        [
            " I ",
            " B ",
            " I "
        ],
        {
            'I': "thermal:invar_plate",
            "B": "immersiveengineering:blastbrick"
        }
    )

    event.shaped(
        "immersiveengineering:steel_scaffolding_standard",
        [
            "PIP",
            "I I",
            "PIP"
        ],
        {
            'I': "immersiveengineering:plate_steel",
            "P": "immersiveengineering:stick_steel"
        }
    )

    event.shaped(
        "immersiveengineering:alu_scaffolding_standard",
        [
            "PIP",
            "G G",
            "PIP"
        ],
        {
            'I': "immersiveengineering:plate_aluminum",
            "P": "immersiveengineering:stick_aluminum",
            // apparently no gold stick... we will need one
            //"G": "immersiveengineering:stick_gold",
            "G": "minecraft:stick"
        }
    )

    event.shaped(
        "immersiveengineering:light_engineering",
        [
            "PCP",
            "MSM",
            "PCP"
        ],
        {
            "S": "immersiveengineering:steel_scaffolding_standard",
            "P": "immersiveengineering:plate_steel",
            "M": "immersiveengineering:component_iron",
            "C": "thermal:gear_nickel"
        }
    )

    event.shaped(
        "immersiveengineering:heavy_engineering",
        [
            "PCP",
            "MSM",
            "PCP"
        ],
        {
            "S": "immersiveengineering:steel_scaffolding_standard",
            "P": "immersiveengineering:plate_steel",
            "M": "immersiveengineering:component_steel",
            "C": "thermal:gear_invar"
        }
    )

    event.shaped(
        "immersiveengineering:redstone_engineering",
        [
            "PCP",
            "MSM",
            "PCP"
        ],
        {
            "S": "immersiveengineering:steel_scaffolding_standard",
            "P": "immersiveengineering:plate_steel",
            "M": "immersiveengineering:coil_copper",
            "C": "minecraft:redstone_block"
        }
    )

    event.shaped(
        "2x immersiveengineering:coil_lv",
        [
            " C ",
            "RSR",
            " C "
        ],
        {
            "S": "immersiveengineering:stick_treated",
            "C": "immersiveengineering:wire_copper",
            "R": "minecraft:redstone"
        }
    )
})