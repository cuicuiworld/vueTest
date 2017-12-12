<template>
    <div id="shopMenu">
        <div class="tab-menu v-flexbox">
            <div class="tab-item v-flexbox-item" v-for="item in tablist">
                <a>
                    <i class="iconfont" v-html="item.iconUrl"></i>
                    <div class="tab-item-title">{{item.title}}</div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import "@/assets/css/icon.css";
export default {
  data() {
    return {
      tablist: [
        { title: "票券", key: "1", iconUrl: "&#xe602;" },
        { title: "设备", key: "2", iconUrl: "&#xe611;" },
        { title: "饮品", key: "3", iconUrl: "&#xe604;" },
        { title: "周边", key: "4", iconUrl: "&#xe626;" }
      ] //tab数据
    };
  }
};
</script>
<style lang="css" scoped>
.v-flexbox {
  width: 100%;
  text-align: center;
  display: -webkit-box;
  display: -o-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
}

.v-flexbox .v-flexbox-item {
  -webkit-box-flex: 1;
  -o-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 20px;
}

.tab-menu {
  position: relative;
  padding: 5px 0;
  background: #fff;
}

.tab-item-title {
  font-size: 13px;
}

.active a {
  color: #ff6666;
}

.tab-menu::before {
  position: absolute;
  top: 0;
  left: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #d9d9d9;
  color: #d9d9d9;
  content: " ";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
</style>