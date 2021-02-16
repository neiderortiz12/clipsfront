<template>
    <div v-if="user">   
            <div class="tabs">
                <ul>
                    <li :class="{'is-active':activo == 'Profile'}"><a v-on:click.prevent="cambiarVista('Profile')">Perfil</a></li>
                    <li :class="{'is-active':activo == 'Elementos'}"><a v-on:click.prevent="cambiarVista('Elementos')">Mis Clips</a></li>
                    <li :class="{'is-active':activo == 'Admin'}" v-if="user.rol==false"><a v-on:click.prevent="cambiarVista('Admin')">Administracion</a></li>
                </ul>
            
                
            </div>
            <div>
                    <component v-bind:is="componente" :user="user" :ListaClips="elementos"></component>
            </div>
    <!--
        es este es el dashboard
        {{user}}
        <Profile :user="user"/>
        <Elementos :clips="elementos"/>
    -->
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { onMounted, computed} from 'vue'
import Elementos from '@/components/Elementos.vue'
import Profile from '@/components/Profile.vue'
import Admin from '@/components/Admin.vue'
export default {
    name:'Dashboard',
    setup(){
        const store = useStore()
        onMounted(() =>{
            store.dispatch('subidosUsuario','1')
            store.dispatch('agregaruser')
            console.log("entron a mounted")
        })
        
        
        const user= computed(()=>store.state.user)
        //const user2 = computed(()=>store.state.user
        const elementos = computed(()=>store.state.clipsusuario)
        
        console.log(user)
        console.log("en dashboard")

        return{user, elementos}
    },
    data(){
        return{
            isOpen:true,
            componente:'Profile',
            activo:'Profile',
            datos:'user'
        }
    },
    components:{
        Elementos,
        Profile,
        Admin
    },
    methods:{
        cambiarVista(el){
            this.componente=el
            this.activo=el
        }
    }
    
}
</script>

<style scoped>

</style>
