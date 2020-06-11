<template>
    <div :class="{'carousel-slide':true,'active':idx==currentSlide}" :style="{'--index':index, '--currentSlide':currentSlide}"><slot></slot></div>
</template>
<script>
    export default {
        "name":"carousel-slide",
        props:{
            idx:{
                type:Number,
                default:0,
                currentSlide:0,
            }
        },
        data(){
            return {
                index:0,
            }
        },
        computed:{
            currentSlide(){
                return this.$parent.$vnode.componentInstance.currentSlide;
            }
        },
        watch:{
            idx:{
                immediate:true,
                handler(idx){
                    this.index = idx;
                }
            },

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