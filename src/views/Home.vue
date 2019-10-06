<template>
  <div class="view">
    <Render file-name="index.md"></Render>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Render from '../components/Render';
  
  export default {
    name: 'home',
    components: {
      Render,
    },
  
  };
</script>

<style scoped>
  
</style>
