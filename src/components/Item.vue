<script>
import { useMainStore } from '../stores/mainStore'
export default {
    props: ["it"],
    setup(props) {
        const main = useMainStore();
        const imageUrl = new URL('../assets/img/'+props.it.img, import.meta.url).href
        return {
            main,
            imageUrl
        }
    }
    
}
</script>


<template>

    <div class="card mt-3" v-if="it.img" :style="{'background-color':(main.dark)?'#444444':'#dddddd'}" >
        <img :src="imageUrl" class="card-img-top p-4">
        <p class="card-title text-center">{{it.name}}</p>
        <a :href="it.url" class="btn btn-sm m-1" :class="[(main.dark)?'btn-outline-light':'btn-primary']" target="_blank"><i class="bi bi-download"></i>&nbsp; İndir</a>
    </div>

</template>

<style>

</style>
