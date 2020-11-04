<template>
  <!-- https://www.sonos.com/fr-fr/products/wireless-speakers -->
  <Layout>
    <section v-for="(edge, index) in $page.products.edges" :key="index">
      <g-image :src="edge.node.thumbnail"/>
      <h2>{{ edge.node }}</h2>
    </section>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    range: "brute",
  }),
};
</script>

<page-query>
query {
  products: allProducts(filter: {range: { eq: "brute"}}) {
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

<style>
</style>