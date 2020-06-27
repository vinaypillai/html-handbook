<template>
  <div class="spinners">
    <carousel>
        <carousel-slide :style="{'--slide-color':currentSlide.color}" class="title-slide dark">
          <inline-svg :src="require('@/assets/section-titles/spinners.svg')"
          @loaded="updateSVGPaths()" ref="sectionTitle"></inline-svg>
        </carousel-slide>
        <component-presentation 
        v-for="spinner in spinners" 
        :key="spinner.name"
        :color="spinner.color"
        :id="'view-'+spinner.name">
            <template v-slot:preview>
                <div v-html="spinner.preview"></div>
            </template>
            <template v-slot:html v-if="spinner.code.html!=null"><code-block :content="spinner.code.html"></code-block></template>
            <template v-slot:css v-if="spinner.code.css!=null"><code-block :content="spinner.code.css" language="css"></code-block></template>
            <template v-slot:js v-if="spinner.code.js!=null"><code-block :content="spinner.code.js" language="javascript"></code-block></template>
        </component-presentation>
    </carousel>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import codeBlock from "@/components/code-block";
import carouselSlide from "@/components/carousel-slide";
import componentPresentation from "@/components/component-presentation";
import spinners from "@/assets/components/spinners"
export default {
  name: 'Spinners',
  data(){
    return {
        "spinners":spinners.data
    }
  },
  methods:{
    updateSVGPaths(){
      [...this.$refs['sectionTitle'].$el.getElementsByTagName("path")].forEach((path)=>{
        path.style.setProperty("--dash",path.getTotalLength());
      })
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
  }
}
</script>
<style type="text/css" src="@/styles/spinners.css"></style>