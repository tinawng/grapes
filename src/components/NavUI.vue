<template>
  <div class="z-40">
    <div
      :class="[
        floating ? 'fixed' : '',
        border_color ? 'bg-brand-white border-bottom ' : '',
        'w-full flex justify-between',
      ]"
      :style="'top: 0; left: 0; border-color: ' + border_color"
    >
      <div
        :class="[
          shifted_left ? 'nav-shifted-left' : 'slow-transition',
          'paddings w-full flex items-center justify-between',
        ]"
      >
        <h4><strong>_ARTURIA</strong></h4>
        <h5
          :class="[
            nav_hidden ? 'opacity-0' : '',
            'w-30vw flex justify-between',
          ]"
        >
          <span>RANGES</span>
          <span>COMMUNITY</span>
          <span>SUPPORT</span>
          <span>MYARTURIA</span>
        </h5>
      </div>
    </div>
    <button
      @click="nav_hidden = false"
      :class="[
        !nav_hidden ? 'opacity-0' : '',
        'fixed icon-button font-bold xl:font-medium',
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
</template>

<script>
export default {
  props: ["floating", "shifted_left", "border_color"],
  data: () => ({
    nav_hidden: false,
  }),

  mounted() {
    this.$event_bus.$on("scrolling", () => {
      this.nav_hidden = window.pageYOffset >= 100;
      this.shifted_left = window.pageYOffset < 100;
    });
  },

  methods: {
    scrollToNextSection() {
      this.$scrollTo("#" + window.current_section);
    },
  },
};
</script>

<style lang="postcss" scoped>
.paddings {
  @apply h-16;
  @screen lg {
    @apply h-24;
  }
  @screen xl {
    @apply h-32;
  }
  /* padding-top: 2.5vw;
  padding-bottom: 2.5vw; */
  padding-left: 3vw;
  padding-right: 3vw;
}

.slow-transition {
  transition: all 1.61s ease-in;
}
.nav-shifted-left {
  padding-right: 35vw;
}
.w-30vw {
  width: 30vw;
}
.opacity-0 {
  transition: opacity 0.414s ease-in;
}
.border-bottom {
  border-bottom: 1px solid;
}
</style>