export default {
    data:[{
        name:"toggle--slide",
        color:"#7fffd4",
        dark:true,
        preview:`<div class="toggle--slide"><div class="toggle--slide__outer">   <div class="toggle--slide__switch on" id="toggle--slide__switch"></div></div></div>`,
        code:{
            html:
`<div class="toggle--slide">
    <div class="toggle--slide__outer">   
        <div class="toggle--slide__switch on" id="toggle--slide__switch"></div>
    </div>
</div>`,
            css:
`.toggle--slide{
    --width: 150px;
    width: var(--width);
    height: calc(1.727 * var(--width));
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    z-index: 1;
    position: relative;
}
.toggle--slide::after{
    --toggle-height: 4px;
    content: "";
    position: absolute;
    top: var(--toggle-height);
    bottom: calc(-1 * var(--toggle-height));
    left: 0;
    right: 0;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    background-color: #Efefef;
    border-radius: 5px;
    z-index: 0;
}
/*Outer demarcation*/
.toggle--slide__outer{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #FFF;
    border-radius: 5px;
    z-index: 2;
}
/*Sliding area*/
.toggle--slide__switch{
    width: 40%;
    height: 53%;
    border-radius: 5px;
    position: relative;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3), 0 0 5px rgba(0,0,0,0.1);
    cursor: pointer;
}
.toggle--slide__switch.on{
    background-color: #cbffcd;
}
.toggle--slide__switch:not(.on){
    background-color:#FFCBCB;
}
/*Inner demarcation*/
.toggle--slide__switch::after{
    content: "";
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0,0,0,0.1);
}
/*Toggle bar*/
.toggle--slide__switch::before{
    content: "";
    position: absolute;
    height: 15%;
    left: 0;
    right: 0;
    border-radius: 5px;
    background-color: #fcfcfc;
    box-shadow: inset 0 0 2px rgba(0,0,0,0.1);
    transition: top 0.1s ease-in-out;
}
.toggle--slide__switch.on::before{
    top: 0;
}
.toggle--slide__switch:not(.on):before{
    top: 85%;
}`,
            js:
`const toggle = document.getElementById("toggle--slide__switch");
toggle.addEventListener("click",function(){
    toggle.classList.toggle("on");
})`
        }
    },
    {
        name: "toggle--3d-glow",
        color: "#222222",
        dark: false,
        preview: `<div class="toggle--glowing-3d"><button class="toggle--glowing-3d__button"></button></div>`,
        code:{
            html:
`<div class="toggle--glowing-3d">
    <button class="toggle--glowing-3d__button"></button>
</div>`,
            css:
`.toggle--glowing-3d {
    all: unset;
    background-color: #222;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    box-shadow: 0 0 15px #111;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #222;
    box-shadow: 0 -15px 15px rgba(255,255,255,0.05), 
                inset 0 -15px 15px rgba(255,255,255,0.05),
                0 15px 15px rgba(0,0,0,0.05),
                inset 0 15px 15px rgba(0,0,0,0.05);
}

.toggle--glowing-3d__button {
    all: unset;
    background-color: #222;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    box-shadow: 0 0 15px #111;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 4px solid #272727;
    box-shadow: 0 -15px 20px rgba(255,255,255,0.05),
                inset 0 -15px 20px rgba(0,0,0,0.05),
                0 15px 20px rgba(0,0,0,0.05),
                inset 0 15px 20px rgba(255,255,255,0.05);
}

.toggle--glowing-3d__button.active{
    border: 2px solid #222;
    box-shadow: 0 -15px 20px rgba(255,255,255,0.05), 
                inset 0 -15px 20px rgba(255,255,255,0.05),
                0 15px 20px rgba(0,0,0,0.05),
                inset 0 15px 20px rgba(0,0,0,0.05);
}

.toggle--glowing-3d__button::after {
    --color: #ce1c3e;
    --border-color: #7f1025;
    content: "";
    height: 50%;
    width: 50%;
    border-radius: 50%;
    display: block;
    transition: background-color, box-shadow, border, 0.15s ease-in-out;
    background-color: var(--color);
    box-shadow: 0 0 150px var(--color), 0 0 50px var(--color),
                inset 0 0 15px rgba(0,0,0,0.05);
    border: solid 3px var(--border-color);
}
.toggle--glowing-3d__button.active::after {
    --color: #5ce73a;
    --border-color: #33931c;
}`,
            js:
`[...document.getElementsByClassName("toggle--glowing-3d__button")]
.forEach((button)=>{
    button.addEventListener("click",()=>{
        button.classList.toggle("active");
    });
});`
        }
    },
    {
        name: "toggle--mobile",
        color: "#2EC27C",
        preview: `<div class="toggle--mobile"></div>`,
        code:{
            html:`<div class="toggle--mobile"></div>`,
            css:
`.toggle--mobile{
    --width:4em;
    --color:#00ff76;
    width: var(--width);
    height: calc(var(--width) / 2);
    border-radius: 10em;
    background-color: #FFF;
    border: solid 2px #eee;
    position: relative;
    cursor: pointer;
    transition: background-color,border-color, 0.15s ease-in-out;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}
.toggle--mobile::after{
    content: "";
    display: block;
    position: absolute;
    background-color: #FFF;
    width: calc(var(--width) * 0.48);
    height: calc(var(--width) * 0.48);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0, 0.3);
    left: 0;
    top: calc(var(--width) * 0.02);
    transition: left 0.15s ease-in-out;
}
.toggle--mobile.active{
    background-color: var(--color);
    border-color: var(--color);
}
.toggle--mobile.active::after{
    left: calc(100% - var(--width) * 0.48);
}`,
            js:
`[...document.getElementsByClassName("toggle--mobile")].forEach((toggle)=>{
    toggle.addEventListener("click",()=>{
        toggle.classList.toggle("active"); 
    });
});`
        }   
    },
    {
        name:"toggle--bars",
        color:"#E1204F",
        preview:` <div class="toggle--bars"><div></div><div></div><div></div></div>`,
        code: {
            html:
` <div class="toggle--bars">
    <div></div>
    <div></div>
    <div></div>
</div>`,
            css:
`.toggle--bars{
    --width: 3em;
    width: var(--width);
    height: calc(var(--width) * 0.9);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}
.toggle--bars div{
    background-color: #FFF;
    width: 100%;
    height: calc(var(--width) / 5);
    position: relative;
    transition-property: top, transform, opacity;
    transition-duration:  0.3s;
    transition-timing-function: ease-in-out;
    top: 0;
    opacity: 1;
}
.toggle--bars.active div{
    opacity: 0;
}
.toggle--bars.active div:first-child{
    transform: rotate(135deg);
    top: calc(var(--width) / 2.857);
    opacity: 1; 
}
.toggle--bars.active div:last-child{
    transform: rotate(-135deg);
    top:  calc(var(--width) / -2.857);
    opacity: 1;
}`,     
            js:
`[...document.getElementsByClassName("toggle--bars")].forEach((toggle)=>{
    toggle.addEventListener("click",()=>{
        toggle.classList.toggle("active");
    });
});`
        }
    },
    {
        name:"toggle--play",
        color:"#641585",
        preview:`<div class="toggle--play"><div></div><div></div></div>`,
        code:{
            html:
`<div class="toggle--play">
    <div></div>
    <div></div>
</div>`,
            css:
`.toggle--play{
    --tolerance: 0.02em;
    width: 5em;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.toggle--play div{
    background-color: #fff;
    width: 2.5em;
    height: 5em;
    position: relative;
    transition-property: left, height, width;
    transition-duration:  0.3s;
    transition-timing-function: ease-in-out;
    left: 0;
}
.toggle--play:not(.paused) div:first-child{
    height: 2.5em;
}
.toggle--play:not(.paused) div:last-child{
    height: 0;
}
.toggle--play.paused div:first-child{
    left: -0.5em;
    width: 2em;
}
.toggle--play.paused div:last-child{
    left: 0.5em;
    width: 2em;
}
.toggle--play div::before,
.toggle--play div::after{
    content: "";
    position: absolute;
    left: 0;
    border-left: 2.5em solid #fff;
    transition-property: border-top, border-left, border-bottom, top, bottom;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}
.toggle--play div::before{
    border-top: 1.25em solid transparent;
    top: calc(-1.25em + var(--tolerance));
}
.toggle--play div::after{
    bottom: calc(-1.25em + var(--tolerance));
    border-bottom: 1.25em solid transparent;
}
.toggle--play.paused div::before{
    border-top: 0 solid transparent;
    top: var(--tolerance);
    border-left-width: 2em;
}
.toggle--play.paused div::after{
    border-bottom: 0 solid transparent;
    bottom: var(--tolerance);
    border-left-width: 2em;
}`,
            js:
`[...document.getElementsByClassName("toggle--play")].forEach((toggle)=>{
    toggle.addEventListener("click", ()=>{
        toggle.classList.toggle("paused");
    });
});`
        }
    }]
}