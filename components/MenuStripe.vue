<template>
    <div id="menuStripe" class="m-2 relative flex flex-wrap justify-center exo2 text-white">
      <NuxtLink
        v-for="page in pageLinks" :key="page.name"
        :to="page.link"
        class="p-4 px-8 m-2 mx-4 rounded-full innerShadow nuxt-link"
      >
        {{ page.name }}
      </NuxtLink>
    </div>
</template>

<script lang="ts" setup>

const pageLinks = [
  {
    link: '/',
    name: 'Home'
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

</script>

<style>

.nuxt-link {
  position: relative;
  overflow: hidden; /* Ensure pseudo-element is clipped by the link's border radius */
}

.nuxt-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(270deg, #db2929, #5319ff);
  background-size: 400%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1; /* Ensure it appears behind the link text */
  animation: gradientAnimation 8s ease infinite;
}

</style>