<template>
  <div class="bg-brand-white text-brand-black flex justify-center">
    <NavUI />
    <div class="w-full flex flex-col items-center zonapro-extralight">
      <slot />
    </div>
  </div>
</template>

<script>
import NavUI from "~/components/NavUI.vue";
export default {
  components: {
    NavUI,
  },
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
  transition: all .414s ease-out;
}
.slide-fade-leave-active {
  transition: all .414s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translatey(10vw);
  opacity: 0;
}

.zonapro-extralight {
  font-family: "ZonaPro ExtraLight";
}
.zonapro-light {
  font-family: "ZonaPro Light";
}
.zonapro-regular {
  font-family: "ZonaPro Regular";
}
.zonapro-bold {
  font-family: "ZonaPro Bold";
}
@font-face {
  font-family: "ZonaPro ExtraLight";
  src: url("../assets/fonts/ZonaPro-ExtraLight.otf");
}
@font-face {
  font-family: "ZonaPro Light";
  src: url("../assets/fonts/ZonaPro-Light.ttf");
}
@font-face {
  font-family: "ZonaPro Regular";
  src: url("../assets/fonts/ZonaPro-Regular.ttf");
}
@font-face {
  font-family: "ZonaPro Bold";
  src: url("../assets/fonts/ZonaPro-Bold.otf");
}
</style>