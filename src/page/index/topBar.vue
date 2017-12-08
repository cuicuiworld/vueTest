<template>
    <div id="topBar">
        <!-- @click.stop阻止冒泡 -->
        <div class='topBar_item' v-for='item in navData' @click.top='topItemClick(item)' :class="{topActive:selected == item.route}">
            <div class='topBar_name'>{{item.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: "topBar",
  data() {
    return {
      navData: [
        { name: "自营产品", class: "selfProduct", route: "selfProduct" },
        { name: "票券活动", class: "ticketEvent", route: "ticketEvent" }
      ],
      selected: "selfProduct"
    };
  },
  methods: {
    init() {
      if (
        this.$route.name === "selfProduct" ||
        this.$route.name === "ticketEvent"
      ) {
        this.selected = this.$route.name;
      }
    },
    topItemClick(item) {
    console.log(item);
    this.$router.push({ name: item.route });
    this.selected = item.route;
  }
  }
}
</script>
<style lang='css'>
#topBar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 36px;
  z-index: 999;
  display: flex;
  background: #fff;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
#topBar .topBar_item {
  flex: 1;
  color: #fff;
  background-color: #3e3d42;
}

#topBar .topBar_name {
  font-size: 12px;
  text-align: center;
  line-height: 36px;
}

#topBar::after {
  content: " ";
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 70px;
  bottom: 0;
  border-left: 1px solid #d5d5d6;
  color: #d5d5d6;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.topActive {
  background-color: #5b5b5b;
}
</style>


