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
        preview:``,
        code:{

        } 
    },
    {
        color:"#333",
        preview:``,
        code:{

        }
    }]
}