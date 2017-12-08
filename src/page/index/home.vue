<template>
  <div id="home">
        <!-- 顶部部导航栏 -->
        <top-bar></top-bar>
        <!-- 视图 -->
        <transition name="fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
import topBar from "@/page/index/topBar";
export default {
  components: {
    topBar
  }
};
</script>

<style>
#home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 48px;
}
</style>
