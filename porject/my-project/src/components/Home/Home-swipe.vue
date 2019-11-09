<template>
  <div>
      
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="simg1">
      </van-swipe-item>
      <van-swipe-item class="simg2">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
    
}
</script>