<template>
    <div class="carousel" :style="{'--current':currentSlide}">
        <slot></slot>
        <div class="carousel-button-wrapper">
            <span v-for="(slide, i) in slides" :key="i" @click="currentSlide=i"></span>
        </div>
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
            }
        },
        watch:{
            slides:{
                immediate:true,
                async handler(slides){
                    await this.$nextTick();
                    slides.forEach((node,i)=>{
                        if(node.componentInstance){
                            node.componentInstance.$el.dataset.index=i;
                        }
                    })
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.carousel{
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    position: relative;
    .carousel-button-wrapper{
        display: flex;
        position: absolute;
        justify-content: center;
        bottom: 30px;
        width: 100%;
        text-align: center;
        z-index: 10;
        span{
            width: 10px;
            height: 10px;
            background-color: #ff0000;
            border-radius: 50%;
            margin: 0 10px;
            cursor: pointer;
        }
    }
}
</style>