<script setup lang="ts">
const ships: string[] = ["Falcon 9", "Falcon Heavy", "Dragon", "Updates"];
const pages: string[] = ["About", "Gallery", "Shop"];
const socials : string[] = ['Vkontakte', 'Telegram','Youtube','LinkedIn','Flickr','Privacy','Policy']
</script>
<template>
  <div class="flex flex-col text-white pb-120">
    <div class="flex flex-row justify-between pt-55">
      <img src="/images/spacex.svg" alt="Logo" />
      <div class="cursor-pointer text-xs">
        <span v-for="(iter, index) in ships" :key="index" class="px-10">{{ iter }}</span>
      </div>
      <div class="cursor-pointer text-xs text-stone-500">
        <span v-for="(iter, index) in pages" :key="index" class="px-10">{{ iter }}</span>
      </div>
    </div>

    <div class="pt-120 text-center">
      <h1 class="mb-26 text-xl">Falcon Heavy</h1>
      <div class="mx-auto max-w-[256px] text-sm font-light lowercase text-stone-500">
        The most powerful operational rocket in the world by a factor of two
      </div>
    </div>
    <img class="h-auto w-auto" src="/images/bg.png" alt="Earth" />
    <div class="mb-[183px] flex flex-row">
      <div>
        <div class="text-lg uppercase">Falcon Heavy Overview</div>
        <div class="text-lg uppercase">UNMATCHED PERFORMANCE</div>
        <div class="text-sm">
          With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By comparison, the
          the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift
          the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.
        </div>
      </div>
      <img src="/images/rocket.png" alt="rocket" />
    </div>
    <div class="flex flex-col items-center">
      <img class="mb-44" src="/images/spacex.svg" alt="Logo" />
      <div class="mb-28">
        <span v-for="(iter, index) in socials" :key="index" class="px-10 text-base">{{ iter }}</span>
      </div>
      <div class="mb-30 text-stone-500">For additional questions, contact rideshare@spacex.com</div>
      <button class="h-60 w-[260px] rounded-[6px] border-2 border-white">Contact us</button>
    </div>
  </div>
</template>
