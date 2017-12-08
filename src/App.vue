<template>
    <div id="app">
        <!-- 将要过渡的元素用transition包裹，并设置过渡的name -->
        <transition name="">
            <keep-alive>
                <router-view class='child-view v'></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
  data() {
    return {
      transitonName: ""
    };
  },
  // 依据路由钩子函数，设置左右翻页转场动画
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$route.isBack;
    if (isBack) {
      this.transitonName = "slide-right";
    } else {
      this.transitonName = "slide-left";
    }
    next();
  }
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #f8f8f8;
}

.child-view {
  transition: all 0.3s ease;
}

[v-cloak] {
  display: none;
}
</style>
