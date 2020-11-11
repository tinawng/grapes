<template>
  <div class="bg-brand-white flex justify-center">
    <ScreenDebug />
    <div class="w-full">
      <NavUI
        :border_color="nav_border_color"
      />
      <div
        class="w-full flex flex-col items-center divide-y divide-brand-black"
      >
        <slot />
      </div>
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
  props: ["nav_border_color"],
};
</script>