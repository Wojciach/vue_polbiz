<template>
  <div class="flex flex-row h-fit flex-wrap w-auto mx-0 items-center justify-center text-purple-700 font-bold">
    <NuxtLink
      v-for="page in pagesData" :key="page.name"
      :to="page.link"
      target="_blank"
      rel="noopener noreferrer"

      class="m-1 h-32 flex flex-col justify-center rounded-xl items-center portfolioLink  bg-violet-100"
    > <MaskedLogo class="maskedLogo" :url="page.imageUrl"/>
  </NuxtLink>

  </div>
</template>

<script lang="ts" setup>

const pagesData = [
  {
    link: 'https://recta.website/',
    name: 'Recta',
    imageUrl: '/img/RECTA.svg'
  },
  {
    link: 'https://tomix.polbiz.net/',
    name: 'Tomix',
    imageUrl: '/img/tomix_logo.png'
  },
  {
    link: 'https://emiston.polbiz.net',
    name: 'Emiston',
    imageUrl: '/img/emiston_logo.png'
  },
  {
    link: 'https://kkdetailer.com',
    name: 'KK Detailer',
    imageUrl: '/img/kk.svg'
  }
]

</script>

<style>

.portfolioLink {
  border-width: 1px;
  padding: 10px;
  transform: skew(-30deg);
}

.portfolioLink > .maskedLogo {
  transform: skew(30deg) 
}

.portfolioLink:hover {
  @apply bg-violet-200
}

</style>