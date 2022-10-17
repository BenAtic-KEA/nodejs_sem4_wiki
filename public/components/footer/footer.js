const footer = document.getElementById("foot");

const year = new Date().getFullYear();
const footerDiv = document.createElement("div");
const footerCopyRight = document.createElement("p");
footerCopyRight.textContent = `\u00A9 ${year} `;

footerDiv.appendChild(footerCopyRight);
footer.appendChild(footerDiv);
