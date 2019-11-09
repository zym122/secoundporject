<template>
  <div class="detail" @click="xuaran()">
   
    <!-- <img
      class="dimg1"
      src="https://z11.tuanimg.com/imagev2/trade/700x700.3f33a0924661973d9ea5dd8d0aa25e60.600x.jpg"
      alt
    />
    <ul class="dul1">
      <li class="dli1"> 收藏</li>
      <li class="dli1">
        <span class="dsp1">
          <span>￥</span>
          <span class="dsp2">88</span>
        </span>
        <span class="dsp1">
          <span>￥</span>
          <span class="dsp2">144</span>
        </span>
        <span class="dsp1">包邮</span>
        <span class="dsp1">积分最高可抵¥2</span>
        <span class="dsp1"></span>
      </li>
    </ul>
    <ul class="dul2">
      <li class="dli2">
        <span class="dli2sp1">领券</span>
        <span class="dli2sp2">满500元减50元</span>
        <span class="dli2sp2">满300元减30元</span>
        <span class="dli2sp2">满200元减15元</span>
        <span class="dli2sp3">》</span>
      </li>
      <li class="dli2">
        <ul class="dul3">
          <li class="dli3">
            <span class="dli3sp1">促销</span>
            <span class="dli3sp2">
              <span class="dli3sp3">满折</span>
              <span class="dli3sp4">满2件8.8折,满3件8.2折</span>
            </span>
            <span>》</span>
          </li>
          <li class="dli3">
            <span class="dli3sp3">满折</span>
            <span class="dli3sp4">下单即得购物节福利11.1-11.10</span>
          </li>
          <li class="dli3">
            <span class="dli3sp3">满折</span>
            <span class="dli3sp4">评价最多送27积分</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="dul4">
      <li class="dli4">
        <img src="../assets/xq1.png" alt />
        <span class="dli4sp1">客服</span>
      </li>
      <li class="dli4">
        <img src="../assets/xq2.png" alt />
        <span class="dli4sp1">收藏</span>
      </li>
      <li class="dli4">
        <img src="../assets/xq3.png" alt />
        <span class="dli4sp1">购物车</span>
      </li>
      <li class="dli5">加入购物车</li>
      <li class="dli6">立即购买</li>
    </ul>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    xuaran() {
      var hid = this.$route.params.id;
      // window.console.log(hid);
      this.$axios.get("http://localhost:3000/porject").then(({ data }) => {
        var hval = data[hid];
        var jsp = [hval];
        window.console.log(jsp);

        var html = jsp.map(function(item) {
          return `<img class="dimg1"  src=${item.url} alt />
    <ul class="dul1">
      <li class="dli1"> ${item.title}</li>
      <li class="dli1">
        <span class="dsp1">
          <span>￥</span>
          <span class="dsp2">${item.price}</span>
        </span>
        <span class="dsp1">
          <span>￥</span>
          <span class="dsp2">${item.oldprice}</span>
        </span>
        <span class="dsp1">包邮</span>
        <span class="dsp1">积分最高可抵¥2</span>
        <span class="dsp1"></span>
      </li>
    </ul>
    <ul class="dul2">
      <li class="dli2">
        <span class="dli2sp1">领券</span>
        <span class="dli2sp2">满500元减50元</span>
        <span class="dli2sp2">满300元减30元</span>
        <span class="dli2sp2">满200元减15元</span>
        <span class="dli2sp3">》</span>
      </li>
      <li class="dli2">
        <ul class="dul3">
          <li class="dli3">
            <span class="dli3sp1">促销</span>
            <span class="dli3sp2">
              <span class="dli3sp3">满折</span>
              <span class="dli3sp4">满2件8.8折,满3件8.2折</span>
            </span>
            <span>》</span>
          </li>
          <li class="dli3">
            <span class="dli3sp3">满折</span>
            <span class="dli3sp4">下单即得购物节福利11.1-11.10</span>
          </li>
          <li class="dli3">
            <span class="dli3sp3">满折</span>
            <span class="dli3sp4">评价最多送27积分</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="dul4">
      <li class="dli4">
        <img src="../assets/xq1.png" alt />
        <span class="dli4sp1">客服</span>
      </li>
      <li class="dli4">
        <img src="../assets/xq2.png" alt />
        <span class="dli4sp1">收藏</span>
      </li>
      <li class="dli4">
        <img src="../assets/xq3.png" alt />
        <span class="dli4sp1">购物车</span>
      </li>
      <li class="dli5">加入购物车</li>
      <li class="dli6">立即购买</li>
    </ul>`;
        });
        var box = document.getElementsByClassName("detail")[0];
        box.innerHTML = html;
      });
    }
  }
};
</script>
<style>
@import "../scss/Detail/detail.css";
</style>