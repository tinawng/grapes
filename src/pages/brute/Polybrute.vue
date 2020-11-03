<template>
  <!-- https://www.sonos.com/fr-fr/shop/five.html -->
  <div>
    <span> poly </span>
    <section v-html="$page.post.content" />
  </div>
</template>

<script>
export default {};
</script>

<page-query>
query {
  post: post(id: "polybrute") {
    content
  }
}
</page-query>

<style>
</style>