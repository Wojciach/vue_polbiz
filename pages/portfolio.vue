<template>
  <div class="flex flex-col items-center justify-center h-screen glow text-3xl">
    <NuxtLink
      v-for="page in pagesData" :key="page.name"
      :to="page.link"
      class="p-4 px-8 m-4 mx-10 boxGlow glow rounded-2xl innerShadow"
    > {{ page.name }}
  </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const pagesData = [
  {
    link: 'https://recta.website/',
    name: 'Recta'
  },
  {
    link: 'https://tomix.polbiz.net/',
    name: 'Tomix Elewacje'
  },
  {
    link: 'https://emiston.polbiz.net',
    name: 'Emiston'
  }
]

</script>

<style>

</style>