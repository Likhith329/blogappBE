const postmodel=require('../Models/Postmodel')

module.exports.createpost=async(req,res)=>{
    try {
        let resp=await postmodel.create({...req.body,author:req.body.user._id})
        resp=await resp.populate("author")
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}

module.exports.getallposts=async(req,res)=>{
    try {
        const resp=await postmodel.find()
        .populate("author","name email profilepic")
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}

module.exports.getpost=async(req,res)=>{
    try {
        const {postid}=req.params
        const resp=await postmodel.findOne({_id:postid})
        .populate("author","name email profilepic")
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}

module.exports.updatepost=async(req,res)=>{
    try {
        const resp=await postmodel.updateOne({_id:req.body.postid},{$set:{
            title:req.body.title,
            postpic:req.body.postpic,
            description:req.body.description,
            content:req.body.content,
        }})
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}
module.exports.deletepost=async(req,res)=>{
    try {
        const resp=await postmodel.deleteOne({_id:req.body.postid})
        res.send(resp)
    } catch (error) {
        console.log(error)
    }
}