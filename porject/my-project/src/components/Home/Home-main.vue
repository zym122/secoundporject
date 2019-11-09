<template>
  <van-list
    :offset="50"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-card
      v-for="(r,index) in restaurantsComputed"
      :key="index"
      num="1"
      :price="r.price"
      :origin-price="r.oldprice"
      :title="r.title"
      :thumb="r.url"
      @click="homeTodetail(index)"
    ></van-card>
  </van-list>
</template>
<script>
import Vue from "vue";
import { Card, list } from "vant";
Vue.use(Card);
Vue.use(list);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      porject: []
    };
  },
  computed: {
    search() {
      return this.$store.getters.getAuthor;
    },
    restaurantsComputed() {
      if (this.search.value) {
        return this.porject.filter(item => {
          window.console.log(item);
          if (item.name.indexOf(this.search.value) >= 0) {
            return item;
          }
        });
      } else {
        return this.porject;
      }
    }
  },
  methods: {
    homeTodetail(index) {
      this.$router.push({
        name: "detail",
        params: {
          id: index
        }
      });
      // window.location.href
      // window.console.log(url);
    },
    onLoad() {
      this.$axios.get("http://localhost:3000/porject").then(({ data }) => {
        this.porject = this.porject.concat(data);

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.porject.length >= 10) {
          this.finished = true;
        }
      });
      window.console.log("到底部了");
    }
  }
};
</script>