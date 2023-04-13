/**
 * 该文件是整个项目的入口文件
 *
 */
// 引入vue.js
import Vue from "vue";
// 引入APP组件，它是所有组件的父组件
import App from "./App.vue";
// 引入vuerouter
import router from "./router";

// 关闭vue生成提示
Vue.config.productionTip = false;

// 创建vue实例
// 第一种方法
// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
// 第二种方法
new Vue({
  el: "#app",
  router,
  // 将APP组件放入容器中
  render: (h) => h(App),
});
