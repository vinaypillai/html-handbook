<template>
  <div class="buttons">
    <carousel>
        <carousel-slide :style="{'--slide-color':currentSlide.color}" class="title-slide dark">
          <inline-svg :src="require('@/assets/section-titles/buttons.svg')"></inline-svg>
        </carousel-slide>
        <component-presentation 
        v-for="button in buttons" 
        :key="button.name"
        :color="button.color"
        :class="{'dark':button.dark}"
        :id="'view-'+button.name">
            <template v-slot:preview>
                <div v-html="button.preview"></div>
            </template>
            <template v-slot:html v-if="button.code.html!=null"><code-block :content="button.code.html"></code-block></template>
            <template v-slot:css v-if="button.code.css!=null"><code-block :content="button.code.css" language="css"></code-block></template>
            <template v-slot:js v-if="button.code.js!=null"><code-block :content="button.code.js" language="javascript"></code-block></template>
        </component-presentation>
    </carousel>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import carouselSlide from "@/components/carousel-slide";
import codeBlock from "@/components/code-block";
import componentPresentation from "@/components/component-presentation";
import buttons from "@/assets/components/buttons"
export default {
  name: 'buttons',
  data(){
    return {
        "buttons":buttons.data
    }
  },
  components: {
    carousel,
    codeBlock,
    componentPresentation,
    carouselSlide
  },
  computed:{
    currentSlide(){
      const navSlides = this.$store.state.navSlides;
      const currentSlide = navSlides.find((slide)=>slide.to==this.$route.path);
      return currentSlide;
    }
  },
  mounted(){
    // Jumping Color Changing Button
    [...document.getElementsByClassName("button--jumping-color-change")]
    .forEach(button => {
      button.addEventListener("click", function() {
        button.style.animation = "button--pill-jumping 2s 1 ease-in-out";

        setTimeout(function() {
          button.style.animation = "none";
        }, 2000);
      });
    });
    // Button
    [...document.getElementsByClassName("button--particles")]
    .forEach((button)=>{
      button.addEventListener("click",()=>{
        button.classList.add("active");
        setTimeout(()=>{
          button.classList.remove("active");
        }, 250);
      });
    });

  }
}
</script>
<style type="text/css" src="@/styles/buttons.css"></style>

