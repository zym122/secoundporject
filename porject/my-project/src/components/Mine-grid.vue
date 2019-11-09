<template>
  <div>
    <div class="grid">
      <ul class="gul">
        <li>
          <span>
            <img src="../assets/个人.png" alt />
          </span>
          <span>现金红包</span>
        </li>
        <li>
          <span>
            <img src="../assets/个人2.png" alt />
          </span>
          <span>9.9包邮</span>
        </li>
        <li>
          <span>
            <img src="../assets/个人3.png" alt />
          </span>
          <span>淘宝款</span>
        </li>
        <li>
          <span>
            <img src="../assets/个人4.png" alt />
          </span>
          <span>百元券</span>
        </li>
        <li>
          <span>
            <img src="../assets/个人5.png" alt />
          </span>
          <span>天天特价</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid).use(GridItem);
export default {};
</script>