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
        "spirit:soul_crystal_shard"
    ]

    for(let i = 0; i < removes.length; i++){
        event.remove({output: removes[i]})
    }

    event.remove({output: "immersiveengineering:component_steel", "type": "minecraft:shaped"})
    event.remove({output: "immersiveengineering:component_iron", "type": "minecraft:shaped"})
})