// 引入vue（vue.runtime.esm.js）
// 残缺版vue(不包含模板解析器)
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 创建vue实例
// 第一种方法
// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
// 第二种方法
new Vue({
  el: "#app",
  // 用render导入模板解析器
  render(createElement) {
    return createElement(App);
  },
});
