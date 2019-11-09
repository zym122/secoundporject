<template>
  <div class="mine" >
    <div class="header">
      <p class="mip11" @click="yhzt1()">个人中心</p>
      <ul class="miul1" v-show="zt" @click="navToDetal()">
        <li class="mili1">登录</li>
        <span class="misp1"></span>
        <li class="mili1">注册</li>
      </ul>
      <ul class="hmp1" v-show="tc1">
        <li>
          <span>欢迎 天空空的懒</span>
          <span @click="tc()">退出</span>
        </li>
      </ul>
    </div>
    <div class="nav">
      <ul class="mnul1">
        <li class="mnli1">我的订单</li>
        <li class="mnli1">
          <span class="mnsp1">查看全部</span>
          <span class="mnsp1">》</span>
        </li>
      </ul>
      <Minegrid />
    </div>
    <div class="main1">
      <ul class="mmul1">
        <li class="mmli1">
          <span>购物车</span>
          <span>》</span>
        </li>
        <li class="mmli1">
          <span>优惠券</span>
          <span>》</span>
        </li>
      </ul>
    </div>
    <div class="main1">
      <ul class="mmul1">
        <li class="mmli1">
          <span>收藏夹</span>
          <span>》</span>
        </li>
        <li class="mmli1">
          <span>足迹</span>
          <span>》</span>
        </li>
      </ul>
    </div>
    <div class="main1">
      <ul class="mmul1">
        <li class="mmli1">
          <span>帮助与客服</span>
          <span>》</span>
        </li>
        <li class="mmli1">
          <span>下载折800App</span>
          <span>》</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Minegrid from "../components/Mine-grid";

export default {
  data() {
    return {
      yhzt: this.$route.params.yhzt,
      zt: true,
      tc1: false
    };
  },
  components: {
    Minegrid
  },
  methods: {
    tc() {
      this.zt = true;
      this.tc1 = false;
    },
    yhzt1() {
      var hzt = this.$route.params.yhzt;
      window.console.log(hzt);

      if (hzt) {
        this.zt = false;
        this.tc1 = true;
      }
    },
    navToDetal() {
      this.$router.push({
        name: "login"
      });
      // window.location.href
    }
  }
};
</script>
<style>
@import "../scss/Mine/mine.css";
</style>