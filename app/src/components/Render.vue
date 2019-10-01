<template>
  <div id="editor">
    <div v-html="output"></div>
  </div>
</template>

<script>
import marked from 'marked';


export default {

  data() {
    return {
      result: '',
    };
  },

  props: [
    'fileName',
  ],
  computed: {
    output() {
      return marked(this.result, {
        sanitize: false,
      });
    },
  },
  created() {
    // https://codeday.me/ko/qa/20190406/255817.html
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', `./${this.fileName}`, false);
    xmlhttp.send();
    if (xmlhttp.status === 200) {
      this.result = xmlhttp.responseText;
    }
    // console.log(result);
  },
};
</script>

<style scoped>
  #editor {
    text-align: left;
  }
</style>
