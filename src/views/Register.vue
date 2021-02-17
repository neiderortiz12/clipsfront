<template>
    <div>
        <p class="panel-heading">
            Registro
        </p>
        <div class="field">
            <form action="">
                <div>
                    <label class="label" for="">Nombre</label>
                    <div class="control">
                        <input class="input" type="text" name="name" id="name" v-model="form.name" placeholder="Ingrese su Nombre">
                    </div>
                </div>
                <div>
                    <label class="label" for="">Email</label>
                    <div>
                        <input class="input" type="email" name="email" id="email" v-model="form.email" placeholder="Ingrese su Correo Electronico">
                    </div>
                </div>
                <div>
                    <label class="label" for="">Password</label>
                    <div>
                        <input class="input" type="password" name="password" id="password" v-model="form.password" placeholder="Password">
                    </div>
                </div>
                
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" id="#cleck" v-model="cleck">
                    Acepto los terminos asi no los haya
                    </label>
                </div>


                <div>
                    <div class="control">
                        <input class="button is-primary" type="button" value="Registrase" v-on:click="registrarse()">
                    </div>
                </div>
            </form>
        </div>
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
            },
            cleck:false
        }
    },
    methods:{
        registrarse(){
            let direccion ="http://localhost:8000/api/register";
            axios.post(direccion, this.form).then(data=>{
                console.log(data);
                this.$router.push('login');
            })
            
        }
    }
}
</script>

<style scoped>
    .field{
        max-width: 400px;
        margin: auto;
    }
    .label, .checkbox{
        margin-top: 20px;
    }
    .button{
        margin-top:20px;
        margin-bottom: 20px ;
        width:100%;
        
    }
</style>