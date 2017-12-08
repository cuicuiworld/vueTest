<template>
  <transition name='slideIn' mode="in-out">
    <div id="index">
      <!-- 视图 -->
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <!-- 底部导航栏 -->
      <nav-bar></nav-bar>
    </div>
  </transition>
</template>
<script>
import navBar from "@/page/index/navBar";

export default {
  components: {
    navBar
  }
};
</script>
<style lang="css" scoped>
#index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>