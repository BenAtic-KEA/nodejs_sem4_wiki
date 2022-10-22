import fs from "fs";

const navComponent  = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();
const adminComponent = fs.readFileSync("./public/components/adminPanel/adminPanel.html").toString();
const sidebarComponent = fs.readFileSync("./public/components/sidebar/sidebar.html").toString();

export function renderPage(path, options = {tabTitle : "wiki", cssLink:"", tabTitleHeader: "NodeJs", pagename:null, messages: null, isAdmin: false}){
        const page = fs.readFileSync("./public/pages"+ path).toString();

        if(options.isAdmin){

            return navComponent
            .replace("%%TAB_TITLE%%", options.tabTitle)
            .replace("%%PAGE_CSS_LINK%%", options.cssLink)
            .replace("%%TAB_TITLE_HEADER%%", options.tabTitleHeader)
            .replace("%%TAB_TITLE_HEADER%%", options.tabTitleHeader)
            + sidebarComponent
            + page
            + adminComponent
            .replace("%%pagename%%",options.pagename)
            .replace("%%messages%%",adminMessageCreator(options.messages))
            + footerComponent;
        }
        return navComponent
            .replace("%%TAB_TITLE%%", options.tabTitle)
            .replace("%%PAGE_CSS_LINK%%", options.cssLink)
            .replace("%%TAB_TITLE_HEADER%%", options.tabTitleHeader)
            .replace("%%TAB_TITLE_HEADER%%", options.tabTitleHeader)
            + sidebarComponent
            + page
            + sidebarComponent
            + footerComponent;
}

export function readPage(path){
    return fs.readFileSync("./public/pages"+ path).toString();
}

export function injectData(pageString, data){
    const brokenUpHTML = pageString.split("</body>");
    const variableName = Object.keys({data})[0];
    return brokenUpHTML[0] + `<script>const ${varableName} = ${JSON.stringify(data)}</script></body>` + brokenUpHTML[1]
}

function adminMessageCreator(messages){

    let result = ''
    
    messages.forEach(message => {
        result += `
        <div>
            <p>
                ${message}
            </p>
        </div>
        `
    })
    return result

}