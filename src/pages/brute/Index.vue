<template>
  <!-- https://www.sonos.com/fr-fr/products/wireless-speakers -->
  <Layout>
    <div class="w-full bg-black">brute</div>
    <section v-for="(edge, index) in $page.products.edges" :key="index">
      <div class="flex justify-between items-center aa">
        <g-image
          :src="formatThumbnailPath(edge.node)"
          class="md:h-32 lg:h-48 xl:h-56"
        />
        <div
          class="ml-auto w-1/3 flex flex-col content-between md:h-40 lg:h-48 xl:h-56"
        >
          <div
            class="mb-1 md:text-2xl lg:text-3xl xl:text-4xl uppercase"
            v-html="formatProductName(edge.node.name)"
          ></div>
          <div class="md:text-sm lg:text-md xl:text-lg">
            {{ edge.node.baseline }}
          </div>
          <div v-if="edge.node.variants.length" class="ml-auto">
            <button
              :class="[
                index == selected_variant
                  ? 'bg-brand-black text-brand-white'
                  : 'hover:bg-brand-black hover:text-brand-white ',
                'ml-2 w-6 h-6 text-xs lg:w-8 lg:h-8 lg:text-sm border border-brand-black',
              ]"
              v-for="(variant, index) in edge.node.variants"
              :key="index"
              @click="selected_variant = index"
            >
              {{ variant }}
            </button>
          </div>
          <div class="mt-auto md:text-sm lg:text-md xl:text-lg">
            <strong>${{ edge.node.price }}</strong>
          </div>
        </div>
      </div>
      <Spacer width="100%" :thin="true" />
    </section>
  </Layout>
</template>

<script>
import Spacer from "~/components/Spacer.vue";
export default {
  components: {
    Spacer,
  },

  data: () => ({
    range: "brute",
    selected_variant: 0,
  }),

  methods: {
    formatProductName(name) {
      let strs = name.split(this.range);
      return "_" + strs[0] + "<strong>" + this.range + "</strong>" + strs[1];
    },
    formatThumbnailPath(node) {
      if (node.variants.length) {
        let strs = node.thumbnail.split("thumbnail");
        return (
          strs[0] +
          "thumbnail-" +
          node.variants[this.selected_variant] +
          strs[1]
        );
      } else {
        return node.thumbnail;
      }
    },
  },
};
</script>

<page-query>
query {
  products: allProducts(filter: {range: { eq: "brute"}}, sortBy: "order", order: ASC) {
    edges {
      node {
        name
        baseline
        price
        thumbnail
        variants
      }
    }
  }
}
</page-query>

<style scoped>
.aa {
  padding: 4.5vw;
}

section {
  width: calc(100vw - 7vw);
}
</style>