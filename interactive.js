
let main = document.querySelector(".code-container");
let container = document.querySelector(".editor-container");
let btns = document.querySelectorAll(".btn");
let nav = document.querySelector(".navbar");
let fileName = document.querySelector("#file-name");
let titleExit = document.querySelector(".title-exit");
let toggle = document.querySelectorAll(".toggle-slide");
let title = document.querySelector("#project-title");
let range = document.querySelector(".loading");
let toggleEditor = document.querySelectorAll(".toggleEditor");
let toggleBtn = document.querySelectorAll(".toggle-div");
let listSize = document.querySelector(".list-size");
let listfont = document.querySelector(".list-fonts");
let listtheme = document.querySelector(".list-themes")
let listWeightFont = document.querySelector(".list-font-weight")
let listLineHeight = document.querySelector(".list-line-height")
let listCursorStyle = document.querySelector(".list-caret-color")
let listCursorSize = document.querySelector(".list-caret-size");
let dropdown = document.querySelectorAll(".drop-option");
let data_dropdown = document.querySelectorAll(".data-dropdown-option");
let toggle_snippet = document.querySelector(".toggle-btn");
let toggle_wrap = document.querySelector(".wrap-mode");
let titlex = document.querySelectorAll(".dropdown h4")
let height = parseInt(getComputedStyle(nav, null).getPropertyValue("height"));
let height_2 = parseInt(getComputedStyle(titleExit, null).getPropertyValue("height"));
let run = document.querySelector("#run");
let setting;
let cursorWidth = "2px";
let cursorColor = "goldenrod";
container.style.height = `calc(100% - ${height}px)`;
//iframe.style.height = `calc(100% - ${height}px)`;
let count = 1, delay = 1000;
let timer = setInterval(function() {
  count++;
  if(count >= 100) {
    count = 0;
    UpdateEditor();
    clearInterval(timer);
  }
  range.style.width = `${count}%`;
}, 20);

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

toggle.forEach(function(e, i) {
e.addEventListener("click", function() {
  showOutputByIframe();
})
});

editors.forEach(function(e, i) {
  e.addEventListener("keyup", function() {
    let i;
    clearTimeout(i)
    i = setTimeout(function() {
      updateDataValue()
    }, delay);
  });
})


//toggle between option and editor...
function changeSlide(i) {
  for(let x = 0; x < toggleBtn.length; x++) {
    toggleEditor[x].classList.remove("active");
    toggleBtn[x].style.display = "none";
  }
  toggleEditor[i].classList.add("active");
  toggleBtn[i].style.display = "block";
}
changeSlide(1);
toggleEditor.forEach(function(e, i) {
  e.addEventListener("click", function() {
    changeSlide(i);
  })
})
function changeStyle(type, index) {
 let cursor = document.querySelectorAll(".ace_cursor")
 let fontSize = document.querySelectorAll(".size-count");
 let fonts = document.querySelectorAll(".font-families")
 let weight_fonts = document.querySelectorAll(".font-weight")
 let themes_sec = document.querySelectorAll(".theme");
 let line_heights = document.querySelectorAll(".line-height");
 let cursorz = document.querySelectorAll(".color-cursor");
 let cursorSz = document.querySelectorAll(".width-cursor")
 let src = "ace/theme/";
 let arr = ["fontsize", "fonts", "line-height", "font-weight", "theme", "cursor-color", "cursor-width"];
 if(type === arr[0]) {
   titlex[0].innerText = fontSize[index].innerText;
   html.setOption("fontSize", fontSize[index].innerText)
   css.setOption("fontSize", fontSize[index].innerText)
   js.setOption("fontSize", fontSize[index].innerText)
}
if(type === arr[1]) {
  titlex[1].innerText = fonts[index].innerText;
  html.setOption("fontFamily", fonts[index].innerText)
  css.setOption("fontFamily", fonts[index].innerText)
  js.setOption("fontFamily", fonts[index].innerText)
}
if(type === arr[3]) {
  titlex[2].innerText = weight_fonts[index].innerText;
  editors.forEach(function(e) {
    e.style.fontWeight = weight_fonts[index].innerText+" !important";
  })
}
 if(type === arr[2]) {
   titlex[3].innerText = line_heights[index].innerText;
   editors.forEach(function(e) {
     e.style.lineHeight = line_heights[index].innerText;
   })
 }
 if(type === arr[4]) {
   titlex[4].innerText = themes_sec[index].innerText;
   html.setOption("theme", src+themes_sec[index].innerText)
  css.setOption("theme", src+themes_sec[index].innerText)
  js.setOption("theme", src+themes_sec[index].innerText)
 }
 if(type === arr[5]) {
   titlex[5].innerText = cursorz[index].innerText;
   for(let i = 0; i < cursor.length; i++) {
   cursor[i].style.borderLeft = `${cursorWidth} solid ${cursorz[index].innerText}`;
   }
   cursorColor = cursorz[index].innerText;
 }
 if(type === arr[6]) {
   titlex[6].innerText = cursorSz[index].innerText;
   for(let j = 0; j < cursor.length; j++) {
   cursor[j].style.borderLeft = `${cursorSz[index].innerText} solid ${cursorColor}`;
   }
   cursorWidth = cursorSz[index].innerText;
 }
  setting.push({type : type, index : index})
  setting.forEach(function(span, i) {
    if(span.type === type && span.index === index) {
      setting.pop();
      span = {
        type : type,
        index : index
      }
    }
  })
  let json = JSON.stringify(setting);
  localStorage.setItem("eachValue", json);
}
let fontsize = 33, curWidth = 5;
let fonts = ["Roboto Mono", "Syne Mono", "Source Code Pro", "monospace", "JetBrains Mono"];
let weightfonts = ["normal", "bold", "300", "200", "100", "400", "500", "600", "700", "800", "900", "1000"];
let lineHeights = ["normal", 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2];
let themes = ["cobalt", "twilight", "ambiance", "chrome", "cloud9_day", "cloud9_night", "cloud9_night_low_color", "clouds", "clouds_midnight", "cobalt", "crimson-editor", "dawn", "dracula", "dreamwaver", "eclipse", "github", "github_dark", "gob", "gruvbox", "gruvbox_dark_hard", "gruvbox_light_hard"];
let cursor_style = ["goldenrod", "yellow", "tomato", "green", "lime", "limegreen", "purple", "red", "gold", "orange", "darkgreen", "lightgreen", "black", "white", "pink", "violet"];

function loadPreviousInteraction() {
  if(!localStorage.getItem("eachValue")) return;
  let getItem = localStorage.getItem("eachValue");
  let unzip = JSON.parse(getItem);
  unzip.forEach(function(span, i) {
    changeStyle(span.type, span.index);
  })
}
loadPreviousInteraction();
function loadFontSize() {
  for(let i = 0; i < fontsize; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "size-count");
    li.setAttribute("onclick", `changeStyle("fontsize", ${i})`)
    li.innerText = `${i}px`;
    listSize.appendChild(li);
  }
}
 function loadFontFamily() {
   for(let i = 0; i < fonts.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "font-families");
    li.setAttribute("onclick", `changeStyle("fonts", ${i})`)
    li.innerText = `${fonts[i]}`;
    listfont.appendChild(li);
  }
 }
 function loadFontWeight() {
   for(let x = 0; x < weightfonts.length; x++) {
    let li = document.createElement("li");
    li.setAttribute("class", "font-weight");
    li.setAttribute("onclick", `changeStyle("font-weight", ${x+1})`)
    li.innerText = `${weightfonts[x]}`;
    listWeightFont.appendChild(li);
  }
 }
 function loadLineHeight() {
   for(let y = 0; y < lineHeights.length; y++) {
     let li = document.createElement("li");
    li.setAttribute("class", "line-height");
    li.setAttribute("onclick", `changeStyle("line-height", ${y})`)
    li.innerText = `${lineHeights[y]}`;
    listLineHeight.appendChild(li)
   }
 }
 function loadThemes() {
   for(let c = 0; c < themes.length; c++) {
     let li = document.createElement("li");
    li.setAttribute("class", "theme");
    li.setAttribute("onclick", `changeStyle("theme", ${c})`)
    li.innerText = `${themes[c]}`;
    listtheme.appendChild(li);
   }
 }
 function loadCursorColor() {
   for(let a = 0; a < cursor_style.length; a++) {
     let li = document.createElement("li");
     li.setAttribute("class", "color-cursor");
     li.setAttribute("onclick", `changeStyle("cursor-color", ${a})`)
     li.innerText = cursor_style[a];
     listCursorStyle.appendChild(li);
   }
 }
 function loadCursorWidth() {
   for(let v = 0; v < curWidth; v++) {
     let li = document.createElement("li");
     li.setAttribute("class", "width-cursor");
     li.setAttribute("onclick", `changeStyle("cursor-width", ${v})`)
     li.innerText = `${v+1}px`;
     listCursorSize.appendChild(li)
   }
 }
 loadCursorWidth();
 loadCursorColor();
 loadThemes(); 
 loadLineHeight();
 loadFontSize();
 loadFontFamily();
 loadFontWeight();
 function openClose(index) {
   for(let x = 0; x < data_dropdown.length; x++) {
     data_dropdown[x].classList.remove("active");
   }
   data_dropdown[index].classList.add("active");
 }
 
 dropdown.forEach(function(e, i) {
 e.addEventListener("mouseover", function() {
   openClose(i)
 })
 e.addEventListener("mouseout", function() {
   for(let x = 0; x < data_dropdown.length; x++) {
     data_dropdown[x].classList.remove("active");
   }
 })
});

let bool$ = true;
let bool$1 = true;
function toggleSnippet() {
  if(bool$) {
    bool$ = false;
    html.setOption("enableSnippets", bool$)
    css.setOption("enableSnippets", bool$)
    js.setOption("enableSnippets", bool$)
    
    html.setOption("enableLiveAutocompletion", bool$)
    css.setOption("enableLiveAutocompletion", bool$)
    js.setOption("enableLiveAutocompletion", bool$)
  } else {
    bool$ = true;
    html.setOption("enableSnippets", bool$)
    css.setOption("enableSnippets", bool$)
    js.setOption("enableSnippets", bool$)
    
    html.setOption("enableLiveAutocompletion", bool$)
    css.setOption("enableLiveAutocompletion", bool$)
    js.setOption("enableLiveAutocompletion", bool$)
  }
  toggle_snippet.innerText = bool$;
}
function toggleWrapping() {
  if(bool$1) {
    bool$1 = false;
    html.setOption("wrap", bool$1)
    css.setOption("wrap", bool$1)
    js.setOption("wrap", bool$1)
  } else {
    bool$1 = true;
    html.setOption("wrap", bool$1)
    css.setOption("wrap", bool$1)
    js.setOption("wrap", bool$1)
  }
  toggle_wrap.innerText = bool$1;
}

toggle_snippet.addEventListener("click", function() {
  toggleSnippet();
})
toggle_wrap.addEventListener("click", function() {
  toggleWrapping();
})
