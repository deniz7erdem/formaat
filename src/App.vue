<script>
import Category from './components/Category.vue';
export default {
  data() {
    return {
      items: {
        "Tarayıcı": [{
          name: "Chrome",
          img: "chromium.png",
          url: "https://download-chromium.appspot.com/dl/Win_x64?type=snapshots"
        },{
          name: "Chromium",
          img: "chromium.png",
          url: "https://download-chromium.appspot.com/dl/Win_x64?type=snapshots"
        },
        {
          name: "Firefox",
          img: "firefox.png",
          url: "https://www.mozilla.org/tr/firefox/download/thanks/"
        },
        {
          name: "Opera",
          img: "firefox.png",
          url: "#"
        },
        {
          name: "Safari",
          img: "firefox.png",
          url: "#"
        },
        {
          name: "Brave",
          img: "brave.png",
          url: "#"
        },
        {
          name: "Yandex",
          img: "firefox.png",
          url: "#"
        },
        {
          name: "Firefox",
          img: "firefox.png",
          url: "#"
        }],
        "Ofis": [{
          name: "Libre Office",
          img: "libreOffice.png",
          url: "https://www.libreoffice.org/donate/dl/win-x86_64/7.4.1/tr/LibreOffice_7.4.1_Win_x64.msi"
        },
        {
          name: "Open Office",
          img: "libreOffice.png",
          url: "#"
        },
        {
          name: "MS Office",
          img: "libreOffice.png",
          url: "#"
        }],
        "Arşiv":[{
          name: "WinRAR",
          img: "libreOffice.png",
          url: "#"
        },
        {
          name: "WinZIP",
          img: "libreOffice.png",
          url: "#"
        },
        {
          name: "7ZIP",
          img: "libreOffice.png",
          url: "#"
        }],
        "Video oynatıcılar":[{
          name: "VLC Media Player",
          img: "libreOffice.png",
          url: "#"
        },{
          name: "GOM Player",
          img: "libreOffice.png",
          url: "#"
        },
        {
          name: "Media Player Classic",
          img: "libreOffice.png",
          url: "#"
        }],
        "Dev Tools":[{
          name: "NodeJS",
          img: "libreOffice.png",
          url: "#"
        },{
          name: "VSCode",
          img: "libreOffice.png",
          url: "#"
        },{
          name: "Eclipse",
          img: "libreOffice.png",
          url: "#"
        }]
      }
    };
  },
  components: { Category }
}
</script>

<template>
  <!-- Header -->
  <header>
    <div class="p-4 text-light" style="background-color: #4444ff; text-align: center;">
      <h2>Formaat</h2>
    </div>
  </header>
<!-- /Header -->
  <div class="container">

    <div class="row m-3" v-for="item,category in items">
      <Category :item="item" :category="category"></Category>
    </div>

  </div>
</template>


<style scoped>

</style>