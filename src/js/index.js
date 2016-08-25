require('../styles/main.scss');
require('../styles/prism-dark.scss');

var Remarkable = require('remarkable');
var Prism = require('prismjs');

updateLink();
updatePanel();

window.addEventListener("hashchange", function () {
    updateLink();
    updatePanel();
});

function updateLink() {
    if (window.location.hash) {
        document.querySelector("a.current").classList.remove("current");
        document.getElementById(window.location.hash.slice(1)).classList.add("current");
    }
}

function updatePanel() {
    var hash = window.location.hash ? window.location.hash.slice(1) : 'css3',
        sourceUrl = 'examples/' + hash + '/source.md',
        demoUrl = 'examples/' + hash + '/index.html';

    document.getElementsByTagName('iframe')[0].src = demoUrl;

    var request = new XMLHttpRequest();
    request.open("GET", sourceUrl, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var source = md2html(request.responseText);
            console.log(source);
            var container = document.createElement("div");
            container.innerHTML = source;
            var code = container.getElementsByTagName("code")[0];
            code.innerHTML = Prism.highlight(code.textContent, Prism.languages[code.className.split("-")[1]]);
            container.getElementsByTagName('pre')[0].className = code.className;
            console.log(container.innerHTML);
            document.getElementsByClassName("source-panel")[0].innerHTML = container.innerHTML;
        }
    };
    request.send();
}

function md2html(md) {
    var parser = new Remarkable();
    return parser.render(md);
}