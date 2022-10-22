import { Router } from "express";
import { adminMessages } from "../app.js";
const router = Router();

router.post("/api/login",(req,res) => {

    if(req.body.username === "admin" && req.body.password === "admin"){
        res.cookie("admin",true,{httpOnly: true});
        res.redirect("/");
    }else {
        res.redirect("/error401");
    }   
})

router.post("/api/sidebar/message", (req,res) => {
        adminMessages[req.body.page].push(req.body.message)
        res.redirect(req.headers.referer)
})

export default router;