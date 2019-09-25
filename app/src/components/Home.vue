<template>
    <div id="editor">
        <div v-html="output"></div>
    </div>
</template>

<script>
    import marked from 'marked'
    import fs from 'fs'
    
    
    export default {
        data: function() {
            return {
                data: "# Hello",
                file: fs,
            }
        },
        computed: {
            output: function() {
                return marked(this.data, {
                    sanitize: false
                })
            }
        },
        created() {
            // https://codeday.me/ko/qa/20190406/255817.html
            var result = null;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", './index.md', false);
            xmlhttp.send();
            if (xmlhttp.status == 200) {
                result = xmlhttp.responseText;
            }
            console.log(result)
    
            this.data = result
    
    
        }
    }
</script>

<style scoped>
    #editor {
        text-align: left;
    }
</style>
