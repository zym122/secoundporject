<template>
  <div class="register">
    <div class="header">
      <img class="rimg1" @click="registerTologin()" src="../assets/注册.png" alt />
      <span class="rsp1">注册</span>
    </div>
    <div id="inp1">
      <input class="inp11" v-model="zcyh" type="text" placeholder="请输入用户名" />
      <span class="rzsp1"></span>
      <input class="inp11" v-model="zcmm" type="password" placeholder="请输入密码" />
      <span class="rzsp2"></span>
    </div>
    <p class="zhuce" @click="zc">确认</p>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      zcyh: "",
      zcmm: ""
    };
  },
  methods: {
    registerTologin() {
      this.$router.push({
        name: "login"
      });
      // window.location.href
    },
    zc() {
      var info = {
        user: this.zcyh,
        password: this.zcmm
      };
      // 公式
      const token = Buffer.from(JSON.stringify(info)).toString("base64");
      Cookies.set("token",token);
    }
  }
};
</script>
<style>
@import "../scss/Register/register.css";
</style>