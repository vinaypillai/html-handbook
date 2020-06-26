import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navSlides:[
        {
            to:"/",
            text:"<html-handbook/>",
            color:"#111",
            title:"Home"
        },
        {
            to:"/spinners",
            text:"Spinners",
            color:"#7DFED2",
            title:"Spinners"
        },
        {
            to:"/buttons",
            text:"Buttons",
            color:"#FFE695",
            title:"Buttons"
        },
        {
            to:"/toggles",
            text:"Toggles",
            color:"#67FCFF",
            title:"Toggles"
        },
        {
            to:"/inputs",
            text:"Inputs",
            color:"#B2F9AB",
            title:"Inputs"
        }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
