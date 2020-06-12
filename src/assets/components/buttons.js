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
    }]
}