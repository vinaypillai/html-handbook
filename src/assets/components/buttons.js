export default {
    data:[
    {
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
    color: #FFF;
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
    box-shadow: 0 0 10px rgba(255,255,255,0.3);
}
.button--simple:active::after{
    top:0;
    bottom: 0;
}`
      },
    },
    {
      color:"#21695D",
      preview:`<button class="button--profile">Button</button>`,
      code:{
        html:
`<button class="button--profile">
      Button
    </button>`,

        css:
`
.button--profile {
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

.button--profile:hover {
  cursor: pointer;
  color: #21695D;
  --font-color: #21695D;
  transition: background-color 0s ease-in-out 0.2s;
  background-color: #fff;
}

.button--profile::before {
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

.button--profile:hover::before {
  height: 75px;
}`
      },
    },]

}