<template>
  <div class="login">
    <span class="lsp1" @click="loginTomine()"></span>
    <img
      class="limg1"
      src="https://i0.tuanimg.com/ms/zhe800m/dist/img/passport/m_banner_01.png"
      alt
    />
    <ul class="lul1" @click="qiehuan()">
      <li class="lli1 lli">短信验证登录</li>
      <li class="lli1">账号密码登录</li>
    </ul>
    <div id="inp1">
      <input class="inp11" type="text" placeholder="手机号" />
      <input class="inp11" type="password" placeholder="验证码" />
      <span class="inpsp">获取验证码</span>
    </div>
    <div id="inp2" style="display:none;">
      <input class="inp22" v-model="dlzh" type="text" placeholder="手机号/用户名" />
      <input class="inp22" v-model="dlmm" type="password" placeholder="密码" />
    </div>
      <span class="cw"></span>

    <p class="denglu" @click="dl()">登录</p>
    <p id="p1">没有收到验证码？</p>
    <p id="p2" style="display:none;">
      <a class="da1" href="###" @click="loginTozhuce()">快速注册</a>
      <a class="da2" href="###">忘记密码</a>
    </p>
    <img
      class="limg2"
      src="https://i0.tuanimg.com/ms/zhe800m/dist/img/passport/m_banner_03.jpg"
      alt
    />
    <img class="limg3" src="../assets/登录2.png" alt />
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      dlzh: "",
      dlmm: ""
    };
  },
  methods: {
    dl() {
      window.console.log();
      let key = Cookies.get("token");

      const token = Buffer.from(key, "base64").toString("utf8");
      var yh = JSON.parse(token);
      window.console.log(yh);
      var yhzh = yh.user;
      var yhps = yh.password;

      if (this.dlzh == yhzh && this.dlmm == yhps) {
        window.console.log("yes");
        this.$router.push({
          name: "mine",
          params: {
            yhzt: "yes"
          }
        });
      } else {
        window.console.log("no");
        var cw = document.getElementsByClassName('cw')[0];
        cw.innerHTML = "用户名或密码错误";
      }
    },
    qiehuan() {
      var lli1 = document.getElementsByClassName("lli1");
      var inp1 = document.getElementById("inp1");
      var inp2 = document.getElementById("inp2");
      var p1 = document.getElementById("p1");
      var p2 = document.getElementById("p2");

      for (var i = 0; i < lli1.length; i++) {
        lli1[i].index = i;
        lli1[i].onclick = function() {
          for (var i = 0; i < lli1.length; i++) {
            lli1[i].className = "lli1";
            lli1[i].index = i;
          }
          lli1[this.index].className = "lli1 lli";
          if (this.index == 0) {
            inp1.style.display = "block";
            inp2.style.display = "none";
            p1.style.display = "block";
            p2.style.display = "none";
          } else {
            inp1.style.display = "none";
            inp2.style.display = "block";
            p1.style.display = "none";
            p2.style.display = "block";
          }
        };
      }
    },
    loginTomine() {
      this.$router.push({
        name: "mine"
      });
      // window.location.href
    },
    loginTozhuce() {
      this.$router.push({
        name: "register"
      });
      // window.location.href
    }
  }
};
</script>
<style>
@import "../scss/Login/login.css";
</style>