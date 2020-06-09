<template>
    <div class="carousel-slide" :style="{'--index':index, '--currentSlide':currentSlide}"><slot></slot></div>
</template>
<script>
    export default {
        "name":"carousel-slide",
        props:{

        },
        data(){
            return {
                index:0,
            }
        },
        mounted(){
        },
        computed:{
            currentSlide(){
                return this.$parent.$vnode.componentInstance.currentSlide;
            }
        }
    }
</script>
<style lang="scss" scoped="">
    .carousel-slide{
        width: 100%;
        height: 100%;
        position: absolute;
        left: calc(100vw * ( var(--index) - var(--currentSlide) )) ;
        top: 0;
        transition: left 0.3s ease-in-out;
    }
</style>