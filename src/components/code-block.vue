<template>
    <div>
        <vue-code-highlight :language="language" class="code-block">{{content}}</vue-code-highlight>
    </div>
</template>
<script type="text/javascript">
    import "vue-code-highlight/themes/window.css";
    import "vue-code-highlight/themes/prism.css";
    import { component as VueCodeHighlight } from 'vue-code-highlight';
    import 'prism-es6/components/prism-markup-templating';
    export default {
        props:{
            content:{
                type:String,
                default:""
            },
            language:{
                type:String,
                default:"markup"
            }
        },
        data(){
            return {

            }
        },
        components:{
            VueCodeHighlight,
        }
    }
</script>
<style lang="scss">
    .code-block pre[class*="language"] {
        box-sizing: border-box;
        padding: 40px 0 30px 30px;
        position: relative;
    }
    code{

        max-height: 50vh;
        overflow-y: auto;
        display: block;
        padding-right: 30px;
        box-sizing: border-box;
        width: 100%;
    }
</style>
