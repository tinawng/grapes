<template>
  <div
    class="dimensions bg-white py-12 px-16 xl:px-24 flex items-center border portrait:flex-col-reverse"
  >
    <div class="flex flex-col flex-grow justify-between h-90 lg:h-60">
      <span
        class="text-xs lg:text-sm"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="0"
        >IT IS JUST THE BEGINNING</span
      >
      <Spacer
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="150"
      />
      <span
        class="text-xl lg:text-3xl leading-none"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="250"
        >_WANT TO SEE <strong>MORE</strong> ?</span
      >
      <span
        class="text-xs lg:text-sm"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="400"
        >Full stack developer <br />
        connectivity, powerful features, top-tier sound quality and a focus on
        <br />
        creative workflow.</span
      >
      <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="650">
        <button
          class="py-1 w-32 text-xs lg:py-2 lg:w-48 lg:text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black button"
        >
          HIRE ME
        </button>
      </div>
    </div>
    <div class="flex flex-col justify-between items-center h-full lg:h-95">
      <g-image
        class="h-32 w-32 lg:w-48 lg:h-48 xl:h-64 xl:w-64 rounded-full"
        src="~/assets/images/tina.jpg"
      />
      <div class="flex flex-col items-center">
        <strong class="text-xl lg:text-3xl xl:text-5xl">Tina Wang</strong>
        <g-image
          class="w-24 lg:w-32 xl:w-48 mx-auto"
          src="~/assets/images/motto.png"
        />
      </div>
      <Spacer width="6rem" />
      <span class="text-xs xl:text-lg">github.com/tinawng</span>
    </div>
  </div>
</template>

<script>
import Spacer from "~/components/Spacer.vue";
export default {
  components: {
    Spacer,
  },
};
</script>

<style scoped>
.dimensions {
  width: 70%;
  max-width: 1333px;
  height: 60%;
  max-height: 650px;
}
.text-5xl {
  font-size: 2.4rem;
}
.aa {
  width: 50%;
}
</style>