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
`.toggle--glowing-3d
    {
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

    .toggle--glowing-3d__button
    {
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

    .toggle--glowing-3d__button::after
    {
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
    .toggle--glowing-3d__button.active::after
    {
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
    }]
}