onEvent("recipes", event => {
    // early game
    event.shaped(
        "4x tconstruct:grout",
        [
            "CAC",
            "ABA",
            "CAC"
        ],
        {
            "A": "minecraft:gravel",
            "B": "minecraft:clay",
            "C": "minecraft:sand"
        }
    )

    event.shaped(
        "tconstruct:seared_melter",
        [
            "GGG",
            "SFS",
            "SBS"
        ],
        {
            "B": "tconstruct:seared_bricks",
            "S": "minecraft:copper_ingot",
            "F": "tconstruct:seared_ingot_gauge",
            "G": "minecraft:glass"
        }
    )

    event.shaped(
        "tconstruct:seared_heater",
        [
            "BTB",
            "SFS"
        ],
        {
            "B": "tconstruct:seared_bricks",
            "S": "minecraft:smooth_stone",
            "F": "minecraft:blast_furnace",
            "T": "tconstruct:seared_fuel_gauge"
        }
    )

    event.shaped(
        "2x tconstruct:seared_faucet",
        [
            "A A",
            "BAB"
        ],
        {
            "A": "tconstruct:seared_brick",
            "B": "minecraft:brick"
        }
    )
    event.shaped(
        "2x tconstruct:seared_channel",
        [
            "B B",
            "ABA"
        ],
        {
            "A": "tconstruct:seared_brick",
            "B": "minecraft:smooth_stone"
        }
    )

    event.shaped(
        "tconstruct:seared_basin",
        [
            "B B",
            "B B",
            "ACA"
        ],
        {
            "B": "tconstruct:seared_brick",
            "A": "minecraft:smooth_stone",
            "C": "minecraft:cauldron"
        }
    )

    event.shaped(
        "tconstruct:seared_table",
        [
            "BAB",
            "B B",
            "B B"
        ],
        {
            "B": "tconstruct:seared_brick",
            "A": "tconstruct:crafting_station"
        }
    )

    event.shaped(
        "tconstruct:crafting_station",
        [
            "PPP",
            "SCS",
            "S S"
        ],
        {
            "P": "tconstruct:pattern",
            "S": "minecraft:stick",
            "C": "minecraft:crafting_table"
        }
    )

    event.shaped(
        "tconstruct:pattern",
        [
            "NS ",
            "SN ",
            "   "
        ],
        {
            "N": "thermal:copper_nugget",
            "S": "minecraft:paper"
        }
    )

    // foundry+ (gated behind nether)
    // come back to this later

    event.blasting("minecraft:nether_brick", "tconstruct:nether_grout")
    event.recipes.tconstruct.casting_table("tconstruct:seared_brick", "tconstruct:molten_constantan", 20).cast("minecraft:nether_brick").consumeCast()

    event.shaped(
        "2x tconstruct:scorched_glass",
        [
            " B ",
            "BGB",
            " B "
        ],
        {
            "G": "ae2:quartz_glass",
            "B": "tconstruct:sorched_brick"
        }
    )

    // event.shaped(
    //     "tconstruct:scorched_fuel_tank",
    //     [
    //         "B"
    //     ]
    // )
})