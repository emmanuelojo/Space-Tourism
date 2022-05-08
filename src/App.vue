<script setup lang="ts"></script>

<template>
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade" appear mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
  <router-view> </router-view>
</template>

<style>
#app {
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

*,
body {
  margin: 0;
  padding: 0;
}
</style>
