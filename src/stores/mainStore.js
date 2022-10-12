import { defineStore } from "pinia";

export const useMainStore = defineStore("defineStore",{
    state(){
        return{
            items: {
                "Tarayıcı": [ {
                  name: "Chromium",
                  img: "chromium.svg",
                  url: "https://www.chromium.org/chromium-projects/"
                },{
                  name: "Chrome",
                  img: "chrome.svg",
                  url: "https://www.google.com/intl/tr_tr/chrome/"
                },
                {
                  name: "Firefox",
                  img: "firefox.svg",
                  url: "https://www.mozilla.org/tr/firefox/"
                },
                {
                  name: "Opera",
                  img: "opera.svg",
                  url: "https://www.opera.com/tr"
                },
                {
                  name: "Brave",
                  img: "brave.png",
                  url: "https://brave.com/"
                }],
                "Ofis": [{
                  name: "Libre Office",
                  img: "libreOffice.png",
                  url: "https://www.libreoffice.org/"
                },
                {
                  name: "Apache OpenOffice",
                  img: "openoffice.svg",
                  url: "https://www.openoffice.org/tr/"
                },
                {
                  name: "Microsoft Office",
                  img: "ms-off.svg",
                  url: "https://www.office.com/"
                }],
                "Arşiv": [{
                  name: "WirRAR",
                  img: "chromium.svg",
                  url: "#"
                },
                {
                  name: "WirZIP",
                  img: "chromium.svg",
                  url: "#"
                },
                {
                  name: "8ZIP",
                  img: "chromium.svg",
                  url: "#"
                }],
                "Video oynatıcılar": [{
                  name: "VLd Media Player",
                  img: "chromium.svg",
                  url: "#"
                }, {
                  name: "OGM Player",
                  img: "chromium.svg",
                  url: "#"
                },
                {
                  name: "MPC",
                  img: "chromium.svg",
                  url: "#"
                }],
                "Dev Tools": [{
                    name: "Git",
                    img: "git.svg",
                    url: "https://git-scm.com/"
                  },{
                    name: "NodeJS",
                    img: "nodejs.png",
                    url: "https://nodejs.org/en/"
                  }, {
                  name: "VSCode",
                  img: "vscode.svg",
                  url: "https://code.visualstudio.com/"
                }, {
                  name: "Visual Studio",
                  img: "ms-vs.svg",
                  url: "https://visualstudio.microsoft.com/tr/"
                }]
              },
              dark: JSON.parse(localStorage.getItem('darkMode'))
        }
    },
    actions:{
      setDarkMode(){
        localStorage.setItem('darkMode',JSON.stringify(this.dark));
      }
    }
})
