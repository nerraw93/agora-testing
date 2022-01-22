import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
Vue.use(Notifications)

const store = {
  state: {
    stream: null,
  },
  storeStream(stream) {
    this.state.stream = stream
  }
}

new Vue({
  render: h => h(App),
  data: {
    state: store.state
  }

}).$mount('#app')
