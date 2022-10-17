import fs from "fs";

const navComponent  = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options = {tabTitle : "wiki", cssLink:""}){
        const page = fs.readFileSync("./public/pages"+ path).toString();
        return navComponent
            .replace("%%TAB_TITLE%%", options.tabTitle)
            .replace("%%PAGE_CSS_LINK%%", options.cssLink)
            + page
            + footerComponent;
}  

export function injectData(pageString, data){
    const brokenUpHTML = pageString.split("</body>");
    const variableName = Object.keys({data})[0];
    return brokenUpHTML[0] + `<script>const ${varableName} = ${JSON.stringify(data)}</script></body>` + brokenUpHTML[1]
}