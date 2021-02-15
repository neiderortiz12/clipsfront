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
                home
            </router-link>

            <router-link class="navbar-item" to="/">
                Documentation
            </router-link>

            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <template v-if="user">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Usuario
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    Dashboard
                                </a>
                                <a class="navbar-item" @click.prevent="logOut()">
                                    Cerrar Sesion
                                </a>
                            </div>
                        </div> 
                    </template>
                    <template v-else>
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
export default {
    data(){
        return{
            isOpen:false,
            user:false
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
            localStorage.token=null;
            localStorage.name=null;
            localStorage.id=null;
            console.log("si ingresa al metodo de singotu");
            this.user=false
        }
    },
    created(){
        let direccion = "http://localhost:8000/api/verificar";
        axios.get(direccion,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
            if(data.data.res == true){
                this.user = true
            }else{
                this.user = false
            }
        });

    }
}
</script>