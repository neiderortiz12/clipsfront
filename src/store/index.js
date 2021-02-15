import { createStore } from 'vuex'

export default createStore({
  state: {
      user:null
  },
  mutations: {
    user(state, payload){
        state.user = payload
    }
  },
  actions: {
    user(context, user){
        context.commit('user', user);
    }
  },
  modules: {
  }
})
/*
Vue.use(Vuex);
const state ={
    user:null
}
const store = new Vuex.Store({
    state,
    getters:{
        user: (state)  =>{
            return state.user;
        }
    },
    actions:{
        user(context, user){
            context.commit('user', user);
        }
    },
    mutations:{
        user(state, user){
            state.user =user;
        }
    }

});
*/