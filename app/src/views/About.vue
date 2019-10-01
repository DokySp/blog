<template>
  <div class="home">
    <Render file-name="about.md"></Render>
  </div>
</template>

<script>
// @ is an alias to /src
import Render from '@/components/Render';

export default {
  name: 'about',
  components: {
    Render,
  },

};
</script>
