import express from "express";
import  {renderPage, readPage}  from "./util/templateEngine.js";
import loginRouter from "./routers/adminRouter.js"
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"))
app.use(loginRouter);

// app.use(<routername>) for routers

//Frontpage
const frontpagePage = renderPage("/frontpage/frontpage.html", {tabTitle : "NodeJs helper", cssLink : "pages/frontpage/frontpage.css"});

//Login
const loginPage = renderPage("/loginpage/login.html", {tabTitle: "Login / Signup", cssLink: "pages/loginPage/login.css"});
const loginFailPage = renderPage("/errorpages/loginFail.html", {tabTitle:"Login Error", cssLink: ""});
// NPM tabs:
const projectSetupPage = renderPage("/setup_pages/projectSetup/projectSetup.html", {tabTitle: "Project setup", cssLink:"pages/setup_pages/projectSetup/projectSetup.css"});
const terminalCommandsPage = renderPage("/setup_pages/terminalCommands/terminalCommands.html", {tabTitle: "Terminal Commands", cssLink:""});
const toolsPage = renderPage("/setup_pages/tools/tools.html", {tabTitle: "NPM tools", cssLink:""});

// Javascript tabs:
const fetchAndRedirectPage = renderPage("/javascriptTopics/FetchAndRedirect/fetchAndRedirect.html",{tabTitle: "Fetch & Redirect", cssLink: ""});
const variablesAndFunctionsPage = renderPage("/javascriptTopics/variablesAndFunctions/variablesAndFunctions.html", {tabTitle: "Variables & Fuctiosn", cssLink:""});
const restAPIPage = renderPage("/javascriptTopics/RestAPI/restAPI.html", {tabTitle: "REST API", cssLink:""});
const SSRandCSRPage = renderPage("/javascriptTopics/SSRAndCSR/SSRAndCSR.html", {tabTitle: "Server & Client side Rendering", cssLink:""});

app.get("/",(req,res) => {
    res.send(frontpagePage);
});

app.get("/login", (req,res) =>{
    res.send(loginPage);
});

app.get("/fetchAndRedirect", (req,res) =>{
    res.send(fetchAndRedirectPage);
});

app.get("/variablesAndFunctions", (req,res) => {
    res.send(variablesAndFunctionsPage);
});

app.get("/RestAPI", (req,res) => {
    res.send(restAPIPage);
});

app.get("/SSR-CSR", (req,res) => {
    res.send(SSRandCSRPage);
});

app.get("/projectSetup", (req,res) => {
    res.send(projectSetupPage);
});

app.get("/terminal-commands", (req,res) => {
    res.send(terminalCommandsPage);
});

app.get("/npm-tools", (req,res) => {
    res.send(toolsPage);
});

app.get("/error401", (req,res) => {
    res.send(loginFailPage)
})










const PORT = process.env.PORT || 8080;

app.listen(PORT, (error)=> {
    if(error){
        console.log(error)
    }
    console.log(`server is running on port`, PORT)
}
)