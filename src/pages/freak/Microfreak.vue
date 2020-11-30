<template>
  <Layout>
    <div class="w-70 flex-col title">
      <div class="leading-none bb">
        <span>MICRO</span>
      </div>
      <div class="title-div">
        <strong>FREAK</strong>
      </div>
      <div class="title-div">
        <strong>FREAK</strong>
      </div>
      <div class="title-div cc">
        <strong>FREAK</strong>
      </div>
      <g-image class="absolute-image" src="@images/microfreak.png" />
    </div>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Product.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="postcss">
:root {
  --hh: 29vh
}

.title {
  font-size: var(--hh);
}
.title-div {
  height: calc(var(--hh)*1.05);
  overflow: hidden;
  font-size: calc(var(--hh)*1.1);
  line-height: .2;
  margin-top: calc(var(--hh)/2.2*(-1));
}
.bb {
  margin-bottom: calc(var(--hh)/2.5*(1));
}
.cc {
  color: #FF4F1D
}
.absolute-image {
  position: absolute;
  right: 0;
  top: 19%;
  height: 73%;
  width: auto;
}
</style>