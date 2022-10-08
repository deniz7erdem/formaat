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

    <div class="card" style="width: 6rem;" v-if="it.img">
        <img :src="'src/assets/'+it.img" class="card-img-top p-2">
        <p class="card-title text-center">{{it.name}}</p>

    </div>


</template>

<style>

</style>