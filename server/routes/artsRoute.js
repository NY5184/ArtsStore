//bs"d
const express=require("express")
const router=express.Router()
const artController=require("../controllers/artController")
const isManager=require("../middleware/isManager")
const verifyJWT=require("../middleware/verifyJWT")
const createNewOrder=require("../controllers/orderController")


router.get("/",verifyJWT,artController.getAllArts)
router.get("/:id",verifyJWT,artController.getArtByID)
router.post("/",artController.createNewArt)
router.put("/",isManager,artController.updateArt)
router.delete("/:id",isManager,artController.deleteArt)
router.put("/updateRate",verifyJWT,artController.updateRating)

module.exports=router


