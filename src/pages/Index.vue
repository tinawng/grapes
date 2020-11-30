<template>
  <Layout :nav_floating="true" :nav_shifted_left="true">
    <section ref="section1" id="section1" class="relative">
      <div class="h-full w-1/2 flex flex-col justify-center">
        <div class="flex flex-col justify-between xl:h-96 h-64">
          <h6 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="0">
            INTRODUCING
          </h6>
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
        <div class="flex flex-col justify-between xl:h-96 h-64">
          <h6 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="0">
            MORPHING ANALOG POLYSYNTH
          </h6>
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
        <div class="h-1/2 w-1/2 mb-8 flex items-center">
          <div class="flex flex-col justify-between xl:h-32 h-24">
            <h6>RANGES</h6>
            <Spacer />
            <h3>Ready for you to explore</h3>
          </div>
        </div>
        <div class="h-1/2 w-1/2 mb-8 flex items-center">
          <div class="flex flex-col justify-between xl:h-32 h-24">
            <h6>
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
            <h5
              class="py-1 xl:w-64 w-48 bg-brand-white text-center text-red-800 font-bold tracking-5"
              style="padding-left: 0.6rem"
            >
              BRUTE
            </h5>
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
            <h5
              class="py-1 xl:w-64 w-48 bg-brand-white text-center text-yellow-700 font-bold tracking-5"
              style="padding-left: 0.6rem"
            >
              FREAK
            </h5>
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
            <h5
              class="py-1 xl:w-64 w-48 bg-brand-white text-center text-deepskyblue-200 font-bold tracking-5"
              style="padding-left: 0.6rem"
            >
              LAB
            </h5>
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
            <h5
              class="py-1 xl:w-64 w-48 bg-brand-white text-center text-blue-600 font-bold tracking-5"
              style="padding-left: 0.6rem"
            >
              FUSE
            </h5>
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
            <h5
              class="py-1 xl:w-64 w-48 bg-brand-white text-center text-gray-700 font-bold tracking-5"
              style="padding-left: 0.6rem"
            >
              STEP
            </h5>
          </div>
          <g-image class="w-full h-full hover-zoom" src="@images/step.jpg" />
        </g-link>
      </div>
    </section>
    <section ref="section4" id="section4"></section>
    <section ref="section5" id="section5" class="mt-20 relative">
      <g-image
        class="absolute-image"
        :class="[show_card ? 'blur' : '']"
        style="right: 0vw"
        src="@images/microfreak-vocoder.png"
      />
      <div
        class="w-1/2 h-full flex flex-col justify-center"
        :class="[show_card ? 'blur' : '']"
      >
        <div class="flex flex-col justify-between xl:h-96 h-64">
          <h6>FLUENT IN CHAOS</h6>
          <Spacer />
          <h1>
            <span>micro<strong>freak</strong> vocoder</span>
          </h1>
          <h6>
            16-band vocoder with accessible real-time voicing controls,
            detachable gooseneck microphone and a slick new aesthetic.
          </h6>

          <g-link to="/freak/microfreak" class="text-brand-black">
            <button class="text-button">EXPLORE</button>
          </g-link>
        </div>
      </div>

      <transition name="slide-fade">
        <ContactCardModal v-if="show_card" />
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
    show_card: false,
  }),

  mounted() {
    var self = this;
    intersectionTrigger(this.$refs["section1"]);
    intersectionTrigger(this.$refs["section2"]);
    intersectionTrigger(this.$refs["section3"]);
    intersectionTrigger(this.$refs["section4"]);
    intersectionTrigger(this.$refs["section5"], () => {
      setTimeout(() => {
        self.show_card = true;
      }, 100);
    });

    this.$event_bus.$on("scrolling", () => {
      self.show_card = false;
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

.blur {
  transition: filter 1.141s;
  filter: blur(5px);
}

section {
  height: 100vh;
  max-height: calc(100vw * 0.47);
  width: calc(100vw - 18vw);
}
</style>
