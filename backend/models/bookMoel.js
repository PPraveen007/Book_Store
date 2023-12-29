import mongoose from "mongoose";

const bookSchema =mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"Please provide a Title for the Book"]
        },
        author:{
            type:String,
            required: [true,"Please provide an Author for the Book"],
        },
        publishYear:{
            type:String,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);


export const Book = mongoose.model('Cat', bookSchema)