<script>
import Item from './Item.vue';
import { useMainStore } from '../stores/mainStore';
export default {
  setup(){
        const main = useMainStore();
        return{
            main
        }
    },
    data() {
        return {};
    },
    props: ["item","category"],
    components: { Item }
}
</script>


<template>
    <div class="card" :style="{'background-color':(main.dark)?'#303030':'#eeeeee'}">
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