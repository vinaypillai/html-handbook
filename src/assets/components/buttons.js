export default {
    data:[{
        name:"button--simple",
        color:"#f5f5dc",
        dark:true,
        preview:`<div class="button--simple"><button>Button</button></div>`,
        code:{
            html:
`<div class="button--simple">
    <button>Button</button>
</div>`,
            css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.button--simple{
    --color: #FFF;
    --button-height: 4px;
    position: relative;
    z-index: 0;
}
.button--simple button{
    all:unset;
    position: relative;
    font-family: "Lato",sans-serif;
    background-color:#fcba03;
    padding: 20px 40px;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    font-size: 25px;
    border-radius: 100px;
    cursor: pointer;
    transition: top,bottom,background-color, 0.15s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 1;
}
.button--simple::after{
    content: "";
    background-color: #DDA300;
    position: absolute;
    top: var(--button-height);
    bottom: calc(-1 * var(--button-height));
    left: 0;
    right: 0;
    top: var(--button-height);
    border-radius: 500px;
    z-index: -1;
}
.button--simple:active{
    top: calc(2 * var(--button-height));
}
.button--simple:active::after{
    top:0;
    bottom: 0;
}`
        }
    },
    {
        name:"button--swipe-down",
        color:"#21695D",
        preview:`<button class="button--swipe-down">Button</button>`,
        code:{
            html:
`<button class="button--swipe-down">Button</button>`,
            css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.button--swipe-down {
    all: unset;
    --font-color: #fff;
    background-color: #21695D;
    color: var(--font-color);
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
    width: 200px;
    height: 75px;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4px;
    z-index: 2;
    transition: color 0.2s ease-in-out;
    -webkit-text-fill-color: var(--font-color);
}
.button--swipe-down:hover {
    cursor: pointer;
    color: #21695D;
    --font-color: #21695D;
    transition: background-color 0s ease-in-out 0.2s;
    background-color: #fff;
}
.button--swipe-down::before {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    height: 0px;
    content: "";
    background-color: #fff;
    z-index: -1;
    transition: height 0.2s ease-in-out;
}
.button--swipe-down:hover::before {
    height: 75px;
}`
        }
    },
    {
        name:'button--jumping-color-change',
        color:'#222',
        preview:`<button class="button--jumping-color-change">Jump!</button>`,
        code:{
            html:
`<button class="button--jumping-color-change">Jump!</button>`,

            css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap');
.button--jumping-color-change {
  all: unset;
  background-color: #C45553;
  color: #222;
  border-radius: 500px;
  padding: 20px 50px;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 4px;
  z-index: 2;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

.button--jumping-color-change:hover {
  cursor: pointer;
}

@keyframes button--pill-jumping {
  0%, 100% {
    top: 0px;
    bottom: 0px;
  }

  12.5% {
    padding:7.5px 65px;
    top: 25px;
    bottom: 0px;
    background-color: #C45553;
  }

  30% {
    padding: 20px 50px;
    bottom: 0px;
    background-color: #fff;
    box-shadow: 0 0 20px #fff;
  }

  50% {
    top: -100px;
    padding-top: 20px;
  }

  75% {
    padding: 20px 50px;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 0 20px #fff;
  }

  87.5% {
    padding: 15px 55px;
    top: 10px;
    bottom: 0;
    background-color: #C45553;
  }
}`,
            js:
`[...document.getElementsByClassName("button--jumping-color-change")]
.forEach(button => {
    button.addEventListener("click", function() {
      button.style.animation = "button--pill-jumping 2s 1 ease-in-out";
      setTimeout(function() {
        button.style.animation = "none";
      }, 2000);
    });
});`
        }
    },
    {
      name:'button--flat',
      color:'#40ae44',
      preview:`<button class="button--flat">Button</button>`,
      code:{
        html:`<button class="button--flat">Button</button>`,
        css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.button--flat{
    --bg-color: #40ae44;
    --color: #FFF;
    all: unset;
    padding: 20px 50px;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 20px;
    border: solid 1px var(--color);
    border-radius: 500px;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    cursor: pointer;
    transition: color, background-color,-webkit-text-fill-color,border-width, 0.15s ease-in-out;
}
.button--flat:hover{
    background-color: var(--color);
    color: var(--bg-color);
    -webkit-text-fill-color: var(--bg-color);
}`
      }
    },
    {
      name:'button--slide-left',
      color:'#D4900D',
      preview:`<div class="button--slide-left"><button><span>Button</span></button></div>`,
      code:{
        html:
`<div class="button--slide-left">
    <button>
        <span>Button</span>
    </button>
</div>`,
        css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.button--slide-left{
    --bg-color: #D4900D;
    --color: #FFF;
    display: inline-block;
    position: relative;
    cursor: pointer;
    border-radius: 500px;
    z-index: 1;
}
.button--slide-left button{
    all: unset;
    padding: 20px 50px;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 20px;
    border: solid 1px var(--color);
    border-radius: inherit;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    transition: color, background-color,-webkit-text-fill-color,border-width, 0.15s ease-in-out;
}
.button--slide-left span{    
    mix-blend-mode: difference;
}
.button--slide-left::after{
    content: "";
    background-color: var(--color);
    color: var(--bg-color);
    -webkit-text-fill-color: var(--bg-color);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    z-index: -1;
    clip-path: circle(0% at -25% 50%); 
    transition: clip-path 1s;
}
.button--slide-left:hover::after{
    clip-path: circle(100%);
}`
      }
    },
    {
      name:'button--fluid',
      color:'#C481F3',
      preview:`<div class="button--fluid"><button><span>Button</span></button></div>`,
      code:{
        html:
`<div class="button--fluid">
    <button>
        <span>Button</span>
    </button>
</div>`,
        css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.button--fluid{
    --bg-color: #C481F3;
    --color: #FFF;
    display: inline-block;
    position: relative;
    cursor: pointer;
    border-radius: 500px;
    z-index: 1;
    transform: translateZ(0px);
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black)
}
.button--fluid button{
    all: unset;
    padding: 20px 50px;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 20px;
    border: solid 1px var(--color);
    border-radius: inherit;
    color: var(--color);
    -webkit-text-fill-color: var(--color);
    transition: color, background-color,-webkit-text-fill-color,border-width, 0.15s ease-in-out;
}
.button--fluid span{    
    mix-blend-mode: difference;
}
.button--fluid::after,
.button--fluid::before{
    --deg: 0deg;
    --duration: 9s;
    content: "";
    width: 400%;
    padding-bottom: 400%;
    position: absolute;
    top: 200%;
    background: radial-gradient(#FFF, #FFF, transparent);
    left: -150%;
    z-index: -2;
    animation: button--fluid var(--duration) linear infinite;
    transition: top 3s ease-out;
    border-radius: 45%;
}
.button--fluid::before{
    border-radius: 40%;
    animation-duration: calc(var(--duration) - 1s);
    z-index: -1;
}
.button--fluid:hover::after,
.button--fluid:hover::before{
    top: -20%;
}
@keyframes button--fluid{
    0% { 
        transform: rotate(var(--deg));
        border-radius: 30%;
    }
    50%{
        border-radius: 45%;
    }
    100% { 
        transform: rotate(calc(var(--deg) + 720deg)); 
        border-radius: 30%; 
    }
}`
      }
    },
    {
        name:'button--gradient',
        color:'#15A3E4',
        preview:`<button class="button--gradient">Button</button>`,
        code:{
            html:`<button class="button--gradient">Button</button>`,
            css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.button--gradient{
    --bg-color1: #E9748F;
    --bg-color2: #15A3E4;
    --color: #FFF;
    all: unset;
    padding: 20px 50px;
    position: relative;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 20px;
    border: solid 1px var(--color);
    border-radius: 500px;
    color: var(--color);
    background:linear-gradient(45deg, var(--bg-color1), var(--bg-color2));
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
    -webkit-text-fill-color: var(--color);
    cursor: pointer;
    z-index: 1;
}
.button--gradient::after,
.button--gradient::before {
    --max-opacity: 1;
    content:"";
    background:linear-gradient(45deg, var(--bg-color2),var(--bg-color1));
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    opacity: 0;
    z-index: -2;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
    transition: opacity 5s ease-in-out;

}
.button--gradient::before {
    --max-opacity: 0.3;
    background:linear-gradient(45deg, var(--bg-color2),var(--bg-color1),var(--bg-color1),var(--bg-color2));
}
.button--gradient:not(:active):hover::after{
    animation: button--gradient 5s ease-in-out infinite;
}
.button--gradient:not(:active):hover::before{
    animation: button--gradient 2.5s ease-in-out infinite 1.666s;
    z-index: -1
}
@keyframes button--gradient{
    0%, 100%{
        opacity: 0;
    }
    50%{
        opacity: var(--max-opacity);
    }
}`
        }
    },
    {
      name:'button--click-particles',
      color:'#0E73C5',
      preview:`<div class="button--particles" style="--max-particles:8;"><div class="particle" style="--counter:0"></div><div class="particle" style="--counter:1"></div><div class="particle" style="--counter:2"></div><div class="particle" style="--counter:3"></div><div class="particle" style="--counter:4"></div><div class="particle" style="--counter:5"></div><div class="particle" style="--counter:6"></div><div class="particle" style="--counter:7"></div><button>Click Me</button></div>`,
      code:{
        html:
`<div class="button--particles" style="--max-particles:8;">
    <div class="particle" style="--counter:0"></div>
    <div class="particle" style="--counter:1"></div>
    <div class="particle" style="--counter:2"></div>
    <div class="particle" style="--counter:3"></div>
    <div class="particle" style="--counter:4"></div>
    <div class="particle" style="--counter:5"></div>
    <div class="particle" style="--counter:6"></div>
    <div class="particle" style="--counter:7"></div>
    <button>Click Me</button>
</div>`,
        css:
`.button--particles{
  --diameter: 150px;
  --color: #fff;
  --alt-color: #0E73C5;
  position: relative;
  border: solid var(--color) 2px;
  height: var(--diameter);
  width: var(--diameter);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;;
  font-size: 25px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  transform: box-shadow 0.15s ease-in-out;
  letter-spacing: 1px;
}
.button--particles button {
  all: unset;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color);
  -webkit-text-fill-color: var(--color);
  transform: rotate(0deg);
  transition: color 0.15s ease-in-out;
}
.button--particles button:hover{
  color: var(--alt-color);
  -webkit-text-fill-color: var(--alt-color);
}
.button--particles.active button{
  transform: rotate(360deg);
  transition: transform 0.25s ease-in-out;
}
.button--particles button::after {
  content: "";
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  background-color: var(--color);
  opacity: 0;
  z-index: -1;
  transition: width, height,opacity,left, top, 0.15s ease-in-out;
  box-shadow: inset 0 0 10px rgba(255,255,255,0.3); 
  left: 50%;
  top: 50%;
}
.button--particles button:hover::after{
  width: 100%;
  height: 100%;
  opacity: 1;
  left: 0;
  top: 0;
}
.button--particles button:active::after{
  box-shadow: inset 0 0 15px rgba(0,0,0,0.4); 
}
.button--particles .particle{
  --width: 10px;
  --deg: calc(360deg / var(--max-particles) * var(--counter));
  position: absolute;
  height: 50%;
  bottom: 50%;
  transform-origin: bottom;
  width: var(--width);
  left: calc(50% - var(--width) / 2);
  transform: rotate(var(--deg));
}
.button--particles .particle::after{
  content: "";
  --height: 25px;
  background-color: var(--color);
  height: 0;
  bottom: 100%;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: var(--width);
}
.button--particles.active .particle::after{
  animation: button__particle ease-in-out 0.25s;
}
@keyframes button__particle{
  0%{
    bottom: 100%;
    height: 0;
    opacity: 1;
  }
  50%{
    height: var(--height);
    opacity: 0.75;
  }
  100%{
    bottom: calc(130% + var(--height));
    height: 0;
    opacity: 0;
  }
}`,
        js:
`[...document.getElementsByClassName("button--particles")]
  .forEach((button)=>{
    button.addEventListener("click",()=>{
      button.classList.add("active");
      setTimeout(()=>{
        button.classList.remove("active");
      }, 250);
    })
  });`
      }
    }
    ]

}