<template>
  <div id="app" :class="{'main-content':true,'browse':browse}">
        <div :class="{'browse-toggle--bars':true,'active':browse}" @click="browse=!browse" id="browse-toggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <router-view v-show="!browse"/>
        <nav class="center-panel" ref="center-panel" style="--current-panel:0;" v-show="browse">
              <router-link v-for="(slide, i) in navSlides" 
              class="content-panel"
              :key="i" 
              :data-counter="i" 
              :style="{'--bg-color':slide.color}"
              :to="slide.to">
                <h2 class="main-text">{{slide.text}}</h2>
              </router-link>
        </nav>
        <router-link v-if="hasNext" :to="nextSlide.to" class="nextSlideLink">
            <span v-if="innerWidth>768">{{nextSlide.title}}</span> &gt;&gt;
        </router-link>
        <router-link v-if="hasPrev" :to="prevSlide.to" class="prevSlideLink">
            &lt;&lt; <span v-if="innerWidth>768">{{prevSlide.title}}</span>
        </router-link>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        browse:false,
        scrollTop:0,
        maxHeight:window.innerHeight,
      }
    },
    computed:{
        navSlides(){
            return this.$store.state.navSlides;
        },
        currentSlideIndex(){
            return this.navSlides.findIndex((slide)=>slide.to==this.$route.path);
        },
        hasNext(){
            return this.currentSlideIndex < this.navSlides.length - 1;
        },
        hasPrev(){
            return this.currentSlideIndex > 0;
        },
        nextSlide(){
            if(this.hasNext){
                return this.navSlides[this.currentSlideIndex+1];
            }else{
                return null;
            }
        },
        prevSlide(){
            if(this.hasPrev){
                return this.navSlides[this.currentSlideIndex-1];
            }else{
                return null;
            }
        },
        innerWidth(){
            return window.innerWidth;
        }
    },
    mounted(){
      const panels = [...document.getElementsByClassName("content-panel")];
      const app = document.getElementById("app");
      app.style.setProperty("--vh",(window.innerHeight/100)+"px");
      window.addEventListener("resize",()=>{
        app.style.setProperty("--vh",(window.innerHeight/100)+"px");
      });
      window.addEventListener("wheel",(event)=>{
          if(this.browse){
              this.scrollTop+=event.deltaY;
              this.scrollTop = (this.scrollTop < 0 ) ? 0 : this.scrollTop;
              this.scrollTop = (this.scrollTop > this.maxHeight ) ? this.maxHeight : this.scrollTop;
              this.updatePanels(panels);
          }
      })
      panels.forEach((panel)=>{
            panel.style.setProperty("--counter", panel.dataset.counter);
            panel.addEventListener("click",()=>{
                this.browse = false
                console.log(centerPanel)
                console.log(this.$refs);
                const centerPanel = this.$refs["center-panel"];
                const currentPanel = panel.dataset.counter;
                centerPanel.style.setProperty("--current-panel",currentPanel);
                centerPanel.style.setProperty("--current-panel-float",currentPanel);
                centerPanel.style.setProperty("--max-slides",panels.length);
                document.getElementById("browse-toggle").classList.remove("active");
            })
      })
      this.updatePanels(panels);
    },
    methods:{
        updatePanels(panels){
            const centerPanel = this.$refs["center-panel"];
            const panelArea = this.maxHeight/(panels.length-1);
            const currentPanelFloat = Math.min(this.scrollTop/panelArea, panels.length-1);
            const currentPanel = Math.round(currentPanelFloat);
            centerPanel.style.setProperty("--current-panel",currentPanel);
            centerPanel.style.setProperty("--current-panel-float",currentPanelFloat);
            centerPanel.style.setProperty("--max-panels",panels.length);
        }
    }
  }
</script>
<style type="text/css" src="@/styles/general.css"></style>
<style lang="scss">
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.browse-toggle--bars{
    --width: 3em;
    width: var(--width);
    height: calc(var(--width) * 0.9);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: absolute;
    font-size: 12px;
    top: 2em;
    left: min(2em, 2.5%);
    z-index: 100;
}
.browse-toggle--bars div{
    background-color: #FFF;
    width: 100%;
    height: calc(var(--width) / 5);
    position: relative;
    transition: top, transform, opacity, 0.3s ease-in-out;
    top: 0;
    opacity: 1;
    box-shadow: 0 0 1em rgba(0,0,0,0.1);
}
.browse-toggle--bars.active div{
    opacity: 0;
}
.browse-toggle--bars.active div:first-child{
    transform: rotate(135deg);
    top: calc(var(--width) / 2.857);
    opacity: 1; 
}
.browse-toggle--bars.active div:last-child{
    transform: rotate(-135deg);
    top:  calc(var(--width) / -2.857);
    opacity: 1;
}
.main-content.browse{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
}
.main-content.browse .center-panel{
    height: 70%;
    width: 95%;
    position: relative;
}

.main-content.browse .center-panel .main-text{
    text-align: center;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;;
    font-size: 5vw;
    font-weight: 400;
    letter-spacing: 2px;
    text-decoration: none;
    color: #333;
}
.main-content.browse .content-panel:first-child .main-text{
    color: #FFF;
    text-transform: unset;
    font-family: 'Lato', sans-serif;
    font-weight: 200;
    text-shadow: 0 0 10px rgba(255,255,255,0.5);
}
.main-content.browse .content-panel{
    --offset: calc(min(var(--counter) - var(--current-panel), var(--current-panel) - var(--counter)) + var(--max-panels));
    --offset-float: calc(min(var(--counter) - var(--current-panel-float), var(--current-panel-float) - var(--counter)) + var(--max-panels));
    --width-gradient: 1;
    --width: calc(100% * (var(--offset-float) + var(--width-gradient))  / (var(--max-panels) + var(--width-gradient)));
    z-index: var(--offset);
    opacity: var(--opacity, 1);
    position: absolute;
    top: calc(10% * (var(--counter) - var(--current-panel)));
    width: var(--width);
    left: calc((100% - var(--width)) / 2);
    height: 100%;
    background-color: var(--bg-color);
    box-shadow: 0 calc(10px * (var(--counter) - var(--current-panel-float))) 30px rgba(0,0,0,0.5),
         0 calc(50px * (var(--counter) - var(--current-panel-float))) 30px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
.main-content.browse .content-panel{       
    top: calc(10% * (var(--counter) - var(--current-panel-float)));
    cursor: pointer;
}
.main-content .nextSlideLink,
.main-content .prevSlideLink{
    position: absolute;
    color: #FFF;
    bottom: 1em;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5em;
    text-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.main-content.browse .nextSlideLink,
.main-content.browse .prevSlideLink{
    display: none;
}
.main-content .nextSlideLink{
    right: min(5%, 2em);
    text-align: right;
}
.main-content .prevSlideLink{
    left: min(5%, 2em);
    text-align: left;
}
.nextSlideLink span,
.prevSlideLink span{
    display: none;
}
@media screen and (min-width: 768px){
    .nextSlideLink span,
    .prevSlideLink span{
        display: inline;
    }
}
</style>

