<template>
  <Layout>
    <section ref="section1" id="section1">
      <div class="h-full w-1/2 flex flex-col justify-center">
        <div class="flex flex-col justify-between xl:h-72 h-64">
          <span
            class="xl:text-lg text-sm"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="0"
            >INTRODUCING</span
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
            >_AUDIO<strong>FUSE</strong> STUDIO</span
          >
          <span
            class="xl:text-lg text-sm"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
            >Flexible, adaptable 18-in, 20-out audio interface with vast
            connectivity, powerful features, top-tier sound quality and a focus
            on creative workflow.</span
          >
          <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="650">
            <button
              class="py-2 xl:w-64 w-48 xl:text-lg text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black button"
            >
              EXPLORE
            </button>
          </div>
        </div>
        <g-image
          class="absolute-image"
          src="~/assets/images/audiofuse-studio.png"
        />
      </div>
    </section>
    <section ref="section2" id="section2" class="flex">
      <div class="relative" style="flex-basis: 48%">
        <g-image
          class="absolute"
          src="~/assets/images/polybrute.jpg"
          style="left: -9vw; top: 3vw"
        />
      </div>
      <div
        class="h-full flex flex-col justify-center"
        style="flex-basis: 50%; margin-left: -4vw"
      >
        <div class="flex flex-col justify-between xl:h-72 h-64">
          <span
            class="xl:text-lg text-sm"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="0"
            >MORPHING ANALOG POLYSYNTH</span
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
            >_POLY<strong>BRUTE</strong></span
          >
          <span
            class="xl:text-lg text-sm"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
            >6-voice analog powerhouse, with unprecedented expressivity and
            sound morphing capabilities, built to let you perform fearlessly,
            compose with fluidity, and explore sound in perpetual motion.</span
          >

          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="650">
            <button
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="650"
              class="py-2 xl:w-64 w-48 xl:text-lg text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </section>
    <section ref="section3" id="section3">
      <div class="flex flex-wrap">
        <div class="w-1/2 flex h-1/2 items-center">
          <div class="flex flex-col justify-between xl:h-32 h-24">
            <span
              class="xl:text-lg text-sm"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="0"
              >INTRODUCING</span
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
              >Ready for you to explore</span
            >
          </div>
        </div>
        <div class="w-1/2 flex h-1/2 items-center">
          <div class="flex flex-col justify-between xl:h-32 h-24">
            <span
              class="mt-4 xl:text-lg text-sm"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              >Explore the ultimate limits of your synth and sembark on the most radical sound experience. Embrace a wide variety of synthetic soundsm find your own creative madness and push it to the extreme for something never seen before.</span
            >
          </div>
        </div>
        <g-image class="w-1/2 relative" src="~/assets/images/brute.jpg" />
        <g-image class="w-1/2 relative" src="~/assets/images/fuse.jpg" />
        <g-image class="w-full relative" src="~/assets/images/lab.jpg" />
        <g-image class="w-1/2 relative" src="~/assets/images/freak.jpg" />
        <g-image class="w-1/2 relative" src="~/assets/images/step.jpg" />
      </div>
    </section>
    <section ref="section4" id="section4">section4</section>
    <section ref="section5" id="section5">section5</section>
    <section ref="section5" id="section5">section6</section>
  </Layout>
</template>

<script>
import { intersectionTrigger } from "~/libs/IntersectionHelper.js";
import Spacer from "~/components/Spacer.vue";

export default {
  components: {
    Spacer,
  },

  mounted() {
    intersectionTrigger(this.$refs["section1"]);
    intersectionTrigger(this.$refs["section2"]);
    intersectionTrigger(this.$refs["section3"]);
    intersectionTrigger(this.$refs["section4"]);
    intersectionTrigger(this.$refs["section5"]);
    intersectionTrigger(this.$refs["section6"]);
  },
};
</script>

<style scoped>
.h-1\/2 {
  height: 50vh;
}
.margin-left {
  margin-left: 5vw;
}
.absolute-image {
  position: absolute;
  right: 3vw;
  top: 0;
  height: 100%;
  width: auto;
}

section {
  height: 100vh;
  width: calc(100vw - 19vw);
}
</style>
