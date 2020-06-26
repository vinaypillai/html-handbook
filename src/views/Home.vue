<template>
  <div class="home">
    <h1>
      <span>&lt;</span>
      <span class="title-words">html&nbsp;</span>
      <span class="expanded-logo-words title-words">-hand</span><span class="title-words">book/</span>
      <span>&gt;</span>
    </h1>
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
  }
  .home h1{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 7vw;
        font-family: 'Lato', sans-serif;
        font-weight: 200;
        text-shadow: 0 0 10px rgba(255,255,255,0.5);
        color: #fff;
    }
    .title-words{
        animation: title-word-animation1 2s 1 0.75s backwards reverse;
        overflow: hidden;
        text-align: center;
        white-space: nowrap;
    }
    .expanded-logo-words{
        animation: title-word-animation2 2s 1 0.75s backwards reverse;
    }

    @keyframes title-word-animation1{
        0%{
            max-width: 5em;
        }
        100%{
            max-width: 0.55em;
        }   
    }

    @keyframes title-word-animation2{
        0%{
            max-width: 5em;
        }
        100%{
            max-width: 0;
        }   
    }
</style>