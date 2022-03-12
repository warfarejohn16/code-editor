let Option = {
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: false,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    highlightActiveLine: true,
    autoScrollEditorIntoView: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    minLines: 10,
    fontFamily: "Roboto Mono",
    fontSize: "18px",
    cursorStyle: "wide"
}
let main = document.querySelector(".code-container");
let container = document.querySelector(".editor-container");
let editors = document.querySelectorAll("div.editor");
let btns = document.querySelectorAll(".btn");
let nav = document.querySelector(".navbar");
let fileName = document.querySelector("#file-name");
let titleExit = document.querySelector(".title-exit");
let iframe = document.querySelector("#output")
let toggle = document.querySelectorAll(".toggle-slide");
let title = document.querySelector("#project-title");
let height = parseInt(getComputedStyle(nav, null).getPropertyValue("height"));
let height_2 = parseInt(getComputedStyle(titleExit, null).getPropertyValue("height"));
let run = document.querySelector("#run");
container.style.height = `calc(100% - ${height}px)`;
iframe.style.height = `calc(100% - ${height}px)`;
function UpdateEditor() {
  window.html = ace.edit("html");
  html.getSession().setMode("ace/mode/html")
  html.setTheme("ace/theme/twilight")
  html.setOptions(Option);
  html.session.setUseWrapMode(true);
  html.session.setTabSize(1);
  html.session.getLength();
  html.setBehavioursEnabled(true);
  html.setShowPrintMargin(false);
  //css
  window.css = ace.edit("css");
  css.getSession().setMode("ace/mode/css")
  css.setTheme("ace/theme/twilight")
  css.setOptions(Option);
  css.session.setUseWrapMode(true);
  css.session.setTabSize(1);
  css.session.getLength();
  css.setBehavioursEnabled(true);
  css.setShowPrintMargin(false);
  //javascript
  window.js = ace.edit("js");
  js.getSession().setMode("ace/mode/javascript")
  js.setTheme("ace/theme/twilight")
  js.setOptions(Option);
  js.session.setUseWrapMode(true);
  js.session.setTabSize(1);
  js.session.getLength();
  js.setBehavioursEnabled(true);
  js.setShowPrintMargin(false);
  
}
UpdateEditor();

function toggleData(i) {
  for(let p = 0; p < btns.length; p++) {
    btns[p].classList.remove("active");
    editors[p].classList.remove("active");
  }
  btns[i].classList.add("active");
  editors[i].classList.add("active")
  fileName.innerHTML = btns[i].childNodes[1].innerHTML;
}
btns.forEach(function(e, i) {
  e.addEventListener("click", function() {
  toggleData(i);
  });
})

let bool = true;
function showOutputByIframe() {
  if(bool) {
    main.style.transform = "translateX(-100%)";
    iframe.srcdoc = `${html.getValue()}<style>${css.getValue()}</style><script>${js.getValue()}</script>`;
    bool = false;
    let txt = html.getValue().match(/\<title\>.*?\<\/title\>/g);
    if(txt === null || txt === undefined) title.innerHTML = `Project Title`;
    else {
    let replace = txt[0].replace(/(<(.*?)>)/g, ``);
    title.innerHTML = replace;
    }
  } else {
    main.style.transform = `translateX(0%)`;
    iframe.srcdoc = ``;
    bool = true;
  }
}

function updateValue() {
  html.setValue(localStorage.html);
  css.setValue(localStorage.css);
  js.setValue(localStorage.js);
  html.blur();
}
window.onload = function() {
  updateValue();
}
function updateDataValue() {
  localStorage.html = html.getValue();
  localStorage.css = css.getValue();
  localStorage.js = js.getValue();
}

toggle.forEach(function(e, i) {
e.addEventListener("click", function() {
  showOutputByIframe();
})
});

editors.forEach(function(e, i) {
  e.addEventListener("keyup", function() {
    updateDataValue();
  });
})
