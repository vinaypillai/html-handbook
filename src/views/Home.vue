<template>
  <div class="home">
    <carousel>
        <component-presentation color="#6B012A">
            <template v-slot:preview>    
                <div class="spinner--merge">
                    <span style="--counter:0"></span>
                    <span style="--counter:1"></span>
                    <span style="--counter:2"></span>
                    <span style="--counter:3"></span>
                </div>
            </template>
            <template v-slot:html>
                <code-block content='<div class="spinner--merge">
    <span style="--counter:0"></span>
    <span style="--counter:1"></span>
    <span style="--counter:2"></span>
    <span style="--counter:3"></span>
</div>' language="markup"></code-block>
            </template>
            <template v-slot:css>
                <code-block content='.spinner--merge{
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
}' language="css"></code-block>
            </template>
        </component-presentation>
        <component-presentation color="#082C7D">
            <template v-slot:preview>
                <div class = "spinner--line-jump">
                    <span class = "dot" style = "--count:0"></span>
                    <span class = "dot" style = "--count:1"></span>
                    <span class = "dot" style = "--count:2"></span>
                    <span class = "dot" style = "--count:3"></span>
                </div>
            </template>

            <template v-slot:html>
                <code-block language="markup" content = '<div class="spinner--line-jump">
    <span class="dot" style="--count:0"></span>
    <span class="dot" style="--count:1"></span>
    <span class="dot" style="--count:2"></span>
    <span class="dot" style="--count:3"></span>
</div>'></code-block>
            </template>

            <template v-slot:css>
                <code-block language="css" content = '.spinner--line-jump
{
    position: relative;
    width: 150px;
    height: 50px;
}

.spinner--line-jump .dot
{
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

@keyframes spinner--line-jump-animation
{
    0%
    {
        top: 50%;
    }

    12.5%
    {
        top: 0px;
    }

    25%
    {
        top: 50%;
    }

}'></code-block>
            </template>
        </component-presentation>
        <component-presentation color="#540179"></component-presentation>
        <component-presentation  color="#333"></component-presentation>
    </carousel>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import codeBlock from "@/components/code-block";
import componentPresentation from "@/components/component-presentation";
export default {
  name: 'Home',
  components: {
    carousel,
    codeBlock,
    componentPresentation
  }
}
</script>
<style type="text/css" src="@/styles/spinner--merge.css"></style>
<style type="text/css" src="@/styles/spinner--line-jump.css"></style>