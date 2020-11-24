<template>
  <div id="main-wrapper">
    <Header/>
      <transition name="fade" appear>
        <router-view />
      </transition>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  components: {
    Header,
  },

  mounted() {
    let self = this
    window.onscroll = function () {
      self.$event_bus.$emit("scrolling");
    };
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity 4s;
}

.fade-enter {
  opacity: 0;
}
</style>