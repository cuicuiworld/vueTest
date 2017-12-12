<template>
    <div id="swiperContainer">
        <swiper :option="swiperOption" class="swiper-box" ref="mySwiper">
            <swiper-slide v-for="(item, index) in indexColumn" :key="index">
                <pull-container :type="item.classpath"></pull-container>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import pullContainer from "@/page/index/pullContainer";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        onSlideChangeStart: this.slideChangeCallBack,
        onSliderMove: this.slideMoveCallBack,
        onTouchEnd: this.touchEndCallBack
      }
    };
  },
  components: {
    pullContainer
  },
  methods: {}
};
</script>
<style lang="css" scoped>

</style>