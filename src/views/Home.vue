<template>
  <div class="home">
    <h1>
      <span>&lt;</span>
      <span class="title-words">html</span>
      <span class="expanded-logo-words title-words">-hand</span><span class="title-words">book/</span>
      <span>&gt;</span>
    </h1>
    <div class="browser-icon-container">
        <span class="browser-icon" style="--counter:0;"> 
            <font-awesome-icon :icon="['fab','chrome']" />
            <span class="browser-icon__version">83+</span>
        </span>
        <span class="browser-icon" style="--counter:1;"> 
            <font-awesome-icon :icon="['fab','firefox']" />
            <span class="browser-icon__version">77+</span>
        </span>
        <span class="browser-icon" style="--counter:2;"> 
            <font-awesome-icon :icon="['fab','safari']" />
            <span class="browser-icon__version">13+</span>
        </span>
        <span class="browser-icon" style="--counter:3;"> 
            <font-awesome-icon :icon="['fab','opera']" />
            <span class="browser-icon__version">69+</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
    }
  },
  components: {
  }
}
</script>
<style type="text/css">
    .home{
        background-color: #111;
        height: calc(100 * var(--vh, 1vh));
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .home h1{     
        font-size: 7vw;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        text-shadow: 0 0 10px rgba(255,255,255,0.5);
        color: #fff;
        display: block;
        margin: 0 0 3% 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .home .browser-icon-container{
        width: 100%;
    }
    .home .browser-icon{
        opacity: 0;
        font-size: 2vw;
        color: #888;
        margin: 0 2%;
        animation: browser-icon-fade 1s ease-in-out calc(var(--counter) * 1s + 2.5s) forwards;
    }
    .home .browser-icon__version{
        margin: 0 1%;
    }
    .title-words{
        animation: title-word-animation1 1.75s 1 0.75s backwards reverse ease-in-out;
        overflow: hidden;
        text-align: center;
        white-space: nowrap;
        display: inline-block;
    }
    .expanded-logo-words{
        animation: title-word-animation2 1.75s 1 0.75s backwards reverse ease-in-out;
        display: inline-block;
    }

    @keyframes title-word-animation1{
        0%{
            max-width: 3em;
        }
        100%{
            max-width: 0.55em;
        }   
    }

    @keyframes title-word-animation2{
        0%{
            max-width: 3em;
        }
        100%{
            max-width: 0;
        }   
    }
    @keyframes browser-icon-fade{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
</style>