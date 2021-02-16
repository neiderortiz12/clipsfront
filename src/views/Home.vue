<template>
  <div class="home">
    <div class="dash">
      <div  v-for="clips in ListaClips" :key="clips.id">        
        <video v-on:mouseover="mousehover(clips.id)" v-on:mouseleave="mouseleave"  class="vide" v-bind:controls="clips.id==numerito" ref="video" >
            <source :src="'http://localhost/apiclips' + clips.clip" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, onMounted} from 'vue'
import axios from "axios";
export default {
  name: 'Home',
  data() {
    return {
      //ListaClips: null,
      micasa:false,
      numerito:0        
    };
  },
  components: {
      //Header,
      //Footer,
  },
  methods: {
    mousehover: function(id){
      this.micasa=true;
      this.numerito=id;
    },
    mouseleave: function(){
      this.micasa=false;
      this.numerito=0;
    }

    /*repro() {
        document.getElementsByTagName("video")[0].setAttribute("controls","true");
    },*/
  },/*
  mounted: function () {
    let direccion = "http://localhost:8000/api/clips";
    /*axios.get({ url:direccion,
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
        }
        this.ListaClips=data.data;
    });
    axios.get(direccion,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
        console.log(data);
        this.ListaClips= data.data;
    });*/
    setup(){
      let ListaClips=ref([]);
      let direccion = "http://localhost:8000/api/clips";
      axios.get(direccion,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
        console.log(data);
        ListaClips.value= data.data;
      });
  
      const store = useStore()
        onMounted(() =>{
            store.dispatch('agregaruser')
            console.log("entron a mounted")
        })
      const user = computed(()=>store.state.user)
    
      return{user, ListaClips}
    }

}
</script>

<style scoped>


.dash {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
    width: 98%;
    margin: auto;
    grid-gap: 5px 5px;
    padding: 10px 0;
    overflow: hidden;
}

.dash div video {
    width: 100%;
    vertical-align: top;
    height: 200px;
    object-fit: cover;
}

.dash div:hover{
    transform: scale(1.1);
    z-index: 1;

}
.dash div {
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 6px rgba(0, 0, 0, .6);
}
</style>
