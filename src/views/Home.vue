<template>
  <div class="home">
    <carousel>
        <carousel-slide></carousel-slide>
        <carousel-slide></carousel-slide>
        <carousel-slide></carousel-slide>
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
