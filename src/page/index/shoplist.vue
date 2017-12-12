<template>
    <div id="shoplist">
        <!-- 菜单menu -->
        <shop-menu></shop-menu>

        <!-- 视图 -->
        <swiper-container></swiper-container>
    </div>
</template>
<script>
import shopMenu from "@/page/index/shopMenu";
import swiperContainer from "@/page/index/swiperContainer";
export default {
  data() {
    return {};
  },
  components: {
    shopMenu,
    swiperContainer
  }
};
</script>
<style lang="css" scoped>

</style>