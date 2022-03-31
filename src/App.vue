<script setup lang="ts">
const ships: string[] = ["Falcon 9", "Falcon Heavy", "Dragon", "Updates"];
const pages: string[] = ["About", "Gallery", "Shop"];
</script>
<template>
  <div class="flex flex-col text-white">
    <div class="flex flex-row justify-between pt-55">
      <img src="/images/spacex.svg" alt="Logo" />
      <div class="cursor-pointer text-xs">
        <span v-for="(iter, index) in ships" :key="index" class="px-10">{{ iter }}</span>
      </div>
      <div class="cursor-pointer text-xs text-stone-500">
        <span v-for="(iter, index) in pages" :key="index" class="px-10">{{ iter }}</span>
      </div>
    </div>

    <div class="pt-120">
      <h1 class="mb-26 text-xl">Falcon Heavy</h1>
      <div class="text-sm text-stone-500">The most powerful operational rocket in the world by a factor of two</div>
    </div>
  </div>
</template>
