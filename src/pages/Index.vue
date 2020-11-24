<template>
  <Layout :nav_floating="true" :nav_shifted_left="true">
    <section ref="section1" id="section1" class="relative">
      <div class="h-full w-1/2 flex flex-col justify-center">
        <div class="flex flex-col justify-between xl:h-72 h-64">
          <h5 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="0">
            introducing
          </h5>
          <Spacer
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="150"
          />
          <h1 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="250">
            <span>audio<strong>fuse</strong> studio</span>
          </h1>
          <h6 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="400">
            Flexible, adaptable 18-in, 20-out audio interface with vast
            connectivity, powerful features, top-tier sound quality and a focus
            on creative workflow.
          </h6>
          <g-link
            class="text-brand-black"
            to="/fuse/audiofuse-studio"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="650"
          >
            <button class="text-button">EXPLORE</button>
          </g-link>
        </div>
        <g-image class="absolute-image" src="@images/audiofuse-studio.png" />
      </div>
    </section>
    <section ref="section2" id="section2" class="relative flex">
      <div class="relative" style="flex-basis: 48%">
        <g-image
          class="absolute"
          src="@images/polybrute.jpg"
          style="left: -9vw; top: 3vw"
        />
      </div>
      <div
        class="h-full flex flex-col justify-center"
        style="flex-basis: 50%; margin-left: -4vw"
      >
        <div class="flex flex-col justify-between xl:h-72 h-64">
          <h5 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="0">
            morphing analog polysynth
          </h5>
          <Spacer
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="150"
          />
          <h1 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="200">
            <span>poly<strong>brute</strong></span>
          </h1>
          <h6 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="300">
            6-voice analog powerhouse, with unprecedented expressivity and sound
            morphing capabilities, built to let you perform fearlessly, compose
            with fluidity, and explore sound in perpetual motion.
          </h6>

          <g-link
            to="/brute/polybrute"
            class="text-brand-black"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            <button class="text-button">EXPLORE</button>
          </g-link>
        </div>
      </div>
    </section>
    <section ref="section3" id="section3">
      <div class="flex flex-wrap">
        <div class="w-1/2 flex h-1/2 items-center">
          <div class="flex flex-col justify-between xl:h-32 h-24">
            <h5 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="0">
              ranges
            </h5>
            <Spacer
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="150"
            />
            <h3
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="250"
              >Ready for you to explore</h3
            >
          </div>
        </div>
        <div class="w-1/2 flex h-1/2 items-center">
          <div class="flex flex-col justify-between xl:h-32 h-24">
            <h6
              class="mt-4"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
            >
              Explore the ultimate limits of your synth and sembark on the most
              radical sound experience. Embrace a wide variety of synthetic
              soundsm find your own creative madness and push it to the extreme
              for something never seen before.
            </h6>
          </div>
        </div>

        <g-link
          to="/brute"
          class="relative w-1/2 overflow-hidden"
          style="height: 23vw"
        >
          <div
            class="absolute w-full h-full pointer-events-none z-10 flex justify-center items-center"
          >
            <span
              class="py-2 xl:w-64 w-48 bg-brand-white xl:text-lg text-sm text-red-800 font-bold tracking-5"
              >BRUTE</span
            >
          </div>
          <g-image
            class="w-full h-full object-cover hover-zoom"
            src="@images/brute.jpg"
            style="object-fit: none"
          />
        </g-link>
        <g-link
          to="/freak"
          class="relative w-1/2 overflow-hidden"
          style="height: 23vw"
        >
          <div
            class="absolute w-full h-full pointer-events-none z-10 flex justify-center items-center"
          >
            <span
              class="px-8 py-1 bg-brand-white text-xl xl:text-3xl text-yellow-700 font-bold tracking-5"
              >FREAK</span
            >
          </div>
          <g-image
            class="w-full h-full object-cover hover-zoom"
            src="@images/freak.jpg"
          />
        </g-link>
        <g-link
          to="/lab"
          class="relative w-full overflow-hidden"
          style="height: 23vw"
        >
          <div
            class="absolute w-full h-full pointer-events-none z-10 flex justify-center items-center"
          >
            <span
              class="px-8 py-1 bg-brand-white text-xl xl:text-3xl text-deepskyblue-200 font-bold tracking-5"
              >LAB</span
            >
          </div>
          <g-image class="w-full h-full hover-zoom" src="@images/lab.jpg" />
        </g-link>
        <g-link
          to="/fuse"
          class="relative w-1/2 overflow-hidden"
          style="height: 23vw"
        >
          <div
            class="absolute w-full h-full pointer-events-none z-10 flex justify-center items-center"
          >
            <span
              class="px-8 py-1 bg-brand-white text-xl xl:text-3xl text-blue-600 font-bold tracking-5"
              >FUSE</span
            >
          </div>
          <g-image class="w-full h-full hover-zoom" src="@images/fuse.jpg" />
        </g-link>
        <g-link
          to="/step"
          class="relative w-1/2 overflow-hidden"
          style="height: 23vw"
        >
          <div
            class="absolute w-full h-full pointer-events-none z-10 flex justify-center items-center"
          >
            <span
              class="px-8 py-1 bg-brand-white text-xl xl:text-3xl text-gray-700 font-bold tracking-5"
              >STEP</span
            >
          </div>
          <g-image class="w-full h-full hover-zoom" src="@images/step.jpg" />
        </g-link>
      </div>
    </section>
    <section ref="section4" id="section4">section4</section>
    <section ref="section5" id="section5" class="relative">
      <transition name="slide-fade">
        <ContactCardModal v-if="show" />
      </transition>
    </section>
  </Layout>
</template>

<script>
import { intersectionTrigger } from "~/libs/IntersectionHelper.js";
import Layout from "~/layouts/Landing.vue";
import ContactCardModal from "~/components/ContactCardModal.vue";
import Spacer from "~/components/Spacer.vue";

export default {
  components: {
    Layout,
    ContactCardModal,
    Spacer,
  },

  data: () => ({
    show: false,
  }),

  mounted() {
    var self = this;
    intersectionTrigger(this.$refs["section1"]);
    intersectionTrigger(this.$refs["section2"]);
    intersectionTrigger(this.$refs["section3"]);
    intersectionTrigger(this.$refs["section4"]);
    intersectionTrigger(this.$refs["section5"], () => {
      setTimeout(() => {
        self.show = true;
      }, 100);
    });

    this.$event_bus.$on("scrolling", () => {
      self.show = false;
    });
  },
};
</script>

<style lang="postcss" scoped>
.hover-zoom:hover {
  filter: brightness(75%);
  transform: scale(1.1);
}
.hover-zoom {
  transition: all 0.5s ease;
}
.h-1\/2 {
  /* height: 50%; */
  @apply h-64
}
.margin-left {
  margin-left: 5vw;
}
.absolute-image {
  position: absolute;
  right: -3vw;
  top: 0;
  height: 100%;
  width: auto;
}

section {
  height: 100vh;
  max-height: calc(100vw * 0.47);
  width: calc(100vw - 19vw);
}
</style>
