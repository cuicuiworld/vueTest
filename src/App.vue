<template>
    <div id="app">
        <transition>
            <keep-alive>
                <router-view class='child-view'></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
}
</script>
<style lang='stylus'>
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: #f8f8f8;

    .child-view {
        transition: all 0.3s ease;
    }
}
</style>
