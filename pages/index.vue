
<template>
  <div class="flex flex-col">
    <div id class="content relative z-10 px-12 pb-0 ">
      <Logo />
      <Motto />
    </div>

  </div>
</template>

<script setup>




</script>

<style>


/* #menuStripe {
  background-image: linear-gradient(270deg, #db2929, #5319ff);
  background-size:  400%;
} */


.innerShadow:hover {
  box-shadow: inset 0 0 15px 5px rgba(255, 255, 255, 0.5);
  text-shadow: 0 0 10px rgba(255, 255, 255, 1);
}


.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

*::selection {
  /* background: rgb(132, 174, 55); /* Background color of the selection */
  background: rgb(177, 213, 15); /* Background color of the selection */
  color: #fff; /* Text color of the selection */
}


</style>

