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
    color: #333;
    font-weight: 300;
    text-align: left;
    padding: 1em;
    font-family: "Lato", sans-serif;
    transition: opacity 0.15s ease-in-out;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    min-width: 200px;
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
    ]
}