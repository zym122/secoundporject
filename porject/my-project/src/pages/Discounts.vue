<template>
    <div id="dbox">
       <Discountshead/>
       <Discountstab/>
       <Discountsswipe/>
       <Discountsgrid/>
       <Discountsnav/>
       <Discountsmain/>
    </div>
</template>
<script>
import Discountshead from '../components/Discounts/Discounts-head'
import Discountstab from '../components/Discounts/Discounts-tab'
import Discountsswipe from '../components/Discounts/Discounts-swipe'
import Discountsgrid from '../components/Discounts/Discounts-grid'
import Discountsnav from '../components/Discounts/Discounts-nav'
import Discountsmain from '../components/Discounts/Discounts-main'



export default {
    components:{
        Discountshead,
        Discountstab,
        Discountsswipe,
        Discountsgrid,
        Discountsnav,
        Discountsmain
    }
}
</script>
<style>
@import "../scss/Discounts/discounts.css";
</style>