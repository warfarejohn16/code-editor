
let Option = {
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: false,
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false,
    highlightActiveLine: true,
    highlightGutterLine : false,
    autoScrollEditorIntoView: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    minLines: 10,
    fontFamily: "Roboto Mono",
    fontSize : "16px",
    cursorStyle: "wide",
    showInvisibles : false,
    tooltipFollowsMouse : false,
    selectionStyle : "text",
    fadeFoldWidgets : true,
    theme : "ace/theme/cobalt",
    wrap : true,
}
let editors = document.querySelectorAll("div.editor");
let iframe = document.querySelector("#output")
function UpdateEditor() {
  window.html = ace.edit("html");
  html.getSession().setMode("ace/mode/html")
  //html.setTheme("ace/theme/twilight")
  html.setOptions(Option);
  html.session.setTabSize(1);
  html.session.getLength();
  html.setBehavioursEnabled(true);
  html.setShowPrintMargin(false);
  //css
  window.css = ace.edit("css");
  css.getSession().setMode("ace/mode/css")
  //css.setTheme("ace/theme/twilight")
  css.setOptions(Option);
  css.session.setTabSize(1);
  css.session.getLength();
  css.setBehavioursEnabled(true);
  css.setShowPrintMargin(false);
  //javascript
  window.js = ace.edit("js");
  js.getSession().setMode("ace/mode/javascript")
  //js.setTheme("ace/theme/twilight")
  js.setOptions(Option);
  js.session.setTabSize(1);
  js.session.getLength();
  js.setBehavioursEnabled(true);
  js.setShowPrintMargin(false);
  updateValue();
}



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
  html.clearSelection();
  css.clearSelection();
  js.clearSelection();
}
function updateDataValue() {
  localStorage.html = html.getValue();
  localStorage.css = css.getValue();
  localStorage.js = js.getValue();
}
