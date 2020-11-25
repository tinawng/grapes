<template>
  <div class="bg-brand-white flex justify-center nav-ui-padding">
    <ScreenDebug />
    <div class="fixed top-0 left-0 nav-ui-padding w-full border-b" :style="'border-color: ' + range_color" />
    <div
      class="w-full flex flex-col items-center divide-y divide-brand-black"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import NavUI from "~/components/NavUI.vue";
import ScreenDebug from "~/components/ScreenDebug.vue";
export default {
  components: {
    NavUI,
    ScreenDebug,
  },
  props: ["range_color"],
};
</script>

<style lang="postcss">
.nav-ui-padding {
  @apply pt-12;

  @screen lg {
    padding-top: calc(6vw + 1rem);
  }
  @screen xl {
    padding-top: calc(6vw + 2rem);
  }
}
</style>