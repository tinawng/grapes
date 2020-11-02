<template>
  <div
    class="dimensions bg-white py-8 lg:py-10 px-16 xl:px-24 flex items-center border portrait:flex-col-reverse"
  >
    <div class="flex flex-col flex-grow justify-between h-90 md:h-80 xl:h-70">
      <span
        class="text-xxs lg:text-xs xl:text-sm"
        data-aos="fade-up"
        :data-aos-duration="duration"
        data-aos-delay="0"
        >IT IS JUST THE BEGINNING</span
      >
      <Spacer
        data-aos="fade-up"
        :data-aos-duration="duration"
        data-aos-delay="150"
      />
      <span
        class="text-md lg:text-xl lg:text-2xl xl:text-3xl leading-none"
        data-aos="fade-up"
        :data-aos-duration="duration"
        data-aos-delay="250"
        >_WANT TO SEE <strong>MORE</strong> ?</span
      >
      <span
        class="text-xxs lg:text-xs xl:text-sm"
        data-aos="fade-up"
        :data-aos-duration="duration"
        data-aos-delay="400"
        >Full stack developer connectivity, powerful features,<br />
        top-tier sound quality and a focus on creative workflow.</span
      >
      <div data-aos="fade-up" :data-aos-duration="duration" data-aos-delay="650">
        <button
          class="text-xxs w-20 py-1 lg:w-32 lg:text-xs xl:py-2 xl:w-48 xl:text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black button"
        >
          HIRE ME
        </button>
      </div>
    </div>
    <div class="flex flex-col justify-between items-center h-full xl:h-95">
      <g-image
        class="h-20 w-20 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:h-64 xl:w-64 rounded-full"
        src="~/assets/images/tina.jpg"
      />
      <div class="flex flex-col items-center">
        <strong class="text-xl lg:text-3xl xl:text-4xl">Tina Wang</strong>
        <g-image
          class="w-20 lg:w-32 lg:lg:w-32 xl:w-40 mx-auto"
          src="~/assets/images/motto.png"
        />
      </div>
      <Spacer width="40%" />
      <span class="text-xxs lg:text-xs xl:text-md">github.com/tinawng</span>
    </div>
  </div>
</template>

<script>
import Spacer from "~/components/Spacer.vue";
export default {
  components: {
    Spacer,
  },

  data: () => ({
    duration: 616,
  }),
};
</script>

<style lang="scss" scoped>
.dimensions {
  width: 70%;
  max-width: 1333px;
  height: 60%;
  max-height: 553px;
}
.text-5xl {
  font-size: 2.4rem;
}

$aos-distance: 20px;
@import 'node_modules/aos/src/sass/aos.scss';
</style>