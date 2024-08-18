import {Card}  from "../models/help_card.model.js"

// function to create card
const create_card = async(req,res)=>{
    
try {
        const {title,description} = req.body
        const exist= await Card.findOne({title});
    
        if (exist){
            return res.status(400).json({success:false,message:`${title} already exists`})
        }
        const new_card = await Card.create({title,description})
        await Card.save
        return res.status(200).json({success:true,data:new_card})
} catch (error) {
    const message=error.message
    console.log("error occured: ",message)
    res.status(422).json({success:false,message})
    
}
}

//function to get all the cards
const get_all_cards = async(req,res)=>{
    try {

        const exist= await Card.find();
        if (!exist){
            return res.status(400).json({success:false,message:`No card exists in help center`})
        }
        return res.status(200).json({success:true,data:exist})
} catch (error) {
    const message=error.message
    res.status(400).json({success:false,message})
    
}
}

//function to get detail of a specific card
const card_detail = async(req,res)=>{
    try {
        const title = req.params.title
        const exist= await Card.findOne({title});
    
        if (!exist){
            return res.status(400).json({success:false,message:`${title} doesn't exist`})
        }
        return res.status(200).json({success:true,data:exist})
} catch (error) {
    const message=error.message
    console.log("error occured: ",message)
    res.status(422).json({success:false,message})
    
}   
}


export {create_card,get_all_cards,card_detail}