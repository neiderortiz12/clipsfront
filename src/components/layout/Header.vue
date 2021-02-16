<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <h3 class="title is-3">Clips</h3>
            </router-link>

            <a role="button" class="navbar-burger burger" @click.prevent="toggleMenu" :class="{'is-active':isOpen}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':isOpen}">
            <div class="navbar-start">
            <router-link class="navbar-item" to="/">
                Inicio
            </router-link>

            <router-link v-if="user" class="navbar-item" to="/newclip">
                Nuevo Clip
            </router-link>

            <router-link class="navbar-item" to="/about">
                Nosotros
            </router-link>

            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <template v-if="user">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                {{user.name}}
                            </a>

                            <div class="navbar-dropdown">
                                <router-link class="navbar-item" to="/dashboard">
                                    Dashboard
                                </router-link>
                                <router-link class="navbar-item" @click="comprar" to="/login" >
                                    Cerrar Sesion
                                </router-link>
                            </div>
                        </div> 
                    </template>
                    <template v-if="!user">
                        <div class="buttons">
                            <router-link class="button is-primary" to="/register">
                                <strong>Registrarse</strong>
                            </router-link>
                            <router-link class="button is-light" to="/login">
                                Iniciar Sesion
                            </router-link>
                        </div>
                    </template>
                </div>
            </div>
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