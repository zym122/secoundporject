<template>
  <div class="box1">
    <img class="himg1" src="https://status.tuanimg.com/statics/mz/index/img/search-logo-new.png" alt />
    <van-search  placeholder="请输入搜索关键词" show-action shape="round" >
      <div slot="action" >
        <a href="###">
          <img class="himg2" src="https://status.tuanimg.com/statics/mz/index/img/category-icon.png" alt />
        </a>
      </div>
    </van-search>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {};
</script>
