<template>
  <div class="goodscar">
    <div id="shopping">
      <div id="conten">
        <div class="s-con">
          <!-- <input type="checkbox" name class="goods-checkb" />
          <div class="msg">
            <img
              src="https://z12.tuanimg.com/imagev2/trade/600x600.a24015277ac2d75e027010d4011b6079.150x150.jpg"
              alt
            />
            <p>多肉植物肉肉植物组合小盆栽论斤卖室内西游多肉套餐所肉植物新款</p>
          </div>
          <div class="unit-price">
            <p>
              <del>￥53.47</del>
            </p>
          </div>
          <div class="price">
            <p>￥28.80</p>
          </div>
          <div class="operation">
            <a href="###" class="del">删除</a>
          </div>-->
        </div>
      </div>
      <div class="s-footer">
        <input type="checkbox" id="bottom-checkb" style="display:none" />
        <a href="###" class="dels"></a>
        <div class="jiesuan">
          <span class="jianshu"></span>
          <p>
            合计：
            <span class="zongjia">0.00</span>
          </p>
          <input @click="di()" type="button" value="结算" class="btn" />
        </div>
      </div>
    </div>
    <ul class="mul">
      <li class="mli">
        <img
          class="mimg"
          src="https://z12.tuanimg.com/imagev2/trade/800x800.c49b1b9ac33a7fdda6071bc08ba89232.380x380.jpg"
          alt
        />
      </li>
      <li class="mli">哈尔城堡居家日用专场</li>
      <li class="mli">全场低至17.9元起</li>
    </ul>
    <ul class="mul">
      <li class="mli">
        <img
          class="mimg"
          src="https://z12.tuanimg.com/imagev2/trade/800x800.ff7a49ae91d25791371d435fb667e6f2.380x380.jpg"
          alt
        />
      </li>
      <li class="mli">哈尔城堡居家日用专场</li>
      <li class="mli">全场低至17.9元起</li>
    </ul>
    <ul class="mul">
      <li class="mli">
        <img
          class="mimg"
          src="http://z11.tuanimg.com/imagev2/trade/800x800.8938aebca7038ef2da7f30a870921c47.380x380.jpg.webp"
          alt
        />
      </li>
      <li class="mli">哈尔城堡居家日用专场</li>
      <li class="mli">全场低至17.9元起</li>
    </ul>
    <ul class="mul">
      <li class="mli">
        <img
          class="mimg"
          src="http://z13.tuanimg.com/imagev2/trade/800x800.18869657cecb725c5baf8c7cf6201a27.380x380.jpg.webp"
          alt
        />
      </li>
      <li class="mli">哈尔城堡居家日用专场</li>
      <li class="mli">全场低至17.9元起</li>
    </ul>
    <ul class="mul">
      <li class="mli">
        <img
          class="mimg"
          src="https://z12.tuanimg.com/imagev2/trade/800x800.3a6ebad07bc27e928cdb0838843ab281.380x380.jpg"
          alt
        />
      </li>
      <li class="mli">哈尔城堡居家日用专场</li>
      <li class="mli">全场低至17.9元起</li>
    </ul>
    <ul class="mul">
      <li class="mli">
        <img
          class="mimg"
          src="https://z12.tuanimg.com/imagev2/trade/800x800.ee071974b89c384d808e410839486824.380x380.jpg"
          alt
        />
      </li>
      <li class="mli">哈尔城堡居家日用专场</li>
      <li class="mli">全场低至17.9元起</li>
    </ul>
    <p id="p1"></p>
  </div>
</template>
<script>
import { realconsole } from "../js/goodscar";
export default {
  
  methods: {
    di() {
      this.$route.test = 1;
      this.$router.push({
        name: "home"
      });
      
    }
  },
  mounted: function() {
    realconsole();
  }
};
</script>
<style>
@import "../scss/Goodscar/goodscar.css";
</style>