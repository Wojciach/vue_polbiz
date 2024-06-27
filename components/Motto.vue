<template>
  <div>
    <p ref="element" class="text-3xl md:text-4xl poppins-medium text-black">
      ...
    </p>
  </div>
</template>

<script lang="ts" setup>
  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/TextPlugin";
  gsap.registerPlugin(TextPlugin);

  const element = ref(null);
  onMounted( () => {
    if (element.value) {
      gsap.to(element.value, {
        delay: 5,
        duration: 1,
        text: "Rozwiń skrzydła w internecie",
      });}
  })

</script>

<style>

</style>