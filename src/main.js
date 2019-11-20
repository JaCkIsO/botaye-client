import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';
import Snotify, {
  SnotifyPosition
} from 'vue-snotify';
import 'vue-snotify/styles/material.css';
import store from './store/index'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBigtPsl9gVNxMk2CksN_QP68_YivMx62Q",
    libraries: "places" // necessary for places input
  }
});
const options = {
  toast: {
    position: SnotifyPosition.rightTop,
    showProgressBar: false,
  }
}

Vue.use(Snotify, options)

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')