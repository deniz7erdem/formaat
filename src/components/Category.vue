<script>
import Item from './Item.vue';
export default {
    data() {
        return {};
    },
    props: ["item", "category"],
    components: { Item }
}
</script>


<template>
    <div class="card bg-light">
        <div class="card-body">
            <h5 class="card-title">{{category}}</h5>
            <div class="row">
                <div v-for="it in item" class="col-lg-2 col-md-3">
                    <Item :it="it"></Item>
                </div>
            </div>


        </div>
    </div>
</template>

<style>

</style>