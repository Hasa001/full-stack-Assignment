import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,

    }
})

export const Card = mongoose.model("Card",cardSchema)