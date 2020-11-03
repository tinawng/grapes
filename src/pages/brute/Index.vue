<template>
  <!-- https://www.sonos.com/fr-fr/products/wireless-speakers -->
  <Layout>
    <span>brute</span>
    <div v-for="edge in $page.products.edges" :key="edge.node.name">
      <h2>{{ edge.node }}</h2>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<page-query>
query {
  products: allProducts {
    edges {
      node {
        name
        range
        baseline
        price
      }
    }
  }
}
</page-query>

<style>
</style>