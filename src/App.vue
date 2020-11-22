<template>
  <div id="main-wrapper">
      <transition name="fade" appear>
        <router-view />
      </transition>
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity 5.5s;
}

.fade-enter {
  opacity: 0;
}
</style>