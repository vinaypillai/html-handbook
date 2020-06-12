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
        name:"button--swipe-down-profile",
        color:"#21695D",
        preview:`<button class="button--swipe-down-profile">Button</button>`,
        code:{
            html:
`<button class="button--swipe-down-profile">Button</button>`,
            css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.button--swipe-down-profile {
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
.button--swipe-down-profile:hover {
    cursor: pointer;
    color: #21695D;
    --font-color: #21695D;
    transition: background-color 0s ease-in-out 0.2s;
    background-color: #fff;
}
.button--swipe-down-profile::before {
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
.button--swipe-down-profile:hover::before {
    height: 75px;
}`
        }
    },
    {
        name:'',
        color:'#222',
        preview:`<button class="button--jumping-color-change-profile">Jump!</button>`,
        code:{
            html:
`<button class="button--jumping-color-change-profile">Jump!</button>`,

            css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap');
.button--jumping-color-change-profile {
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
}

.button--jumping-color-change-profile:hover {
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
`[...document.getElementsByClassName("button--jumping-color-change-profile")]
.forEach(button => {
    button.addEventListener("click", function() {
      button.style.animation = "button--pill-jumping 2s 1 ease-in-out";
      setTimeout(function() {
        button.style.animation = "none";
      }, 2000);
    });
});`

        }
    }]
}