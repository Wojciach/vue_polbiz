
<template>
  <div class="flex flex-col  h-screen overflow-hidden newSelection">
    
    <div id class="content relative z-10 p-8 m-2 h-1/2 ">
      <h1 id="title" class="text-4xl font-bold glow exo2">polbiz.net</h1>
      <p ref="element" class="mt-4 text-xl poppins-medium glow"></p>
    </div>
    <div class="flex flex-row flex-wrap w-full justify-center items-center exo2 h-1/4 ">
      <NuxtLink
      v-for="page in pageLinks" :key="page.name"
      :to="page.link"
      class="p-4 px-8 m-4 mx-10 boxGlow glow rounded-2xl innerShadow"
    > {{ page.name }}
  </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(TextPlugin);

const element = ref(null);

const pageLinks = [
  {
    link: '/o-nas',
    name: 'O nas'
  },
  {
    link: '/oferta',
    name: 'Oferta'
  },
  {
    link: '/kontakt',
    name: 'Kontakt'
  },
  {
    link: '/portfolio',
    name: 'Portfolio'
  }
]


onMounted(() => {

  if (element.value) {
    gsap.to(element.value, {
      delay: 2,
      duration: 1,
      text: "Rozwiń skrzydła w internecie",
    });}

  // CustomBounce animation
  gsap.from("#title", { 
    delay: 1,
    duration: 1,
    x: -210, 
    scaleX: 1,
    ease: "elastic",
  });

});




</script>

<style>

.innerShadow {
  box-shadow: inset 0 0 12px 12px rgba(0, 0, 0, 0.5);
}

.glow {
 text-shadow: 0px 0px 15px white, 0px 0px 3px rgb(98, 98, 39);
}

.boxGlow {
  box-shadow:
    0px 0px 8px 5px rgb(255, 255, 255),
    0px 0px 2px 2px  rgb(133, 135, 73),
    inset 0 0 5px 5px rgba(59, 21, 59, 0.3)
}
.boxGlow:hover {
  box-shadow: 0px 0px 15px 12px rgb(255, 255, 255), 0px 0px 3px 3px  rgb(133, 135, 73);
  transform: scale(1.02);
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

*::selection {
  background: rgb(132, 174, 55); /* Background color of the selection */
  color: #fff; /* Text color of the selection */
}



</style>

