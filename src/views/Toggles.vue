<template>
  <div class="toggles">
    <carousel>
        <carousel-slide :style="{'--slide-color':currentSlide.color}" class="title-slide dark">
          <inline-svg :src="require('@/assets/section-titles/toggles.svg')"></inline-svg>
        </carousel-slide>
        <component-presentation 
        v-for="toggle in toggles" 
        :key="toggle.name"
        :color="toggle.color"
        :class="{'dark':toggle.dark}"
        :id="'view-'+toggle.name">
            <template v-slot:preview>
                <div v-html="toggle.preview"></div>
            </template>
            <template v-slot:html v-if="toggle.code.html!=null"><code-block :content="toggle.code.html"></code-block></template>
            <template v-slot:css v-if="toggle.code.css!=null"><code-block :content="toggle.code.css" language="css"></code-block></template>
            <template v-slot:js v-if="toggle.code.js!=null"><code-block :content="toggle.code.js" language="javascript"></code-block></template>
        </component-presentation>
    </carousel>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import carouselSlide from "@/components/carousel-slide";
import codeBlock from "@/components/code-block";
import componentPresentation from "@/components/component-presentation";
import toggles from "@/assets/components/toggles"
export default {
  name: 'toggles',
  data(){
    return {
        "toggles":toggles.data
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
    // Slide toggle js
    const toggle = document.getElementById("toggle--slide__switch");
    const viewSlidetoggle = document.getElementById("view-toggle--slide");
    toggle.addEventListener("click",function(){
        const componentSlide = viewSlidetoggle.getElementsByClassName("component-slide")[0];
        toggle.classList.toggle("on")
        if(toggle.classList.contains("on")){
            viewSlidetoggle.classList.add("dark");
            componentSlide.style.setProperty("--bg-color", componentSlide.style.getPropertyValue('--slide-color'));
        }else{  
            viewSlidetoggle.classList.remove("dark");
            componentSlide.style.setProperty("--bg-color","#333");
        }
    });

    //3d glowing toggle js
    [...document.getElementsByClassName("toggle--glowing-3d__button")].forEach((button)=>{
        button.addEventListener("click",()=>{
            button.classList.toggle("active");
        });
    });
    // Toggle mobile js
    [...document.getElementsByClassName("toggle--mobile")].forEach((toggle)=>{
        toggle.addEventListener("click",()=>{
            toggle.classList.toggle("active"); 
        });
    });
    // Toggle bars js
    [...document.getElementsByClassName("toggle--bars")].forEach((toggle)=>{
        toggle.addEventListener("click",()=>{
            toggle.classList.toggle("active");
        });
    });
    // Toggle play js
    [...document.getElementsByClassName("toggle--play")].forEach((toggle)=>{
        toggle.addEventListener("click", ()=>{
            toggle.classList.toggle("paused");
        });
    });
  }
}
</script>
<style type="text/css" src="@/styles/toggles.css"></style>
<style type="text/css" src="@/styles/general.css"></style>