<template>
    <div class="carousel" :style="{'--currentSlide':currentSlide}" ref="carousel">
        <slot></slot>
        <div class="carousel-button-wrapper">
            <span
            v-for="(slide, i) in slides"
            :key="i"
            @click="currentSlide=i"
            :class="{'active':currentSlide==i}"></span>
        </div>
        <div class="carousel-left-arrow" v-if="hasPrevSlide" @click="prevSlide()"></div>
        <div class="carousel-right-arrow" v-if="hasNextSlide" @click="nextSlide()"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                currentSlide:0,
                componentLoaded:false,
                touchStartX:0,
                minTouchDistance: 100

            }
        },
        methods:{
            nextSlide(){
                if(this.hasNextSlide){
                    this.currentSlide++;
                }
            },
            prevSlide(){
                if(this.hasPrevSlide){
                    this.currentSlide--;
                }
            },
        },
        computed:{
            slides(){
                if(this.componentLoaded){     
                    return this.$slots.default.filter((node)=>{
                        return node.elm && node.elm.classList.contains("carousel-slide");
                    });
                }else{
                    return [];
                }
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
        },
        async mounted(){
            this.componentLoaded = false;
            await this.$nextTick();
            this.componentLoaded = true;
            this.$refs.carousel.addEventListener("touchstart",(event)=>{
                this.touchStartX =  event.changedTouches[0].clientX;
            })
            this.$refs.carousel.addEventListener("touchend",(event)=>{
                const touchEndX = event.changedTouches[0].clientX;
                if(Math.abs(touchEndX-this.touchStartX) > this.minTouchDistance){
                    if(touchEndX< this.touchStartX){
                        this.nextSlide();
                    }else{
                        this.prevSlide();
                    }
                }
            })
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