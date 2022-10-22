import express from "express";
import  {renderPage}  from "./util/templateEngine.js";
import loginRouter from "./routers/adminRouter.js"
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use(loginRouter);

// app.use(<routername>) for routers

export const adminMessages = {
    frontpagePage: [],
    loginPage:[],
    projectSetupPage:[],
    terminalCommandsPage:[],
    toolsPage:[],
    fetchAndRedirectPage: [],
    variablesAndFunctionsPage: [],
    restAPIPage: [],
    SSRandCSRPage: []
}

function isAdmin(req){
    if(req.headers.cookie){
        return req.headers.cookie.indexOf("admin=true") > -1        
    }
    return false
}

//Login
const loginFailPage = renderPage("/errorpages/loginFail.html", {tabTitle:"Login Error", cssLink: "", tabTitleHeader:"NodeJS"});
// NPM tabs:

//Frontpage Page
app.get("/",(req,res) => {
    
    const options = {
        tabTitle : "NodeJs helper", 
        cssLink : "pages/frontpage/frontpage.css", 
        tabTitleHeader: "NodeJS",
        isAdmin: isAdmin(req),
        pagename: "frontpagePage",
        messages: adminMessages.frontpagePage
    }
    
    const frontpagePage = renderPage("/frontpage/frontpage.html", options);
    res.send(frontpagePage);
});

//login Page
app.get("/login", (req,res) =>{
    const options = {
        tabTitle : "Login", 
        cssLink : "pages/loginPage/login.css", 
        tabTitleHeader: "NodeJS",
        isAdmin: isAdmin(req),
        pagename: "loginPage",
        messages: adminMessages.loginPage
    }
    const loginPage = renderPage("/loginPage/login.html",options)
    res.send(loginPage);
});

//Fetch And Redirect Page
app.get("/fetchAndRedirect", (req,res) =>{
    const options = {
        tabTitle : "Fetch & Redirect", 
        cssLink : "", 
        tabTitleHeader: "Fetch & Redirect",
        isAdmin: isAdmin(req),
        pagename: "fetchAndRedirectPage",
        messages: adminMessages.fetchAndRedirectPage
    }
    const fetchAndRedirectPage = renderPage("/javascriptTopics/FetchAndRedirect/fetchAndRedirect.html",options);

    res.send(fetchAndRedirectPage);
});

// Variables and Functions Page
app.get("/variablesAndFunctions", (req,res) => {
    const options = {
        tabTitle : "Variables & Fuctiosn", 
        cssLink : "", 
        tabTitleHeader: "Variables & Functions",
        isAdmin: isAdmin(req),
        pagename: "variablesAndFunctionsPage",
        messages: adminMessages.variablesAndFunctionsPage
    }
    const variablesAndFunctionsPage = renderPage("/javascriptTopics/variablesAndFunctions/variablesAndFunctions.html", options);
    res.send(variablesAndFunctionsPage);
});

// REST API Page
app.get("/RestAPI", (req,res) => {
    const options = {
        tabTitle : "REST API", 
        cssLink : "", 
        tabTitleHeader: "REST API",
        isAdmin: isAdmin(req),
        pagename: "restAPIPage",
        messages: adminMessages.restAPIPage
    }

    const restAPIPage = renderPage("/javascriptTopics/RestAPI/restAPI.html", options);
    res.send(restAPIPage);
});

// SSR & CSR Page
app.get("/SSR-CSR", (req,res) => {
    const options = {
        tabTitle : "Server & Client side Rendering", 
        cssLink : "", 
        tabTitleHeader: "SSR & CSR",
        isAdmin: isAdmin(req),
        pagename: "SSRandCSRPage",
        messages: adminMessages.SSRandCSRPage
    }
    const SSRandCSRPage = renderPage("/javascriptTopics/SSRAndCSR/SSRAndCSR.html", options);
    res.send(SSRandCSRPage);
});

// Project Setup Page
app.get("/projectSetup", (req,res) => {
    const options = {
        tabTitle : "Project setup", 
        cssLink : "pages/setup_pages/projectSetup/projectSetup.css", 
        tabTitleHeader: "Project Setup",
        isAdmin: isAdmin(req),
        pagename: "projectSetupPage",
        messages: adminMessages.projectSetupPage
    }
    const projectSetupPage = renderPage("/setup_pages/projectSetup/projectSetup.html", options);
    res.send(projectSetupPage);
});

// Terminal Commands Page
app.get("/terminal-commands", (req,res) => {
    const options = {
        tabTitle : "Terminal Commands", 
        cssLink : "", 
        tabTitleHeader: "Terminal",
        isAdmin: isAdmin(req),
        pagename: "terminalCommandsPage",
        messages: adminMessages.terminalCommandsPage
    }
    const terminalCommandsPage = renderPage("/setup_pages/terminalCommands/terminalCommands.html", options);
    res.send(terminalCommandsPage);
});

// Tools
app.get("/tools", (req,res) => {
    const options = {
        tabTitle : "NPM tools", 
        cssLink : "pages/setup_pages/tools/tools.css", 
        tabTitleHeader: "Tools",
        isAdmin: isAdmin(req),
        pagename: "toolsPage",
        messages: adminMessages.toolsPage
    }
    const toolsPage = renderPage("/setup_pages/tools/tools.html", options);
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