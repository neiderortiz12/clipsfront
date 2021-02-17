<template>
    <div>
        <p class="panel-heading">
            Agregar Nuevo Clip
        </p>
        <div class="field">
            <form ction="" v-on:submit.prevent="createNewClip();"  enctype="multipart/form-data">
                <div >
                    <label for="" class="label " >Nombre</label>
                    <div class="control">
                        <input class="input is-primary" type="text" name="nombre" id="nombre" v-model="form.nombre" placeholder="Nombre del Nuevo Clip" required>
                    </div>
                </div>
                <div >
                    <label for="" class="label" >Seleccione un Clip</label>
                    <div >
                        <input class="input is-primary" type="file" @change="processFile($event)" required>
                    </div>
                </div>
                <div >
                    <label for="" class="label" >Descripción</label>
                    <div class="control">
                        <textarea class="input is-primary" name="descripcion" id="descripcion" v-model="form.descripcion" placeholder="Agregar Una Descripción" required></textarea>
                    </div>
                </div>
                <div >
                    <div class="control">
                        <input class="button is-primary" type="submit" value="Crear">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'NewClip',
    data(){
        return{
            Clip:null,
            form:{
                nombre:"",
                descripcion:""
            },
            clip:""
        }
    },
    methods:{
        processFile(event){
            this.clip = event.target.files[0];
            console.log(event);
        },
        createNewClip(){
            console.log("esta en la funcio");
            console.log(this.clip);
            const fr = new FormData()
            fr.append('clip', this.clip);
            fr.append('nombre', this.form.nombre);
            fr.append('descripcion', this.form.descripcion);
            fr.append('user', localStorage.getItem('id')); 
            console.log(fr);
            axios.post('http://localhost:8000/api/clips/create', fr, {headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(res=>{
                console.log(res);
                 this.$router.push('dashboard');
            });
        }
    }

}

</script>
<style scoped>
    .field{
        max-width: 400px;
        margin: auto;
    }
    .label{
        margin-top: 20px;
    }
    .button{
        margin-top:20px;
        margin-bottom: 20px ;
        width:100%;
        
    }
    
</style>