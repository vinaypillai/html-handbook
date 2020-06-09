<template>
    <div class="carousel-slide"></div>
</template>
<script>
    export default {
        "name":"carousel-slide",
        data(){
            return {

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
    }
</style>