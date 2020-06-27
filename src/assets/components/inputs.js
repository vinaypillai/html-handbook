export default {
    data:[
        {
            name:"input--expand",
            color:"#CF3602",
            preview:`<input type="text" class="input--expand" placeholder="Search">`,
            code:{
                html:`<input type="text" class="input--expand" placeholder="Search">`, 
                css:
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.input--expand{
    all: unset;
    background-color: #FFF;
    opacity: 0.8;
    border-radius: 500px;
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    padding: 1em;
    font-family: "Lato", sans-serif;
    transition: opacity 0.15s ease-in-out;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    min-width: 200px;
    width: 200px;
    max-width: min(90vw, 90%);
}
.input--expand:focus{
    opacity: 1;
}`,
                js:
`const latoAvgCharWidth = 0.51;
[...document.getElementsByClassName("input--expand")].forEach((input)=>{
    input.addEventListener("input", ()=>{
        const fontSize = parseFloat(window.getComputedStyle(input).fontSize.slice(0,-2));
        input.style.width = input.value.length * latoAvgCharWidth * fontSize + "px";
    })
});`
            }
        },
        {
            name:"input--checkbox",
            color: "#D36024",
            preview: `<input type="checkbox" class="input--checkbox">`,
            code:{
                html:`<input type="checkbox" class="input--checkbox">`,
                css:
`.input--checkbox{
    all: unset;
    background-color: #D36024;
    display: block;
    width: 3em;
    height: 3em;
    border-radius: 0.5em;
    position: relative;
    cursor: pointer;
    border: 0.2em solid #fff;
    font-size: 25px;
    transition: background-color 0.15s ease-in-out;
    font-size: 15px;
}
.input--checkbox::before{
    position: absolute;
    content:"";
    background-color: #D36024;
    top: 5%;
    left: 5%;
    height: 0;
    border-radius: 0.2em;
    width: 0.4em;
    display: block;
    transform: rotate(-45deg);
    transition-property: height,top,left;
    transition-duration: 0.075s;
    transition-timing-function:  ease-in-out;
    transition-delay: 0.1s;
}
.input--checkbox:checked::before{
    height: 3.5em;
    left: 44%;
    top: -9%;
}
.input--checkbox::after{
    position: absolute;
    content:"";
    background-color: #D36024;
    top: 5%;
    right: 5%;
    height: 0;
    border-radius: 0.2em;
    width: 0.4em;
    display: block;
    transform: rotate(45deg);
    transition-property: height,top,right;
    transition-duration: 0.075s;
    transition-timing-function:  ease-in-out;
    transition-delay: 0.3s;
}
.input--checkbox:checked::after{
    height: 3.5em;
    right: 44%;
    top: -9%;
}
.input--checkbox:checked{
    background-color: #fff;
}`
            }
        },
        {
            name:"input--radio-button",
            dark: true,
            color: "#6BFBCE",
            preview: `<input class="radio-button" type="radio" name="radio-button"><input class="radio-button" type="radio" name="radio-button"><input class="radio-button" type="radio" name="radio-button">`,
            code:{
                html:
`<input class="radio-button" type="radio" name="radio-button">
<input class="radio-button" type="radio" name="radio-button">
<input class="radio-button" type="radio" name="radio-button">`,
                css:
`.radio-button{
    all: unset;
    position: relative;
    height: 5em;
    width: 5em;
    display: inline-block;
    background-color: #222;
    border-radius: 2.5em;
    cursor: pointer;
    margin: 0 5px;
    font-size: 10px;
}
.radio-button::before{
    content: "";
    position: absolute;
    background-color: #6BFBCE;
    left: 50%;
    top: 50%;
    height: 4.75em;
    width: 4.75em;
    border-radius: 2.375em;
    transform: translate(-50%,-50%);
    transition-property: height,width;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
}
.radio-button:checked::before{
    height: 2em;
    width: 2em;
}`
            }
        }
    ]
}