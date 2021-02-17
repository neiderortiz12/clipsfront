<template>
    <div class="contenedor">
        <p class="panel-heading">
            Mis Clips
        </p>
        <div v-if="!ListaClips[0]==[]">
            <div class="contenedor-item" v-for="(clips, index) in ListaClips" :key="clips.id">
                <div class="contenedor-item-video" v-if="clips">
                    <video v-on:mouseover="mousehover(clips.id)" v-on:mouseleave="mouseleave"  class="vide" v-bind:controls="clips.id==numerito" ref="video">
                        <source :src="'http://localhost/apiclips' + clips.clip" type="video/mp4">
                    </video>
                </div>
                <div class="contenedor-item-opciones">
                    <span class="tag is-primary" v-if="clips.confirmado">Habilitado</span>
                    <span class="tag is-warning" v-else>No Habilitado </span>    
                    <button class="button is-danger" v-on:click.prevent="deleteClip(clips.id,index)">Eliminar</button>
                    <button class="button is-warning" v-on:click.prevent="accion(clips.id, false)" v-if="clips.confirmado">Deshabilitar</button>
                    <button class="button is-primary" v-on:click.prevent="accion(clips.id, true)" v-else>Habilitar</button>
                    
                </div>
            </div>
        </div>
        <div v-else>
            <h3>no hay elemtos para mostrar</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';

export default {
    setup(){
      let ListaClips=ref([]);
      let direccion = "http://localhost:8000/api/clips";
      axios.get(direccion,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
        console.log(data);
        ListaClips.value= data.data;
      });
      return{ListaClips}
    },
    data(){
        return{
            numerito:0,
        }
    },
    methods: {
        mousehover: function(id){
        this.numerito=id;
        },
        mouseleave: function(){
        this.numerito=0;
        },
        deleteClip(clip, index){

            let direccion = "http://localhost:8000/api/clips/delete";
            axios.post(direccion,{"id":clip},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
                console.log(data);
                this.ListaClips.splice(index,1)
            });
        },
        accion(id, ac){
            let direccion = "http://localhost:8000/api/clips/update";
            axios.post(direccion,{"id":id, "confirmado":ac},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
                console.log(data);
            });

        }
     },
}
</script>

<style scoped>

.contenerdor{
    margin :3px;
    
}
.contenedor-item{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
    grid-gap: 5px 5px;
    background-color: cornsilk;
    margin: 10px;

}
.contenedor-item-opciones{
    margin: auto;
    
}
.contenedor-item-video{
    margin:auto;
}

.tag, .button{
    height: 40px;
    margin:5px;
}
video {
    width: 300px;
    vertical-align: top;
    height: 200px;
    object-fit: cover;
}
/*
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

}
.dash div {
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 6px rgba(0, 0, 0, .6);
}*/

</style>