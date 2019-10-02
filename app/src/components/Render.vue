<template>
  <div id="body">
    <div id="article">
      <div v-html="output"></div>
    </div>
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
  #body {
    background-color: gray;
    width: 100%;
    text-align: center;

  }
  
  #article {
    border-radius: 12px;
    margin: 20px 0 20px 0;
    padding: 30px 40px 100px 40px;
    display: inline-block;
    background-color: white;
    text-align: left;
    width: 700px;
    box-shadow: 0px 5px 30px 1px #00000099;
    vertical-align: middle;
  }
</style>
