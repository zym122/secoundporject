<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Tabbar v-show="test" />
  </div>
</template>

<script>

import Tabbar from "./components/Tabbar.vue";

export default {
  data(){
    return {
      test:true
    }
  },
  name: "app",
  components: {
    Tabbar
  }
};
</script>

<style>
</style>
