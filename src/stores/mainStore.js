import { defineStore } from "pinia";

export const useMainStore = defineStore("defineStore",{
    state(){
        return{
            items: {
                "Tarayıcı": [{
                  name: "Chrome",
                  img: "chromium.png",
                  url: "https://www.google.com/intl/tr_tr/chrome/"
                }, {
                  name: "Chromium",
                  img: "chromium.png",
                  url: "https://www.chromium.org/chromium-projects/"
                },
                {
                  name: "Firefox",
                  img: "firefox.png",
                  url: "https://www.mozilla.org/tr/firefox/"
                },
                {
                  name: "Opeta",
                  img: "firefox.png",
                  url: "#"
                },
                {
                  name: "Sakari",
                  img: "firefox.png",
                  url: "#"
                },
                {
                  name: "Brave",
                  img: "brave.png",
                  url: "#"
                },
                {
                  name: "Yandez",
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
                  url: "https://www.libreoffice.org/"
                },
                {
                  name: "Open Office",
                  img: "Git-logo.svg",
                  url: "#"
                },
                {
                  name: "MS Office",
                  img: "Git-logo.svg",
                  url: "#"
                }],
                "Arşiv": [{
                  name: "WirRAR",
                  img: "Git-logo.svg",
                  url: "#"
                },
                {
                  name: "WirZIP",
                  img: "Git-logo.svg",
                  url: "#"
                },
                {
                  name: "8ZIP",
                  img: "Git-logo.svg",
                  url: "#"
                }],
                "Video oynatıcılar": [{
                  name: "VLd Media Player",
                  img: "Git-logo.svg",
                  url: "#"
                }, {
                  name: "OGM Player",
                  img: "Git-logo.svg",
                  url: "#"
                },
                {
                  name: "MPC",
                  img: "Git-logo.svg",
                  url: "#"
                }],
                "Dev Tools": [{
                    name: "Git",
                    img: "Git-logo.svg",
                    url: "https://git-scm.com/"
                  },{
                    name: "NodeJS",
                    img: "Git-logo.svg",
                    url: "#"
                  }, {
                  name: "VSCode",
                  img: "Git-logo.svg",
                  url: "#"
                }, {
                  name: "Eclipse",
                  img: "Git-logo.svg",
                  url: "#"
                }]
              },
              dark: false
        }
    }
})