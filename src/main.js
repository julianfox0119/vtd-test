// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'

import langEn from 'element-ui/lib/locale/lang/en'
import langZh from 'element-ui/lib/locale/lang/zh-CN'
import euilocale from 'element-ui/lib/locale'

import Vuex from 'vuex'
import '../theme/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(Vuex)

// euilocale.use(lang)

const store = new Vuex.Store({
  state: {
    locale : ''
  },
  mutations: {
    changeLocale (state, newlocale) {
      state.locale = newlocale
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
