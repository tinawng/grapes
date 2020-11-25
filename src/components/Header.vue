<template>
  <!-- {{this.$router.currentRoute.path}} -->
  <div
    v-show="true"
    :class="['fixed nav-ui', !is_index ? 'bg-brand-white' : '']"
  >
    <div class="h-full w-full flex-center-y justify-between">
      <h4>
        <strong>_ARTURIA</strong>
      </h4>
      <h5
        class="w-1/3 flex justify-between margin-transition"
        :style="{
          'margin-right': is_index ? '33%' : '',
          opacity: (is_index && is_on_top) || !is_index ? '100' : '0',
        }"
      >
        <g-link to="/brute">RANGES</g-link>
        <g-link to="/sounds">SOUNDS</g-link>
        <g-link to="/support">SUPPORT</g-link>
        <g-link to="/myarturia">MYARTURIA</g-link>
      </h5>
    </div>

    <div v-if="is_index">
      <button
        @click="force_show_nav = true"
        :class="[
          'fixed icon-button font-bold xl:font-medium',
          is_on_top ? 'opacity-0' : '',
        ]"
        style="top: 3vw; right: 3vw"
      >
        =
      </button>
      <button
        @click="scrollToNextSection()"
        class="fixed icon-button"
        style="bottom: 3vw; left: 3vw; padding-bottom: 0.2rem"
      >
        ↓
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    is_index: true,
    is_on_top: true,
    force_show_nav: false,
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

  methods: {
    scrollToNextSection() {
      this.$scrollTo("#" + window.current_section);
    },
  },
};
</script>

<style scoped>
.margin-transition {
  transition: margin 2.282s, opacity .61s;
}
</style>