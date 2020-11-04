<template>
  <div ref="element" class="border-style"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "3rem"
    },
    thin: {
      type: Boolean
    },
  },
  mounted() {
    const element = this.$refs["element"];
    element.style.width = this.width;
    if (this.thin) element.style.borderWidth = "thin";
  }
};
</script>

<style scoped>
.border-style {
  border-bottom: 2px solid black;
}
</style>