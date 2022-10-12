<script>
import Category from './components/Category.vue';
import { useMainStore } from './stores/mainStore';
export default {
  setup() {
    const main = useMainStore();
    return {
      main
    }
  },
  methods:{
    setDark(){
      this.main.dark=!this.main.dark;
      this.main.setDarkMode()
      
    }
  },
  components: { Category }
}
</script>

<template>
  <div :style="{'background-color':(main.dark)?'#444444':'#dddddd'}">
    <!-- Header -->
    <header>
      <!-- <div class="p-4 text-light" :style="dark?{: #000000;}:{background-color: #4444ff;}"> -->
      <div class="p-4" :class="[(main.dark)?'text-light':'text-light']"
        :style="{'background-color':(main.dark)?'#303030':'#4444ff'}">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4">
            <h2 style="text-align: center;">Formaat</h2>
          </div>
          <div class="col-4">
            <div style="text-align: right;">
              <label class="switch">
                <input type="checkbox" v-model="main.dark" @click="this.setDark()">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>

      </div>

    </header>
    <!-- /Header -->
    <!-- App -->
    <div class="container" :class="[(main.dark)?'text-light':'text-dark']">

      <div class="row m-3" v-for="item,category in main.items">
        <Category :item="item" :category="category"></Category>
      </div>

    </div>
<!-- /App -->
  <!-- Footer -->
  <footer>
    <div class="text-light p-2" :style="{'background-color':(main.dark)?'#303030':'#eeeeee'}" style="text-align: center;">
      Deniz Erdem - MIT
    </div>
  </footer>
<!-- /Footer -->



  </div>
</template>


<style scoped>

</style>