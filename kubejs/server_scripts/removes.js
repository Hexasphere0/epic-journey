onEvent("recipes", event => {
    let removes = [
        "immersiveengineering:hammer",
        "immersiveengineering:cokebrick",
        "immersiveengineering:blastbrick",
        "immersiveengineering:reinforced_blastbrick",
        "immersiveengineering:light_engineering",
        "immersiveengineering:heavy_engineering",
        "immersiveengineering:rs_engineering",
        "immersiveengineering:wirecoil_copper",
        "immersiveengineering:treated_wood_planks",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:stonecutter",
        "tconstruct:grout",
        "tconstruct:seared_melter",
        "tconstruct:seared_heater",
        "tconstruct:seared_faucet",
        "tconstruct:seared_channel",
        "tconstruct:seared_basin",
        "tconstruct:seared_basin",
        "tconstruct:seared_table",
        "tconstruct:crafting_station",
        "tconstruct:pattern",
        "spirit:soul_crystal_shard"
    ]

    for(let i = 0; i < removes.length; i++){
        event.remove({output: removes[i]})
    }

    event.remove({output: "immersiveengineering:component_steel", type: "minecraft:shaped"})
    event.remove({output: "immersiveengineering:component_iron", type: "minecraft:shaped"})

    let removeShapedOnly = [
        "minecraft:campfire",
        "immersiveengineering:component_steel",
        "immersiveengineering:component_iron"
    ]

    for (let i = 0; i < removeShapedOnly.length; i++){
        event.remove({output: removeShapedOnly[i], type: "minecraft:shaped"})
    }

    event.remove({output: "tconstruct:seared_brick", type: "minecraft:smelting"})
})