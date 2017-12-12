<template>
  <div id="selfPro">
    <!-- banner -->
    <my-banner :json="bannerJSON" v-if="bannerJSON.length>0"></my-banner>
    <!-- shoplist -->
    <shop-list></shop-list>
  </div>
</template>
<script>
import Mock from "mockjs";
// 生成轮播数据
const imgdata = Mock.mock({
  "list|3": [
    {
      "id|+1": 1,
      src: "@image(640x400, #ffcc33, #333,Banner)"
    }
  ]
});

import shopList from "@/page/index/shoplist";

export default {
  data() {
    return {
      bannerJSON: imgdata.list
    };
  },
  methods: {},
  components: {
    shopList
  }
};
</script>
<style lang="css" scoped>
#selfPro {
  margin-top: 36px;
}
</style>