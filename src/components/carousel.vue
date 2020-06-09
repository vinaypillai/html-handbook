<template>
    <div class="carousel" :style="{'--current':currentSlide}">
        <slot></slot>
        <div class="carousel-button-wrapper">
            <span
            v-for="(slide, i) in slides"
            :key="i"
            @click="currentSlide=i"
            :class="{'active':currentSlide==i}"></span>
        </div>
        <div class="carousel-left-arrow" v-if="hasPrevSlide" @click="currentSlide--"></div>
        <div class="carousel-right-arrow" v-if="hasNextSlide" @click="currentSlide++"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                currentSlide:0,
            }
        },
        computed:{
            slides(){
                return this.$slots.default.filter((node)=>{
                    return node.componentOptions && 
                        node.componentOptions.tag == "carousel-slide"
                });
            },
            hasNextSlide(){
                return this.currentSlide < this.slides.length - 1;
            },
            hasPrevSlide(){
                return this.currentSlide > 0;
            }
        },
        watch:{
            slides:{
                immediate:true,
                async handler(slides){
                    await this.$nextTick();
                    slides.forEach((node,i)=>{
                        if(node.componentInstance){
                            node.componentInstance._data.index=i;
                        }
                    })
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.carousel{
    --control-margin: 30px;
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    position: relative;
    .carousel-button-wrapper{
        display: flex;
        position: absolute;
        justify-content: center;
        bottom: var(--control-margin);
        width: 100%;
        text-align: center;
        z-index: 10;
        span{
            width: 10px;
            height: 10px;
            background-color: #FFF;
            box-shadow: 0 0 5px rgba(0,0,0,0.3);
            border-radius: 50%;
            margin: 0 10px;
            cursor: pointer;
            transition: opacity 0.15s ease-in-out;
            opacity: 0.5;
            &:hover,
            &.active{
                opacity:1;
            }
        }
    }
    .carousel-left-arrow,
    .carousel-right-arrow{
        --width: 20px;
        --border-width: 10px;
        background-color: transparent;
        width: var(--width);
        height: var(--width);
        border-top: solid var(--border-width) #FFF;
        border-left: solid var(--border-width) #FFF;
        position: absolute;
        top: calc(50% - var(--width) * 1.414 / 2);
        cursor: pointer;
        transition: opacity 0.15s ease-in-out;
        opacity: 0.5;
        &:hover{
            opacity:1;
        }
    }
    .carousel-left-arrow{
        transform: rotate(-45deg);
        left: var(--control-margin);
    }
    .carousel-right-arrow{
        transform: rotate(135deg);
        right: var(--control-margin);
    }
}
</style>