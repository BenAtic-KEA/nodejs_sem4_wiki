import express from "express";
import { renderPage } from "./util/templateEngine.js";

const app = express();
app.use(express.json());
app.use(express.static("public"))

// app.use(<routername>) for routers

const frontpagePage = renderPage("/frontpage/frontpage.html", {tabTitle : "NodeJs helper", cssLink : ""});

app.get("/",(req,res) => {
    res.send(frontpagePage)
})



const PORT = process.env.PORT || 8080;

app.listen(PORT, (error)=> {
    if(error){
        console.log(error)
    }
    console.log(`server is running on port`, PORT)
}
)