<template>
  <div class="view">
    <div class="head">
      <Header></Header>
    </div>
    <div class="nav">
      <Menu></Menu>
    </div>
    <div class="body">
      <Render file-name="index.md"></Render>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  
  </div>
</template>

<script>
  // @ is an alias to /src
  import Footer from '@/components/Footer';
  import Header from '@/components/Header';
  import Render from '@/components/Render';
  import Menu from '@/components/Menu';
  
  export default {
    name: 'home',
    components: {
      Render, Header, Footer, Menu,
    },
  
  };
</script>

<style scoped>
.head {
  height: 270px;
}
.nav {
  position: absolute;
  top: 210px;
  height: 50px;
  width: 100%;
}
.body {
  height: 100%;
}
.footer {
  height: 100px;
}
@media screen {
  .view {
    margin: 0 0 0 0;
  }
}
</style>
