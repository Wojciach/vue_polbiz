<template>
  <div class="logoToMask size-24"
  :style="dynamicStyle4"
  >
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  url: String,
  require: true
  
})

var dynamicStyle4 = `
   mask-image: url(${props.url});
`

</script>

<style>
.logoToMask {
  mask-position: center;
  mask-size: 100%;
  mask-repeat: no-repeat;
  background-color: purple;
}
</style>