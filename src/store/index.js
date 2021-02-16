import { createStore } from 'vuex'
import axios from 'axios'
//import { ref } from 'vue'


export default createStore({
  state: {
      user:null,
      clipsusuario:[]
  },
  mutations: {
    setuser(state, payload){
        state.user = payload
    },
    clipsUsuario(state, payload){
      state.clipsusuario=payload
    }
  },
  actions: {
    async agregaruser(context){
      //let dato=ref()
      let direccion = "http://localhost:8000/api/user";
      await axios.post(direccion,{"id":localStorage.getItem('id')},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
        //dato.value=data.data.usuario
        context.commit('setuser', data.data.usuario)
        console.log(data);
      }).catch(res=>{
        console.log(res)
        context.commit('setuser', null)
      });
    },
    eliminarusuario(context){
      let direccion = "http://localhost:8000/api/logout";
            axios.post(direccion,{"hola":"hola"},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
                console.log(data);
            });
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('id');
            context.commit('user', null);
    },
    subidosUsuario(context, enuser ){
      let direccion = "http://localhost:8000/api/clips/user";
      axios.post(direccion,{"user":enuser},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
        context.commit('clipsUsuario', data.data)
        console.log(data);
    });

    }
  },
  modules: {
  }
})
