export default {
    data:[{
        name:"spinner--merge",
        color:"#6B012A",
        preview:`<div class="spinner--merge"><span style="--counter:0"></span><span style="--counter:1"></span><span style="--counter:2"></span><span style="--counter:3"></span></div>`,
        code:{
           html:
`<div class="spinner--merge">
    <span style="--counter:0"></span>
    <span style="--counter:1"></span>
    <span style="--counter:2"></span>
    <span style="--counter:3"></span>
</div>`,
            css:
`.spinner--merge{
    position: relative;
    width: 120px;
    height: 120px;
    animation: spin-merge;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
    animation-delay: 2s;
}
.spinner--merge span{
    --width: 30px;
    --height: 30px;
    display: block;
    width: var(--width);
    height: var(--height);
    top: 0;
    left: 0;
    background-color: #FFF;
    position: absolute;
    animation: spin-merge__ball;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
    animation-delay: calc(var(--counter) * 0.5s);
    border-radius: 50%;
}
@keyframes spin-merge{
    0%,100%{
        width: 120px;
        height: 120px;
    }
    50%{
        width: 30px;
        height: 30px;
    }
}
@keyframes spin-merge__ball{
    0%,100% {
        top: 0;
        left: 0;
    }
    25% {
        top: 0;
        left: calc(100% - var(--width));
    }
    50% {
        top: calc(100% - var(--height));
        left: calc(100% - var(--width));
    }
    75% {
        top: calc(100% - var(--height));
        left: 0;
    }
}`,
        }
    },
    {
        name:"spinner--line-jump",
        color:"#082C7D",
        preview:`<div class="spinner--line-jump"><span class="dot" style="--count:0"></span><span class="dot" style="--count:1"></span><span class="dot" style="--count:2"></span><span class="dot" style="--count:3"></span></div>`,
        code:{
           html:
`<div class="spinner--line-jump">
    <span class="dot" style="--count:0"></span>
    <span class="dot" style="--count:1"></span>
    <span class="dot" style="--count:2"></span>
    <span class="dot" style="--count:3"></span>
</div>`,
            css:
`.spinner--line-jump {
     position: relative;
     width: 150px;
     height: 50px;
}
.spinner--line-jump .dot {
     position: absolute;
     left: calc(var(--count) * 50px);
     top: 50%;
     width: 30px;
     height: 30px;
     border-radius: 50%;
     background-color: #fff;
     margin: 0 auto;
     animation-duration: 2s;
     animation-iteration-count: infinite;
     animation-timing-function: ease-in-out;
     animation-delay: calc(var(--count) * (1s / 2));
     animation-name: spinner--line-jump-animation;
}
@keyframes spinner--line-jump-animation {
     0% {
         top: 50%;
    }
     12.5% {
         top: 0px;
    }
     25% {
         top: 50%;
    }
}`,
        }
    },
    {
        color:"#540179",
        preview:`<div class="spinner--unfolding-rect"><span></span><span></span><span></span><span></span><span class="flipper"></span></div>`,
        code:{
            html:
`<div class="spinner--unfolding-rect">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span class="flipper"></span>
</div>`,
            css: 
`.spinner--unfolding-rect{
    position: relative;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: space-between;
}
.spinner--unfolding-rect span{
    --width: 10px;
    --height: 30px;
    display: block;
    width: var(--width);
    height: var(--height);
    background-color: transparent;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 3.5s;
}
.spinner--unfolding-rect span:nth-child(1){ 
    background-color: #FFF;
}
.spinner--unfolding-rect span:nth-child(2){ 
    animation-name: spin-unfolding__rect2;
}
.spinner--unfolding-rect span:nth-child(3){ 
    animation-name: spin-unfolding__rect3;
}
.spinner--unfolding-rect .flipper{
    animation-name: spin-unfolding__flip;
    animation-delay: 0s;
    background-color: #FFF;
    position: absolute;
    left: 0;
    top: 0;
}
@keyframes spin-unfolding__rect2{
    10%, 67%{
        background-color: transparent;
    }
    15%, 64% {
        background-color: #FFF;
    }
}
@keyframes spin-unfolding__rect3{
    21%, 55%{
        background-color: transparent;
    }
    26%, 52% {
        background-color: #FFF;
    }
}
@keyframes spin-unfolding__flip{
    0%,85%, 100%{
        transform: rotateY(0deg);
        left: 0;
        animation-timing-function: linear;
    }
    35%{
        left: calc(100% - var(--width));
        transform: rotateY(720deg);
    }
}`
        } 
    },
    {
        color:"#333",
        preview:`<div class="spinner--fade"><span style="--counter:0"></span><span style="--counter:1"></span><span style="--counter:2"></span><span style="--counter:3"></span><span style="--counter:4"></span><span style="--counter:5"></span><span style="--counter:6"></span></div>`,
        code:{
            html:
`<div class="spinner--fade">
    <span style="--counter:0"></span>
    <span style="--counter:1"></span>
    <span style="--counter:2"></span>
    <span style="--counter:3"></span>
    <span style="--counter:4"></span>
    <span style="--counter:5"></span>
    <span style="--counter:6"></span>
</div>`,
            css:
`.spinner--fade{
    position: relative;
    width: 80px;
    height: 80px;
    animation: spin-fade;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 3s;
}
.spinner--fade span{
    position: absolute;
    width: 10px;
    height: inherit;
    animation: spin-fade;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 2s;
    animation-delay: calc(var(--counter) * 0.285s);
    display: block;
    left: calc(50% - 5px);
    top: 0;
}
.spinner--fade span::after{
    content: "";
    --width: 10px;
    --height: 10px;
    display: block;
    width: var(--width);
    height: var(--height);
    left: calc(50% - var(--width) / 2);
    animation: spin-fade__ball;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 4s;
    animation-delay: calc(var(--counter) * 0.285s);
    top: 0;
    background-color: #FFF;
    position: absolute;
    border-radius: 50%;
    opacity: 0;
}
@keyframes spin-fade{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
@keyframes spin-fade__ball{
    0%,60%{
        width: var(--width);
        height: var(--height);
        opacity: 0;
    }
    30% {
        width: calc(2 *  var(--width));
        height: calc(2 *  var(--height));
        opacity: 1;
    }
}`
        }
    },
    {
        color:"#8E4E00",
        preview:``,
        code:{

        }
    },
    {
        color:"#05677D",
        preview:``,
        code:{

        }
    },
    {
        color:"#166D20",
        preview:``,
        code:{

        }
    }]
}