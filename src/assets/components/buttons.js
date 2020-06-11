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
      },
    },
    {
      color:"#21695D",
      preview:``,
      code:{},
    },]

}