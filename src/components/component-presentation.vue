<template>
<carousel-slide  :idx="index">
    <div class="component-slide" :style="{'--bg-color':color,'--slide-color':color}">
        <nav class="slide-menu">
            <div v-for='option in visibleMenuOptions' 
            :key='option'
            @click="currentView=option" 
            :class="{'active':currentView==option}">{{option}}</div>
        </nav>
        <section class="content-wrapper" v-show="currentView=='preview'">
            <slot name="preview"></slot>
        </section>
        <section class="content-wrapper" v-show="currentView=='html'">
            <slot name="html"></slot>
        </section>
        <section class="content-wrapper" v-show="currentView=='css'">
            <slot name="css"></slot>
        </section>
        <section class="content-wrapper" v-show="currentView=='js'">
            <slot name="js"></slot>
        </section>
    </div>
</carousel-slide>
</template>
<script>
import carouselSlide from "@/components/carousel-slide";
export default {
    props:{
        "color":{
            type:String,
        }
    },
    components: {
        carouselSlide
    },
    data(){
        return{
            index:0,
            currentView:"preview",
            visibleViews:new Set(),
            menuOptions:['preview','html','css','js'],
            optionsReady:false
        }
    },
    computed:{
        visibleMenuOptions(){
            if(this.optionsReady){
                return this.menuOptions.filter(
                    (option)=>this.visibleViews.has(option)
                );
            }else{
                return [];
            }

        },
        currentSlide(){
            return this.$parent.$vnode.componentInstance.currentSlide;
        }
    },
    async mounted(){
        await this.$nextTick();
        Object.keys(this.$slots).forEach((key)=>{
            this.visibleViews.add(key);
        })
        this.optionsReady=true;
    }
}
</script>
<style lang="scss" scoped>
    .component-slide{
        --control-color: #FFF;
        .dark &{
            --control-color: #333;
        }
        width: 100%;
        height: 100%;
        transition: background-color, 0.15s ease-in-out;
        background-color: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .slide-menu{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            div{
                color: var(--control-color);
                text-transform: uppercase;
                text-align: center;
                padding: 20px min(40px, 5%);
                margin: 20px min(10px, 1.25%);
                cursor: pointer;
                transition: color,background-color, 0.15s ease-in-out;
                border-radius: 500px;
                &:hover,
                &:active,
                &.active{
                    background-color: var(--control-color);
                    color: var(--bg-color);
                }
            }
        }
        .content-wrapper{
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>