<script>
import Category from './components/Category.vue';
export default {
  data() {
    return {
      items: {
        "Tarayıcı": [{
          name: "Chromium",
          img: "chromium.png"
        },
        {
          name: "Firefox",
          img: "firefox.png"
        }],
        "Ofis": [{
          name: "Libre Office",
          img: "libreOffice.png"
        }]
      },
      categorys: ["Tarayıcı", "Ofis"]
    };
  },
  components: { Category }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a href="#" class="navbar-brand">Formaat</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>

  <div class="container">

    <div class="row m-3" v-for="item,category in items">
      <Category :item="item" :category="category"></Category>
    </div>

  </div>
</template>


<style scoped>

</style>