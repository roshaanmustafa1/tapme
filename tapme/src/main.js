import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-toastification/dist/index.css";
import "@/style.scss";
import "@/responsive.scss";

const options = {};

Vue.use(Toast, options);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const firebaseConfig = {
  apiKey: "AIzaSyD5yyPo05z6tGphdXj3grGsmxhiH-jxQyc",
  authDomain: "tapme-c4e7c.firebaseapp.com",
  projectId: "tapme-c4e7c",
  storageBucket: "tapme-c4e7c.appspot.com",
  messagingSenderId: "211245439908",
  appId: "1:211245439908:web:98f5b5d03c6ac375c2bf31",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);
Vue.prototype.$app = app;
Vue.prototype.$database = database;
Vue.prototype.$db = firestore;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
