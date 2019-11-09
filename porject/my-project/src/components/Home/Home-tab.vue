<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="推荐"></van-tab>
      <van-tab title="女装"></van-tab>
      <van-tab title="内衣"></van-tab>
      <van-tab title="男装"></van-tab>
      <van-tab title="美食"></van-tab>
      <van-tab title="母婴"></van-tab>
      <van-tab title="儿童"></van-tab>
      <van-tab title="家纺"></van-tab>
      <van-tab title="居家"></van-tab>
      <van-tab title="鞋品"></van-tab>
      <van-tab title="箱包"></van-tab>
      <van-tab title="数码"></van-tab>
      <van-tab title="家电"></van-tab>
      <van-tab title="美妆"></van-tab>
      <van-tab title="配饰"></van-tab>
      <van-tab title="运动"></van-tab>
      <van-tab title="中老年"></van-tab>
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