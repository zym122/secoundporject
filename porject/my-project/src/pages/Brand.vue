<template>
  <div id="bbox">
    <div class="header">
      <span class="bsp1">&lt;</span> 品牌上新
    </div>
    <Brandtab />
    <ul class="bul">
      <li id="bli1" class="bli bli1">今日上新</li>
      <li id="bli2" class="bli bli2">全部品牌</li>
    </ul>
    <Brandmain />
  </div>
</template>
<script>
// import '../js/Brand.js'
import Brandtab from "../components/Brand/Brand-tab";
import Brandmain from "../components/Brand/Brand-main";

export default {
  components: {
    Brandtab,
    Brandmain
  }
};
</script>
<style>
@import "../scss/Brand/brand.css";
</style>