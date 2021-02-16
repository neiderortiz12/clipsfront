<template>
  <div id="app" class="container">
    <div id="space" >
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
import { useStore } from 'vuex'
import { computed} from 'vue'
export default {
  components:{
    Header,
    Footer
  },
  setup(){
    const store = useStore()
    const user = computed(()=>store.state.user)
    
    return{user}
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

