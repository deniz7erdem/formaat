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
    <div class="card bg-light" style="width: 100%;">
        <div class="card-body">
            <h5 class="card-title">{{category}}</h5>
            <div class="row">
                <div v-for="it in item" class="col-md-2">
                    <Item :it="it"></Item>
                </div>
            </div>


        </div>
    </div>
</template>

<style>

</style>