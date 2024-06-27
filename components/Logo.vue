<template>
  <div>
    <h1 id="title2" class="text-7xl md:text-8xl font-bold">pol<span id="spanB">b</span><span id="spanI">i</span><span id="spanZ">z</span>.net</h1>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

onMounted( () => {
  gsap.set("#spanB", { className: "extraBG", delay: 2, duration: 1 });
  gsap.set("#spanZ", { className: "extraBG", delay: 3, duration: 1 });
  gsap.set("#spanI", { className: "extraBG", delay: 4, duration: 1 });
  gsap.to("#spanI, #spanZ, #spanB", {
    css: {
      backgroundColor: 'transparent',
      color: 'black'
    },
    delay: 5,
    duration: 4,
    ease: 'bounce'
  });

  gsap.from("#title2", { 
    delay: 1,
    duration: 1,
    x: -810, 
    opacity: 0,
    scaleX: 1,
    ease: "elastic",
  });
})

</script>

<style>

#title2 {
  background-image: linear-gradient(270deg, #db2929, #5319ff);
  background-size:  400%;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientAnimation 5s ease infinite;
  line-height: 1.2; /* Adjust line height */
  padding-bottom: 0.2em; /* Add padding to bottom */
  margin-bottom: 0.2em; /* Add margin to bottom */
  margin: 0;
  padding: 0;
}



@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.extraBG {
  position: relative;
  background-color: rgb(177, 213, 15);
  color: white;
}

</style>