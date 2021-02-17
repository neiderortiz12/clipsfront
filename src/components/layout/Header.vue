<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <router-link class="navbar-brand" to="/">
            <h3 class="titulos title is-3">Clips</h3>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                
                <li class="titulos nav-item active">
                    <router-link class="nav-link" to="/">Inicio </router-link>
                </li>
                <li class="titulos nav-item">
                    <router-link class="nav-link" v-if="user" to="/newclip">Nuevo Clip</router-link>
                </li>
                <li class="titulos nav-item">
                    <router-link class="nav-link" to="/about">Nosotros</router-link>
                </li>
           </ul>
           <template v-if="user">
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user"></i>
                        {{user.name}}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/dashboard">Mi Perfil</router-link>
                        <router-link class="dropdown-item" @click="comprar" to="/"><i class="cerrar-sesion fas fa-power-off"></i>Cerrar Sesion</router-link>
                    
                    </div>
                </div>
            </template>
            <template v-else>
                <router-link class="button is-primary" to="/register">
                    Registrarse
                </router-link>
                <router-link class="button is-light" to="/login">
                    Iniciar Sesion
                </router-link>
            </template>
        </div>
        </nav>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'//onMounted, 
 export default {
    data(){
        return{
            isOpen:false,
            user1:true
        }
    },
    methods:{
        toggleMenu(){
            const status = !this.isOpen
            this.isOpen = status
        },
        logOut(){
            let direccion = "http://localhost:8000/api/logout";
            axios.post(direccion,{"hola":"hola"},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
                console.log(data);
            });
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('id');
            console.log("si ingresa al metodo de singotu");
            this.user1=null
            this.$router.push('login');
        }
    },/*
    created(){
        let direccion = "http://localhost:8000/api/verificar";
        axios.get(direccion,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
            if(data.data.res == true){
                this.user = true
            }else{
                this.user = false
            }
        });

    }*/
    setup(){
        const store = useStore()

        const user = computed(()=>store.state.user)

        
        console.log(user)
        
        const comprar = ()=> {
            console.log("entrada al eliminar")
            store.dispatch('eliminarusuario')
        }
        console.log("entrada normal")
        return{user, comprar}
    }

}
</script>

<style scoped>
.button{
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: none;
}
.titulos:hover{
    transform: scale(1.05);
}
.cerrar-sesion{
    margin-left: 5px;
    margin-right: 5px;
}
</style>