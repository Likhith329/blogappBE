const express=require('express')
const router=express.Router()

const Postmodule=require('../Modules/Postmodule')
router.post('/createpost',Postmodule.createpost)
router.get('/getallposts',Postmodule.getallposts)
router.get('/getpost/:postid',Postmodule.getpost)
router.put('/updatepost',Postmodule.updatepost)
router.delete('/deletepost',Postmodule.deletepost)

module.exports=router