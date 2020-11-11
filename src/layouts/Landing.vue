<template>
  <div class="bg-brand-white flex justify-center">
    <ScreenDebug />
    <div class="w-full flex">
      <NavUI :floating="true" :shifted_left="true" />
      <div class="w-full flex flex-col items-center">
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
};
</script>