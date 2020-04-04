import Vue from 'vue'
import App from './App'
import './js_sdk/ican-clipBoard/ican-clipBoard.js'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
