<template>
    <div class="code-block">
        <vue-code-highlight :language="language" class="code-block-content">{{content}}</vue-code-highlight>
        <div class="copy-button" @click="copy()"><font-awesome-icon icon="copy" /></div>
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
        methods:{
            copy(){
                navigator.clipboard.writeText(this.content);
            }
        },
        components:{
            VueCodeHighlight,
        }
    }
</script>
<style lang="scss">
    .code-block{
        --control-color: #fff;
        --alt-color: #333;
        .dark &{
            --control-color: #333;
            --alt-color: #fff;
        }
        .code-block-content pre[class*="language"] {
            box-sizing: border-box;
            padding: 40px 0 30px 30px;
            position: relative;
        }
        code{
            max-height: 50vh;
            overflow: auto;
            display: block;
            padding-right: 30px;
            box-sizing: border-box;
            width: 100%;
            max-width: 90vw;
        }
        .copy-button{
            color: var(--control-color);
            font-size: 1.5em;
            width: 2em;
            height: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: solid 2px var(--control-color);
            position: relative;
            margin: 1em auto -1em auto;
            cursor: pointer;
            transition: background-color 1s ease-in-out;
            &:active{
                background-color: var(--control-color);
                transition: background-color 0.05s ease-in-out;
                color: var(--alt-color);
            }
            &::after{
                content:'';
                position: absolute;
                top: -3px;
                bottom: -3px;
                left: -3px;
                right: -3px;
                border: solid 5px var(--control-color);
                transition: top,right,bottom,left, 0.15s ease-in-out;
                border-radius: 50%;
            }
            &:hover{
                &::after{
                    top: -6px;
                    bottom: -6px;
                    left: -6px;
                    right: -6px;
                }
            }
        }
    }
</style>
