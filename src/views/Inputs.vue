<template>
  <div class="inputs">
    <carousel>
        <carousel-slide :style="{'--slide-color':currentSlide.color}" class="title-slide dark">
          <inline-svg :src="require('@/assets/section-titles/inputs.svg')"></inline-svg>
        </carousel-slide>
        <component-presentation 
        v-for="input in inputs" 
        :key="input.name"
        :color="input.color"
        :class="{'dark':input.dark}"
        :id="'view-'+input.name">
            <template v-slot:preview>
                <div v-html="input.preview"></div>
            </template>
            <template v-slot:html v-if="input.code.html!=null"><code-block :content="input.code.html"></code-block></template>
            <template v-slot:css v-if="input.code.css!=null"><code-block :content="input.code.css" language="css"></code-block></template>
            <template v-slot:js v-if="input.code.js!=null"><code-block :content="input.code.js" language="javascript"></code-block></template>
        </component-presentation>
    </carousel>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import carouselSlide from "@/components/carousel-slide";
import codeBlock from "@/components/code-block";
import componentPresentation from "@/components/component-presentation";
import inputs from "@/assets/components/inputs"
export default {
  name: 'inputs',
  data(){
    return {
        "inputs":inputs.data
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
    const latoAvgCharWidth = 0.51;
    [...document.getElementsByClassName("input--expand")].forEach((input)=>{
        input.addEventListener("input", ()=>{
            const fontSize = parseFloat(window.getComputedStyle(input).fontSize.slice(0,-2));
            input.style.width = input.value.length * latoAvgCharWidth * fontSize + "px";
        })
    });
  }   
}
</script>
<style type="text/css" src="@/styles/inputs.css"></style>
<style type="text/css" src="@/styles/general.css"></style>