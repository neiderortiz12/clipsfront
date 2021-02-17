<template>
    <div class="contenedor">
        <h4><strong>Mis clips</strong></h4>
        <div class="contenedor-item" v-for="clips in ListaClips.clips" :key="clips.id">
            <div class="contenedor-item-video">
                <video v-on:mouseover="mousehover(clips.id)" v-on:mouseleave="mouseleave"  class="vide" v-bind:controls="clips.id==numerito" ref="video">
                    <source :src="'http://localhost/clips' + clips.clip" type="video/mp4">
                </video>
            </div>
            <div class="contenedor-item-opciones">
                <span class="tag is-primary" v-if="clips.confirmado">Habilitado</span>
                <span class="tag is-warning" v-else>No Habilitado </span>    
                <button class="button is-danger">Eliminar</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            numerito:0
        }
    },
    props:['ListaClips'],
    methods: {
        mousehover: function(id){
        this.numerito=id;
    },
        mouseleave: function(){
        this.numerito=0;
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