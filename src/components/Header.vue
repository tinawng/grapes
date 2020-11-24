<template>
  <!-- {{this.$router.currentRoute.path}} -->
  <div v-show="true" :class="['fixed nav-ui', !is_index ? 'bg-brand-white':'']">
    <div class="h-full w-full flex-center-y justify-between">
      <h4>
        <strong>_ARTURIA</strong>
      </h4>
      <h5
        class="w-1/3 flex justify-between margin-transition"
        :style="{
          'margin-right': is_index && is_on_top ? '33%' : '',
          opacity: (is_index && is_on_top) || !is_index ? '100' : '0',
        }"
      >
        <g-link to="/brute">RANGES</g-link>
        <g-link>SOUNDS</g-link>
        <g-link>SUPPORT</g-link>
        <g-link>MYARTURIA</g-link>
      </h5>
    </div>

    <div v-show="is_index">
      <button
        @click="nav_hidden = false"
        :class="[
          'fixed icon-button font-bold xl:font-medium',
          is_on_top ? 'opacity-0' : '',
        ]"
        style="top: 3vw; right: 3vw"
      >
        =
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    is_index: true,
    is_on_top: true,
  }),
  watch: {
    $route(to, from) {
      this.is_index = to.path == "/";
    },
  },

  mounted() {
    this.is_index = this.$route.path == "/";

    this.$event_bus.$on("scrolling", () => {
      this.is_on_top = window.pageYOffset < (window.innerWidth * 12) / 100;
    });
  },
};
</script>

<style scoped>
.margin-transition {
  transition: margin 2.282s, opacity 1.141s;
}
</style>