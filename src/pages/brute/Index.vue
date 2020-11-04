<template>
  <!-- https://www.sonos.com/fr-fr/products/wireless-speakers -->
  <Layout>
    <section v-for="(edge, index) in $page.products.edges" :key="index">
      <div class="flex justify-between aa">
        <g-image :src="edge.node.thumbnail" class="h-32" />
        <div class="flex-col">
          <span class="uppercase" v-html="formatProductName(edge.node.name)">
          </span>
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
  }),

  methods: {
    formatProductName(name) {
      let strs = name.split(this.range);
      return "_" + strs[0] + "<strong>" + this.range + "</strong>" + strs[1];
    }
  }
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
  /* padding-top: 3vw;
  padding-bottom: 3vw; */
}
</style>