import { Router } from "express";
const router = Router();

router.post("/api/login",(req,res) => {

    if(req.body.username=== "admin" && req.body.password === "admin"){
        res.redirect("/");
    }else {
        res.redirect("/error401");
    }   
})

export default router;