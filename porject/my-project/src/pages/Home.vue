<template>
  <div id="hbox">
    <img
      v-show="value"
      id="img1"
      src="https://z11.tuanimg.com/imagev2/wxyy/750x110.0b69422bdf3d9c9ba1db3b3a5a142348.png"
      class="img1"
    />
    <Homeheader />
    <Hometab />
    <Homeswipe />
    <Homegrid />
    <Homemain />
  </div>
</template>
<script>
import Homeheader from "../components/Home/Home-header";
import Hometab from "../components/Home/Home-tab";
import Homeswipe from "../components/Home/Home-swipe";
import Homegrid from "../components/Home/Home-grid";
import Homemain from "../components/Home/Home-main";

export default {
  components: {
    Homeheader,
    Hometab,
    Homeswipe,
    Homegrid,
    Homemain
  },
  data() {
    return {
      timer: "",
      value: 1
    };
  },
  methods: {
    get() {
      this.value = 0;
    }
  },
  mounted() {
    this.timer = setTimeout(this.get, 4000);
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  
};
</script>

<style>
@import "../scss/Home/home.css";
</style>

