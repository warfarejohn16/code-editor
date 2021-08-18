* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
*:selections {
   background: lightblue!important;
}
body,html{
width: 100%;
height: 100vh;
}
body {
display: flex;
align-items: flex-end;
}
div.fluid-container {
width: 100%;
height: 100%;
display: flex;
align-items: flex-start;
flex-wrap: wrap;
}
div.fluid-container div.cd{
width: 100%;
height: 46%;
display: flex;
align-items: center;
flex-wrap: wrap;
background: white url("file:///storage/sdcard0/Download/IMG_20210808_104446_903.JPG") center no-repeat;
background-size: cover;
}
.cd header {
width: 100%;
height: 20%;
display: flex;
align-items: flex-end;
justify-content: center;
position: sticky;
top: 0;
z-index: 10000;
}
header button {
width: 16%;
padding: 9px;
font-size: 11px;
font-family: sans-serif;
font-weight: 700;
color: white;
background-color: rgba(9,25,45,1);
border: none;
}
.cd div.code-container {
width: 100%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
}
.code-container > section {
width: 95%;
height: 91%;
font-size: 13px;
border: none;
background-color: transparent;
line-height: 1.6;
display: none;
}

.fluid-container div.frame-container {
width: 100%;
height: 54%;
display: flex;
align-items: center;
justify-content: center;
}
.frame-container iframe {
width: 100%;
height: 100%;
border: none;
}

/*active buttons*/
.active {
background-color: rgba(12,34,45,1)!important;
}
#result {
width: 18%!important;
background-color: green;
}
#result:active {
border: 2px solid orange;
padding: 7px!important;
}
#reset {
background-color: mediumseagreen;
margin-left: 10px;
}
div.prompt {
position: fixed;
bottom: 10px;
left: -200%;
width: 95%;
height: 90px;
display: flex;
align-items: center;
background-color: rgba(25,34,67,1);
border-radius: 3px;
justify-content: space-around;
z-index: 1;
transition: left 1s;
}
.prompt > button {
position: absolute;
top: -7px;
right: -1px;
padding: 5px;
font-size: 1.3em;
border: none;
background-color: transparent;
color: white;
font-family: sans-serif;
font-weight: 1000;
}
.prompt div.leftedTxt {
width: 70%;
}
.leftedTxt h2 {
padding: 5px 10px;
text-align: left;
font-family: sans-serif;
font-weight: 1000;
font-size: 1.2em;
color: white;
}
.leftedTxt p {
padding: 5px 10px;
line-height: 1;
word-spacing: 2px;
font-family: sans-serif;
font-weight: 300;
font-size: 1em;
color: white;
}
.prompt div.accepted {
width: 25%;
display: flex;
align-items: center;
justify-content: center;
}
.accepted button {
width: 100%;
padding: 10px;
font-size: 1.3em;
background-color: transparent;
border: none;
color: dodgerblue;
font-family: sans-serif;
font-weight: 300;
text-align: center;
}
@media screen and (min-width: 900px) {
body, html {
   height: 100%!important;
overflow: hidden!important;
}
  body {
    align-items: stretch!important;
    }
.fluid-container div.cd {
justify-content: flex-start!important;
height: 30%!important;
align-items: center!important;
}
.cd header {
display: none!important;
}
.cd div.code-container {
width: 100%!important;
height: 100%!important;
flex-wrap: nowrap!important;
justify-content: space-around!important;
}
.code-container section {
display: block!important;
width: 30%;
height: 95%!important;
overflow-y: scroll!important;
  font-size: 1.12em!important;
}

.fluid-container div.frame-container {
width: 100%!important;
height: 70%!important;
}
}
