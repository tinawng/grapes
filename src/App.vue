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
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity 5.5s;
}

.fade-enter {
  opacity: 0;
}
</style>