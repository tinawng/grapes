<template>
  <div class="bg-brand-white text-brand-black flex justify-center">
    <!-- <ScreenDebug /> -->
    <div :class="[nav_floating ? 'flex' : '', 'w-full']">
      <NavUI
        :nav_floating="nav_floating"
        :nav_shifted_left="nav_shifted_left"
        :nav_border_color="nav_border_color"
      />
      <div
        :class="[content_divide ? 'divide-y divide-brand-black':'', 'w-full flex flex-col items-center zonapro-extralight']"
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
  props: ["nav_floating", "nav_shifted_left", "nav_border_color", "content_divide"],
};
</script>

<style>
.global-paddings {
  padding: 3vw;
}

button {
  transition: all 0.414s ease-out !important;
}
button:focus {
  outline: none !important;
}

.slide-fade-enter-active {
  transition: all 0.616s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.616s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translatey(10vw);
  opacity: 0;
}

.zonapro-extralight {
  font-family: "Zona Pro ExtraLight";
}
/* .zonapro-light {
  font-family: "Zona Pro Light";
} */
/* .zonapro-regular {
  font-family: "Zona Pro Regular";
} */
.zonapro-bold {
  font-family: "Zona Pro Bold";
}
@font-face {
  font-family: "Zona Pro ExtraLight";
  src: url("../assets/fonts/ZonaPro-ExtraLight.otf");
}
/* @font-face {
  font-family: "Zona Pro Light";
  src: url("../assets/fonts/ZonaPro-Light.ttf");
} */
/* @font-face {
  font-family: "Zona Pro Regular";
  src: url("../assets/fonts/ZonaPro-Regular.ttf");
} */
@font-face {
  font-family: "Zona Pro Bold";
  src: url("../assets/fonts/ZonaPro-Bold.otf");
}
</style>