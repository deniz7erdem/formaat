<script>
export default {
    data() {
        return {

        }
    },
    props: ["it"]
}
</script>


<template>

    <div class="card mt-3" v-if="it.img">
        <img :src="'src/assets/'+it.img" class="card-img-top p-3">
        <p class="card-title text-center">{{it.name}}</p>
        <!-- <a href="#" class="btn" :class='[{it.directDown:"btn-primary"}]'>İndir</a> -->
        <a :href="it.url" class="btn btn-sm m-1 btn-outline-primary" target="_blank"><i class="bi bi-download"></i>&nbsp; İndir</a>
    </div>


</template>

<style>

</style>