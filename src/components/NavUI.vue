<template>
  <div class="z-50">
    <div class="fixed w-full flex justify-between" style="top: 3vw; left: 3vw">
      <div
        :class="[
          nav_shifted_left ? 'nav-shifted-left' : 'slow-transition',
          'w-full pr-12 flex items-center justify-between ',
        ]"
      >
        <span class="zonapro-bold xl:text-2xl text-md"> _ARTURIA</span>
        <div
          :class="[
            nav_hidden ? 'opacity-0' : '',
            'w-35vw flex justify-around zonapro-extralight xl:text-lg text-sm',
          ]"
        >
          <span>RANGES</span>
          <span>COMMUNITY</span>
          <span>SUPPORT</span>
          <span>MYARTURIA</span>
        </div>
      </div>
    </div>
    <button
      @click="nav_hidden = false"
      :class="[
        !nav_hidden ? 'opacity-0' : '',
        'fixed w-8 h-8 xl:w-12 xl:h-12 text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black',
      ]"
      style="top: 3vw; right: 3vw"
    >
      =
    </button>
    <button
      @click="scrollToNextSection()"
      class="fixed w-8 h-8 xl:w-12 xl:h-12 text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black"
      style="bottom: 3vw; left: 3vw"
    >
      ↓
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    nav_shifted_left: true,
    nav_hidden: false,
  }),

  mounted() {
    var self = this;
    window.onscroll = function () {
      self.nav_hidden = window.pageYOffset >= 100;
      self.nav_shifted_left = window.pageYOffset < 100;
    };
  },

  methods: {
    scrollToNextSection() {
      this.$scrollTo("#" + window.current_section);
    },
  },
};
</script>

<style scoped>
.slow-transition {
  transition: all 1.61s ease-in;
}
.nav-shifted-left {
  padding-right: 35vw;
}
.w-35vw {
  width: 35vw;
}
.opacity-0 {
  transition: opacity 0.414s ease-in;
}
</style>