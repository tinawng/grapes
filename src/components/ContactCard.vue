<template>
  <div class="dimensions flex border border-black">
    <div class="flex flex-col justify-between xl:h-72 h-64">
      <span
        class="xl:text-lg text-sm"
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
        class="xl:text-5xl text-3xl leading-none"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="250"
        >_HIRE <strong>TINA</strong></span
      >
      <span
        class="xl:text-lg text-sm"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-delay="400"
        >Flexible, adaptable 18-in, 20-out audio interface with vast
        connectivity, powerful features, top-tier sound quality and a focus on
        creative workflow.</span
      >
      <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="650">
        <button
          class="py-2 xl:w-64 w-48 xl:text-lg text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black button"
        >
          EXPLORE
        </button>
      </div>
    </div>
    <div class="flex flex-col text-center">
      <g-image class="rounded-full" src="~/assets/images/tina.jpg" />
      <strong class="text-5xl">Tina Wang</strong>
      <g-image class="aa mx-auto" src="~/assets/images/motto.png" />
      <Spacer/>
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
  width: 80vw;
  height: 80vh;
}
.aa {
    width: 55%;
}
</style>