import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Button,Input,Menu,Submenu,MenuItem,MenuItemGroup,Table,TableColumn,Upload,Message } from 'element-ui'
Vue.use(Button);
Vue.use(Input);
Vue.use(Menu);
Vue.use(Submenu); 
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Upload);
Vue.component(Message);
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
