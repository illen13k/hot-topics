const container = document.querySelector("#main-content");
const links = document.querySelectorAll("nav a");
let url = "./partials/home.html";

const loadContent = function() {
    fetch(url)
        .then(function(rsp) {
            if (rsp.ok) {
                return rsp.text();
            }
            throw new Error(rsp.statusText);
        })
        .then(function(data) {
            container.innerHTML = data;
        })
}; 

loadContent();

const selectContent = function(ev) {
    ev.preventDefault();
    let clickedLink = ev.target;
    url = clickedLink.href;
    loadContent(); 
};

links.forEach(link => link.addEventListener("click", selectContent));
