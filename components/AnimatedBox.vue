<template>
    <div ref="box" class="w-32 h-32 bg-blue-500"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useNuxtApp } from '#app';
  
  const box = ref(null);
  const { $gsap } = useNuxtApp();

  var tl = $gsap.timeline();
  
  const handleMouseEnter = () => {
    tl.to(box.value, { rotation: 45, duration: 1 })
    .to(box.value, { rotation: 0, duration: 1 })
  };
  
  onMounted(() => {
    box.value.addEventListener('mouseenter', handleMouseEnter);
  });
  
  onUnmounted(() => {
    box.value.removeEventListener('mouseenter', handleMouseEnter);
  });
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  