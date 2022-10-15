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
  methods: {
    setDark() {
      this.main.dark = !this.main.dark;
      this.main.setDarkMode()

    }
  },
  components: { Category }
}
</script>

<template>
  <div :style="{'background-color':(main.dark)?'#444444':'#dddddd'}">
    <!-- Header -->
    <header class="masthead"
      :style="{'background-image':(main.dark)?'linear-gradient(45deg, #303030 0%, #202020 100%)':'linear-gradient(45deg, #0B5ED7 0%, #31acdd 100%)'}">
      <div class="container">
        <div class="row">
          <div class="col-sm-11 col-9"></div>
          <div class="col-sm-1 col-1">
            <label class="switch">
              <input type="checkbox" v-model="main.dark" @click="this.setDark()">
              <span style="position:absolute ;top:0;right:3;" class="slider round"></span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 py-5 align-items-center">
            <h1 class="mb-4">Formaat</h1>
            <h2 class="m-0">Bilgisayarını yeni kurduğunda ihtiyacın olan her şeye uzanan kapı</h2>
          </div>
        </div>
      </div>
      <svg style="pointer-events: none" class="wave" width="100%" height="50px" preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 75">
        <defs>
          <clipPath id="a">
            <rect class="a" width="1920" height="75"></rect>
          </clipPath>
        </defs>
        <title>wave</title>
        <g class="b">
          <path class="c" :style="{'fill':(main.dark)?'#444444':'#DDDDDD'}"
            d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48">
          </path>
        </g>
        <g class="b">
          <path class="d" :style="{'fill':(main.dark)?'#444444':'#DDDDDD'}"
            d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10">
          </path>
        </g>
        <g class="b">
          <path class="d" :style="{'fill':(main.dark)?'#444444':'#DDDDDD'}"
            d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24">
          </path>
        </g>
        <g class="b">
          <path class="d" :style="{'fill':(main.dark)?'#444444':'#DDDDDD'}"
            d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150">
          </path>
        </g>
      </svg>
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
      <div class="text-light p-2" :style="{'background-color':(main.dark)?'#303030':'#1074DC'}"
        style="text-align: center;">
        Deniz Erdem - MIT
      </div>
    </footer>
    <!-- /Footer -->
  </div>
</template>


<style scoped>

</style>