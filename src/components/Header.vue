<template>
  <div class="fixed nav-ui">{{this.$router.currentRoute.path}}</div>
</template>

<script>
export default {
  
  data: () => ({
    show: true
  }),
  watch:{
    $route (to, from){
      console.log(to);
      console.log(from);
        this.show = false;
    }
} 
  
};
</script>

<style>
</style>