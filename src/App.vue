<template>
  <div id="app">
    <div id="space">
      <Header />
      <div>
        <router-view/>  
      </div>
    </div>
    <Footer />
  </div>
  
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="scss" >
  @import './scss/App.scss';
  @import './assets/main.css';
  #app{
    height: 100%;
    position: relative;
  }
  #space{
    min-height: calc(100% - 200px);
  }
  
  
</style>

