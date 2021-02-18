<template>
    <div ><!--:style="myStyle"-->
        <b-container>
        <h1>{{clip.nombre}}</h1>
        <div class="dash">
            <div>
                <video controls   ref="video" >
                    <source :src="'http://localhost/clips' + clip.clip" type="video/mp4">
                </video>
            </div>
            <div><p>{{clip.descripcion}}</p></div>
        </div>
        <div class="center"> 
            <a :href="'http://localhost/clips'+ clip.clip" download target="_blank" class="card-form__button btn btn-primary">Descargar</a>
        </div>

        </b-container>
    </div>
    
</template>

<script>
//import Header from "@/components/Header.vue";
//import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
    name: "Video",
    data() {
        return {
        clipId: null,
        clip: null,        
        };
        
    },
    components: {
        //Header,
        //Footer,
    },
    mounted: function () {
        this.clipId = this.$route.params.id;
        
        //let direccion = "http://localhost:8000/api/clips/"+this.clipId;        
        axios.get("http://localhost:8000/api/clips/"+this.clipId,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
            console.log(data);
            this.clip= data.data;
        });
    },
}
</script>

<style scoped>
h1{
    text-align: center  ;
}
a{
    text-align: center  ;
}

p{
    text-align: justify;
}

.center{
    text-align: center  ;
}
.card-form__button{
    max-width: 600px;
    margin: auto;
    width: 100%;
    height: 55px;
    background: #2364d2;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
}

.dash {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
    width: 98%;
    margin: auto;
    grid-gap: 10px 10px;
    padding: 10px 0;
    overflow: hidden;
}

.dash div video {
    width: 100%;
    vertical-align: top;
    height: 400px;
    object-fit: cover;
}
/*
.dash div:hover{
    transform: scale(1.1);

}


video::-webkit-media-controls {
  visibility: hidden;
}
video::-webkit-media-controls:hover {
  visibility: visible;
}
*/


.dash div {
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 6px rgba(0, 0, 0, .6);
}
/*
display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
.videoWrapper {
    position: relative;
    padding-bottom: 56.25%;  16:9 
    padding-top: 25px;
    height: 0;
}
.videoWrapper iframe {
   
    width: 100%;
    height: 100%;
}*/
</style>
