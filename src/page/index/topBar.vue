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
};
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
  overflow: hidden;
}
#topBar .topBar_item {
  flex: 1;
  color: #333;
  position: relative;
}

#topBar .topBar_name {
  font-size: 12px;
  text-align: center;
  line-height: 36px;
}

.topActive {
  color:rgb(255, 86, 2)!important;
}

.topActive::after{
  content: ' ';
  height: 1px;
  width: 50%;
  position: absolute;
  bottom:0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: solid 1px rgb(255, 86, 2);
}
</style>


