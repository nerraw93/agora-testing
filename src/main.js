import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMicrophone)
library.add(faMicrophoneSlash)

Vue.config.productionTip = false
Vue.use(Notifications)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
