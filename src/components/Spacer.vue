<template>
  <div ref="element" class="fix-width border-style"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "3rem"
    },
  },
  mounted() {
    const element = this.$refs["element"];
    element.style.width = this.width
  }
};
</script>

<style scoped>
.border-style {
  border-bottom: 2px solid black;
}
/* .fix-width {
  width: 3rem;
} */
</style>