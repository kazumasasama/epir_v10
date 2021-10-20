import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABZx9U0rceQTxW_wU-N3XTlDKKJmaFJVI",
  authDomain: "epir-yoyaku.firebaseapp.com",
  projectId: "epir-yoyaku",
  storageBucket: "epir-yoyaku.appspot.com",
  messagingSenderId: "1091225060616",
  appId: "1:1091225060616:web:5d4f713d82a374890318bd",
  measurementId: "G-TG4PB2FZ6P"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default {db, firebase};


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
