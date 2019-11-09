<template>
  <van-tabbar   v-show="test"
  active-color="red"
  inactive-color="black">
    <van-tabbar-item  to="/home" icon="home-o">今日特卖</van-tabbar-item>
    <van-tabbar-item to="/discounts" icon="bookmark-o">淘特价</van-tabbar-item>
    <van-tabbar-item to="/brand" icon="envelop-o">品牌团</van-tabbar-item>
    <van-tabbar-item info="3" to="/goodscar" icon="shopping-cart-o" @click="di">购物车</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      test: true
    };
  },
  methods:{
    di(){
      this.test= !this.test
    }
  }
};
</script>