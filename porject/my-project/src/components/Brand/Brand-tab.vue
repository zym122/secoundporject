<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="推荐"></van-tab>
      <van-tab title="女装"></van-tab>
      <van-tab title="内衣"></van-tab>
      <van-tab title="男装"></van-tab>
      <van-tab title="美食"></van-tab>
      <van-tab title="母婴"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 2
    };
  }
};
</script>