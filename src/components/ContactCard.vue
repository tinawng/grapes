<template>
  <div class="dimensions p-12 flex items-center border border-black">
    <div class="flex flex-col justify-between bb">
      <span
        class=" text-sm"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="0"
        >WANT TO SEE MORE?</span
      >
      <Spacer
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="150"
      />
      <span
        class=" text-3xl leading-none"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="250"
        >_HIRE <strong>TINA</strong></span
      >
      <span
        class=" text-sm"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="400"
        >Flexible, adaptable 18-in, 20-out audio interface with vast
        connectivity, powerful features, top-tier sound quality and a focus on
        creative workflow.</span
      >
      <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="650">
        <button
          class="py-2  w-48  text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black button"
        >
          EXPLORE
        </button>
      </div>
    </div>
    <div class="flex flex-col justify-between items-center h-full">
      <g-image class="h-48 w-48 rounded-full" src="~/assets/images/tina.jpg" />
      <strong class="text-3xl ">Tina Wang</strong>
      <g-image class="aa mx-auto" src="~/assets/images/motto.png" />
      <Spacer />
      <span class="text-lg">github.com/tinawng</span>
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
  width: 100%;
  max-width: 1033px;
  height: 80vh;
  max-height: 463px;
}
.aa {
  width: 50%;
}

.bb {
  height: 80%;
}
</style>