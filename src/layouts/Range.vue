<template>
  <div class="nav-ui-padding bg-brand-white flex justify-center">
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