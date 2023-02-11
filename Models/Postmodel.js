const mongoose=require('mongoose')

const postmodel=mongoose.Schema({
    postpic:{
        type:String,
        default:'https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGxpbmVkJTIwcm9hZHxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

const Post=mongoose.model("Post",postmodel)

module.exports=Post