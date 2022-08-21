const express=require('express')
const router=express.Router()


const controll=require("../controller/sleepController")
const controlls=require("../controller/userController")
router.post("/bed",controll.sleepBed)
router.post("/wake",controll.wakeBed)
router.post("/struggle",controll.sleepStruggleFrom)
router.get("/duration/:sleepid/:wakeid",controll.sleepDuration)
router.post("/create",controlls.createdata)

module.exports=router