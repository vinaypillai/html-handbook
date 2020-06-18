<template>
  <div class="home">
  <router-link :to="{'name':'Buttons'}">Buttons</router-link>
  <router-link :to="{'name':'Spinners'}">Spinners</router-link>
  <router-link :to="{'name':'Toggles'}">Toggles</router-link>
  <router-link :to="{'name':'Inputs'}">Inputs</router-link>
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