<template>
  <div id="app">
    <div class="head">
      <Header></Header>
    </div>
    <div class="nav">
      <Menu></Menu>
    </div>
  
    <div class="content">
      <router-view/>
  
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  
  
  </div>
</template>

<script>
  import Footer from './components/Footer';
  import Header from './components/Header';
  import Menu from './components/Menu';
  
  export default {
    components: {
      Header,
      Footer,
      Menu,
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    margin: 0 0 0 0;
  }
  
  .head {
    height: 270px;
  }
  
  .nav {
    position: absolute;
    top: 210px;
    transform: translateX(-50%);
    margin-left: 50%;
  }
  
  .content {
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
