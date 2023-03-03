ServerEvents.recipes(event => {
    let removes = [
        "immersiveengineering:hammer",
        "immersiveengineering:cokebrick",
        "immersiveengineering:blastbrick"
    ]

    for(let i = 0; i < removes.length; i++){
        event.remove({output: removes[i]})
    }
})