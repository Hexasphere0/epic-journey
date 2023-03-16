onEvent("recipes", event => {
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
            "CBC",
            "BAB",
            "CBC"
        ],
        {
            "C": "tconstruct:blood_slime_ball",
            "B": "minecraft:brick",
            "A": "minecraft:dirt" //tbd
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
        "2x immersiveengineering:light_engineering",
        [
            "PCP",
            "MSM",
            "PCP"
        ],
        {
            "S": "immersiveengineering:steel_scaffolding_standard",
            "P": "immersiveengineering:sheetmetal_iron",
            "M": "immersiveengineering:component_iron",
            "C": "thermal:nickel_gear"
        }
    )

    event.shaped(
        "2x immersiveengineering:heavy_engineering",
        [
            "PCP",
            "MSM",
            "PCP"
        ],
        {
            "S": "immersiveengineering:steel_scaffolding_standard",
            "P": "immersiveengineering:sheetmetal_steel",
            "M": "immersiveengineering:component_steel",
            "C": "thermal:invar_gear"
        }
    )

    event.shaped(
        "2x immersiveengineering:rs_engineering",
        [
            "PCP",
            "MSM",
            "PCP"
        ],
        {
            "S": "immersiveengineering:steel_scaffolding_standard",
            "P": "immersiveengineering:sheetmetal_iron",
            "M": "immersiveengineering:wirecoil_copper",
            "C": "minecraft:redstone_block"
        }
    )

    event.shaped(
        "2x immersiveengineering:wirecoil_copper",
        [
            " C ",
            "RSR",
            " C "
        ],
        {
            "S": "immersiveengineering:wirecoil_structure_rope",
            "C": "immersiveengineering:wire_copper",
            "R": "minecraft:redstone"
        }
    )

    event.shaped(
        "2x immersiveengineering:treated_wood_horizontal",
        [
            "NNN",
            "NCN",
            "NNN"
        ],
        {
            "N": "tconstruct:nahuatl",
            "C": "#forge:creosote_oil",
        }
    )
})