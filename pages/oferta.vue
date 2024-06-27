<template>
  <div class=" px-10 md:px-20 xl:px-64">
    <div class="flex flex-col overflow-y-scroll mt-10 ">
      <section class="flex flex-col justify-center items-center text-center">
        <h1 class="text-3xl font-bold text-violet-900 mb-4">Witaj w polbiz.net!</h1>
        <p class="text-lg text-gray-800 leading-7 mb-6">
          Czy wiesz, że profesjonalna strona internetowa może zdziałać cuda dla Twojego biznesu? W dzisiejszych czasach, obecność w internecie to nie tylko standard, ale także klucz do sukcesu. Nasza firma oferuje kompleksowe usługi, które pomogą Ci zaistnieć w sieci i wyróżnić się na tle konkurencji.
        </p>
      </section>
      <section class="flex flex-col md:flex-row justify-center">
        <section class="flex flex-col subSection md:w-1/2">
          <h2 class="text-xl font-bold text-black mb-2">Co możemy dla Ciebie zrobić?</h2>
          <ul class="list-disc ml-6 mb-6">
            <li v-for="(sublist, index) in reasons" :key="sublist[0]" @click="show('L' + index)" class="cursor-pointer mb-1">
              <strong class="hover:underline"> {{ sublist[0] }} </strong>
              <transition
                enter-active-class="transition ease-out duration-1000"
                enter-from-class="opacity-0 transform scale-95"
                enter-to-class="opacity-100 transform scale-100"
                leave-active-class=""
                leave-from-class="opacity-100 transform scale-100"
                leave-to-class="opacity-0 transform scale-95"
              >
                <ul v-if="visible('L' + index)" class="list-disc ml-6">
                  <li v-for="item in sublist.slice(1)" :key="item">
                    {{ item }}
                  </li>
                </ul>
            </transition>
            </li>
          </ul>
        </section>
        <section class="subSection md:w-1/2">
          <h2 class="text-xl font-bold text-black mb-2">Dlaczego warto mieć stronę internetową?</h2>
          <ul class="list-disc ml-6 mb-6">
            <li v-for="(item, index) in sublister" :key="item.name" @click="show('R' + index)" class="mb-1 cursor-pointer">
              <strong class="hover:underline"> {{ item.name + " " }} </strong>
              <transition
                enter-active-class="transition ease-out duration-1000"
                enter-from-class="opacity-0 transform scale-95"
                enter-to-class="opacity-100 transform scale-100"
                leave-active-class=""
                leave-from-class="opacity-100 transform scale-100"
                leave-to-class="opacity-0 transform scale-95"
              >
                <span v-if="visible('R' + index)" > {{ item.description }} </span>
              </transition>
            </li>
          </ul>
        </section>
      </section>
      <p class="text-lg text-gray-800 leading-7 mb-6 text-center">
            Zaufaj nam i rozwijaj swoje skrzydła w internecie razem z polbiz.net. Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych usługach i rozpocząć współpracę!
          </p>
    </div>
  </div>
</template>

<script lang="ts" setup>

const theOnlyVisibleItem = ref(null)

const reasons = useSublist1();
const sublister = useSublist2();

const show = (x :any) => {
  if (theOnlyVisibleItem.value == x)
  theOnlyVisibleItem.value = null;
  else theOnlyVisibleItem.value = x;
}

const visible = (x) => {
  if (theOnlyVisibleItem.value == x) return true;
  else return false;
}





</script>

<style>

strong {
  @apply text-violet-800;
}

.subSection {
  @apply mx-0;
}

        .v-enter-active {transition: ease-out 0.3;}
        .v-enter-from { opacity: 0; transform: scale(0.95);}
        .v-enter-to {opacity: 1; transform: scale(1);}
        /* .v-leave-active {} */
        .v-leave-from { opacity: 1; transform: scale(1);}
        .v-leave-to{opacity: 0; transform: scale(0.95); }

</style>
