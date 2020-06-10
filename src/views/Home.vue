<template>
  <div class="home">
    <carousel>
        <component-presentation 
        v-for="spinner in spinners" 
        :key="spinner.name"
        :color="spinner.color">
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
import componentPresentation from "@/components/component-presentation";
import spinners from "@/assets/components/spinners"
export default {
  name: 'Home',
  data(){
    return {
        "spinners":spinners.data
    }
  },
  components: {
    carousel,
    codeBlock,
    componentPresentation
  }
}
</script>
<style type="text/css" src="@/styles/spinners.css"></style>