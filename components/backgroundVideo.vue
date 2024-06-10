<template>
  <div class="video-background">
    <video autoplay muted loop id="bg-video">
      <source src="/vids/7101912-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
.video-background {
  @apply fixed top-0 left-0 w-full h-full overflow-hidden z-[-1];
}

#bg-video {
  @apply absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 object-cover;
}
</style>
