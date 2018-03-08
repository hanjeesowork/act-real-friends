// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyD5VdD-Sv9Hc4xeCsCeJsvnIucRpaKgnVA",
  authDomain: "act-real-friends.firebaseapp.com",
  databaseURL: "https://act-real-friends.firebaseio.com",
  projectId: "act-real-friends",
  storageBucket: "act-real-friends.appspot.com",
  messagingSenderId: "992465206309"
};

firebase.initializeApp(config)

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
