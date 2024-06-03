<script setup lang="ts">
const props = defineProps({
  imgCard: {require: true, type:String},
  cardTitle: {require: true, type:String},
  companyTitle: {require: true, type:String},
  cardDescription: {require:true, type: String},
  datePost: {require:true, type:String},
  rating: {require:true, type:String}
})
</script>

<template>
<div class="p-7 border-2 border-[#D9D9D9] rounded-2xl">
  <div class="flex justify-between items-start">
    <div class="flex items-center gap-5">
      <div class="">
        <img v-if="props.imgCard !== undefined" :src="props.imgCard" alt="" class="size-16 aspect-square rounded">
        <img v-else src="https://placehold.co/80" alt="" class="size-16 aspect-square rounded">
      </div>
      <div class="max-w-[200px]">
        <h6 class="line-clamp-2 font-semibold">{{props.cardTitle}}</h6>
        <p class="text-gray-500 text-sm">{{props.companyTitle}}</p>
      </div>
    </div>
    <button>
      <i class="fa-regular fa-bookmark"></i>
    </button>
  </div>
  <p class="line-clamp-3 mt-4 text-sm">{{props.cardDescription}}</p>
  <div class="flex justify-between text-[13px] mt-4 items-center">
    <p class="text-gray-400">diposting {{datePost}} yang lalu</p>
    <div class="flex gap-1 items-center">
      <i class="fa-solid fa-star text-amber-500 text-[13px]"></i>
      <p class="text-[13px]">{{props.rating}}</p>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>