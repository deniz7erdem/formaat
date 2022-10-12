<script>
import { useMainStore } from '../stores/mainStore'
export default {
    setup() {
        const main = useMainStore();
        return {
            main
        }
    },
    props: ["it"]
}
</script>


<template>

    <div class="card mt-3" v-if="it.img" :style="{'background-color':(main.dark)?'#444444':'#dddddd'}" >
        <img :src="'src/assets/img/'+it.img" class="card-img-top p-4">
        <p class="card-title text-center">{{it.name}}</p>
        <a :href="it.url" class="btn btn-sm m-1" :class="[(main.dark)?'btn-outline-primary':'btn-primary']" target="_blank"><i class="bi bi-download"></i>&nbsp; İndir</a>
    </div>

</template>

<style>

</style>
