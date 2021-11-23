ace.require("ace/ext/language_tools");
var inputers = {
html: document.getElementById("html"),
css: document.getElementById("css"),
js: document.getElementById("js"),
sections: document.getElementsByTagName("section"),
buttons: document.getElementsByClassName("btn")
};
window.onload = function(){
inputers.html.style.display ="block";
};
//we can use later
var i,v = localStorage.hyperTxt,j = localStorage.Cascading, c = localStorage.Javascript;
function SessionsKey() {
localStorage.hyperTxt = editorHtml.getValue();
localStorage.Cascading = editorCss.getValue();
localStorage.Javascript = editorJs.getValue();
}
function clickTrigger(n) {
for(i =0;i < inputers.buttons.length;i++) {
inputers.buttons[i].setAttribute("class", "btn");
inputers.sections[i].style.display = "none";
}
inputers.sections[n].style.display ="block";
inputers.buttons[n].setAttribute("class", "btn active");
}
function Html() {
window.editorHtml = ace.edit("html");
editorHtml.getSession().setMode("ace/mode/html");
editorHtml.setTheme("ace/theme/monokai");
editorHtml.setValue(`${v}`, 1);
editorHtml.setOptions({
showLineNumbers: true,
showGutter: true,
vScrollBarAlwaysVisible: false,
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
highlightActiveLine: false,
    autoScrollEditorIntoView: true,
    enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
});
    editorHtml.session.setUseWrapMode(true);
editorHtml.session.setTabSize(1);
editorHtml.session.getLength();
editorHtml.setBehavioursEnabled(true);
editorHtml.setShowPrintMargin(false);
editorHtml.selection.getCursor();
}
Html();
function Css() {
window.editorCss = ace.edit("css");
editorCss.getSession().setMode("ace/mode/css");
editorCss.setTheme("ace/theme/monokai");
editorCss.setValue(`${j}`, 1);
editorCss.setOptions({
showLineNumbers: true,
showGutter: true,
vScrollBarAlwaysVisible: false,
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
highlightActiveLine: false,
    autoScrollEditorIntoView: true,
    enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
});
    editorCss.session.setUseWrapMode(true);
editorCss.setBehavioursEnabled(true);
editorCss.setShowPrintMargin(false);
editorCss.session.setTabSize(1);
editorCss.session.getLength();
}
Css();
function Javascript() {
window.editorJs = ace.edit("js");
editorJs.getSession().setMode("ace/mode/javascript");
editorJs.setTheme("ace/theme/monokai");
editorJs.setValue(`${c}`, 1);
editorJs.setOptions({
showLineNumbers: true,
showGutter: true,
vScrollBarAlwaysVisible: false,
enableBasicAutocompletion: true,
enableLiveAutocompletion: true,
highlightActiveLine: false,
    autoScrollEditorIntoView: true,
    enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
});
    editorJs.session.setUseWrapMode(true);
editorJs.session.setTabSize(1);
editorJs.setBehavioursEnabled(true);
editorJs.setShowPrintMargin(false);
}
Javascript();

document.getElementById("result").addEventListener("click", function () {
if(editorHtml.getValue() == "" && editorCss.getValue() == "" && editorJs.getValue() == "") {
Prompt.style.left = "2%";
}
let iframe = document.getElementById("iframe");
iframe.srcdoc = editorHtml.getValue()+"<style>"+editorCss.getValue()+"</style>"+"<script>"+editorJs.getValue()+"</script>";
SessionsKey();
});
function ForPcOn(){
if(window.innerWidth >= 900){
let iframe = document.getElementById("iframe");
iframe.srcdoc = editorHtml.getValue()+"<style>"+editorCss.getValue()+"</style>"+"<script>"+editorJs.getValue()+"</script>";
timer = 100;
}else {
return;
}
}
ForPcOn();
//prmpt
var Prompt = document.querySelector(".prompt");
var tmp = `<!doctype html>\n <html>\n \ <head>\n \ <title>This is the axample</title>\n \ <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n \ <meta http-equiv='X-UA-Compatible' content='IE=Edge'>\n \</head>\n \<body>\n \ \ <h1>This is heading</h1>\n \ \ <p>This is a paragraph</p>\n \</body>\n </html>\n <!--[This is a example of our editor]-->`, tmp_2 = `* \{\n font-size: 18px;\n \}`, tmp_3 = `document.write(Date())`;
function Changrt(txtN) {
if(txtN == "ok") {
if(editorHtml.getValue() == "" && editorCss.getValue() == "" && editorJs.getValue() == "") {

editorHtml.setValue(`${tmp}`, 1);
Prompt.style.left = `${"-"+100+100}%`;

editorCss.setValue(`${tmp_2}`, 1);

editorJs.setValue(`${tmp_3}`, 1);
Prompt.style.left = `${"-"+100+100}%`;
}
} else {
Prompt.style.left = `${"-"+100+100}%`;
}
SessionsKey();
}
Changrt('ok');
