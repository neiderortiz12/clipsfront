<template>
    <div>
        <form action="">
            <div>
                <label for="">Nombre</label>
                <div>
                    <input type="text" name="name" id="name" v-model="form.name">
                </div>
            </div>
            <div>
                <label for="">Email</label>
                <div>
                    <input type="email" name="email" id="email" v-model="form.email">
                </div>
            </div>
            <div>
                <label for="">Password</label>
                <div>
                    <input type="password" name="password" id="password" v-model="form.password">
                </div>
            </div>
            <div>
                <div>
                    <input type="button" value="Registrase" v-on:click="registrarse()">
                </div>
            </div>
        </form>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name:"Register",
    data(){
        return{
            form:{
                "name":"",
                "email":"",
                "password":""
            }
        }
    },
    methods:{
        registrarse(){
            let direccion ="http://localhost:8000/api/register";
            axios.post(direccion, this.form).then(data=>{
                console.log(data);
            })
            
        }
    }
}
</script>

<style scoped>

</style>