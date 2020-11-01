<template>
  <div class="fixed h-full w-full position flex justify-center items-center">
    <ContactCard/>
  </div>
</template>

<script>
import ContactCard from "~/components/ContactCard.vue";
export default {
  components: {
    ContactCard
  },

}
</script>

<style scoped>
.position {
  top: 0;
  left: 0;
}
</style>