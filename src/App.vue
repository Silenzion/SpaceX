<script setup lang="ts">
export type attrInterface = {
  name: string;
  value: string;
};
const ships: string[] = ["Falcon 9", "Falcon Heavy", "Dragon", "Updates"];
const pages: string[] = ["About", "Gallery", "Shop"];
const socials: string[] = ["Vkontakte", "Telegram", "Youtube", "LinkedIn", "Flickr", "Privacy", "Policy"];
const attributes: attrInterface[] = [
  {
    name: "HEIGHT",
    value: "70 m / 229.6 ft",
  },
  {
    name: "DIAMETER",
    value: "12.2 m / 39.9 ft",
  },
  {
    name: "MASS",
    value: "1,420,788 kg / 3,125,735 lb",
  },
  {
    name: "PAYLOAD TO LEO",
    value: "63,800 kg / 140,660 lb",
  },
  {
    name: "PAYLOAD TO GTO",
    value: "26,700 kg / 58,860 lb",
  },
  {
    name: "PAYLOAD TO MARS",
    value: "16,800 kg / 37,040 lb",
  },
];
</script>
<template>
  <div class="flex flex-col pb-120 text-white">
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
    <div class="mb-[183px] flex flex-row items-center">
      <div>
        <div class="mb-44 w-[177px] text-lg uppercase">Falcon Heavy Overview</div>
        <div class="mb-[218px]">
          <div v-for="(iter, index) in attributes" :key="index" class="gap mb-10 grid grid-cols-2 text-left text-base font-thin">
            <div>{{ iter.name }}</div>
            <div class="">{{ iter.value }}</div>
          </div>
        </div>
        <div class="mb-44 w-[177px] text-lg uppercase">UNMATCHED PERFORMANCE</div>
        <div class="max-w-[490px] text-sm leading-[29px]">
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
