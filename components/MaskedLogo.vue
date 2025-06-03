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
   skew: 30deg;
    -webkit-mask-image: url(${props.url});
    -webkit-mask-size: fit;
    scale: 0.9;
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