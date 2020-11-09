<template>
  <Layout :nav_floating="true" :nav_shifted_left="true">
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
          <g-link
            class="text-brand-black"
            to="/fuse/audiofuse-studio"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="650"
          >
            <button
              class="py-2 xl:w-64 w-48 xl:text-lg text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black button"
            >
              EXPLORE
            </button>
          </g-link>
        </div>
        <g-image
          class="absolute-image"
          src="@images/audiofuse-studio.png"
        />
      </div>
    </section>
    <section ref="section2" id="section2" class="flex">
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
            data-aos-delay="200"
            >_POLY<strong>BRUTE</strong></span
          >
          <span
            class="xl:text-lg text-sm"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="300"
            >6-voice analog powerhouse, with unprecedented expressivity and
            sound morphing capabilities, built to let you perform fearlessly,
            compose with fluidity, and explore sound in perpetual motion.</span
          >

          <g-link
            to="/brute/polybrute"
            class="text-brand-black"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-delay="400"
          >
            <button
              to="/brute"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="400"
              class="py-2 xl:w-64 w-48 xl:text-lg text-sm hover:bg-brand-black hover:text-brand-white border border-brand-black"
            >
              EXPLORE
            </button>
          </g-link>
        </div>
      </div>
    </section>
    <section ref="section3" id="section3">
      <div class="flex flex-wrap">
        <div class="w-1/2 flex h-1/2 items-center" style="padding-top: 5vh">
          <div class="flex flex-col justify-between xl:h-32 h-24">
            <span
              class="xl:text-lg text-sm"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="0"
              >RANGES</span
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
        <div class="w-1/2 flex h-1/2 items-center" style="padding-top: 5vh">
          <div class="flex flex-col justify-between xl:h-32 h-24">
            <span
              class="mt-4 xl:text-lg text-sm"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              >Explore the ultimate limits of your synth and sembark on the most
              radical sound experience. Embrace a wide variety of synthetic
              soundsm find your own creative madness and push it to the extreme
              for something never seen before.</span
            >
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
            <span class="px-8 py-1 bg-brand-white text-xl xl:text-4xl text-red-800 font-bold tracking-5">BRUTE</span>
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
            <span class="px-8 py-1 bg-brand-white text-xl xl:text-4xl text-yellow-700 font-bold tracking-5">FREAK</span>
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
            <span class="px-8 py-1 bg-brand-white text-xl xl:text-4xl text-deepskyblue-200 font-bold tracking-5">LAB</span>
          </div>
          <g-image
            class="w-full h-full hover-zoom"
            src="@images/lab.jpg"
          />
        </g-link>
        <g-link
          to="/fuse"
          class="relative w-1/2 overflow-hidden"
          style="height: 23vw"
        >
          <div
            class="absolute w-full h-full pointer-events-none z-10 flex justify-center items-center"
          >
            <span class="px-8 py-1 bg-brand-white text-xl xl:text-4xl text-blue-600 font-bold tracking-5">FUSE</span>
          </div>
          <g-image
            class="w-full h-full hover-zoom"
            src="@images/fuse.jpg"
          />
        </g-link>
        <g-link
          to="/step"
          class="relative w-1/2 overflow-hidden"
          style="height: 23vw"
        >
          <div
            class="absolute w-full h-full pointer-events-none z-10 flex justify-center items-center"
          >
            <span class="px-8 py-1 bg-brand-white text-xl xl:text-4xl text-gray-700 font-bold tracking-5">STEP</span>
          </div>
          <g-image
            class="w-full h-full hover-zoom"
            src="@images/step.jpg"
          />
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
import ContactCardModal from "~/components/ContactCardModal.vue";
import Spacer from "~/components/Spacer.vue";

export default {
  components: {
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

    window.onscroll = function () {
      self.$event_bus.$emit("scrolling");
    };
  },
};
</script>

<style scoped>
.hover-zoom:hover {
  filter: brightness(75%);
  transform: scale(1.1);
}
.hover-zoom {
  transition: all 0.5s ease;
}
.h-1\/2 {
  height: 45vh;
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
