<template>
  <div class="home">
    <carousel>
        <carousel-slide>
            <div class="component-slide" style="--bg-color:#6B012A">
                <div class="spinner--merge">
                    <span style="--counter:0"></span>
                    <span style="--counter:1"></span>
                    <span style="--counter:2"></span>
                    <span style="--counter:3"></span>
                </div>
            </div>
        </carousel-slide>
        <carousel-slide>
            <div class="component-slide" style="--bg-color:#082C7D">
                
            </div>
        </carousel-slide>
        <carousel-slide>
            <div class="component-slide" style="--bg-color:#540179">
                
            </div>
        </carousel-slide>
        <carousel-slide>
            <div class="component-slide" style="--bg-color:#333">
                
            </div>
        </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import carouselSlide from "@/components/carousel-slide";
export default {
  name: 'Home',
  components: {
    carousel,
    carouselSlide
  }
}
</script>
<style lang="scss" scoped>
    .component-slide{
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<style type="text/css" src="@/styles/spinner-merge.css"></style>