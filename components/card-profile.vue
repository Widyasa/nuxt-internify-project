<script setup lang="ts">
const props = defineProps({
  imgProfile : String,
  nameProfile : String,
  phoneNumber : String,
  emailProfile : String,
  addressProfile : String,
})
</script>

<template>
<div class="border-2 rounded-xl border-primary p-10 flex items-center flex-col">
  <div class="size-24 rounded-full">
    <img v-if="imgProfile === undefined" src="https://placehold.co/100" class="rounded-full" alt="">
    <img v-else :src="props.imgProfile" class="rounded-full size-24" alt="">
  </div>
  <h6 class="text-center mt-4 font-medium text-xl">{{props.nameProfile}}</h6>
  <hr class="w-full mt-4 opacity-100 border-t border-t-primary">
  <div class="mt-4 flex flex-col w-full gap-4">
    <div class="flex justify-between items-center w-full">
      <div class="flex gap-3 items-center">
        <i class="fa-solid fa-location-dot text-gray-500"></i>
        <p class="text-gray-500 text-sm">Location</p>
      </div>
      <p class="text-sm text-gray-500">{{props.addressProfile}}}</p>
    </div>
    <div class="flex justify-between items-center w-full">
      <div class="flex gap-3 items-center">
        <i class="fa-solid fa-phone text-gray-500"></i>
        <p class="text-gray-500 text-sm">Telepon</p>
      </div>
      <p class="text-sm text-gray-500">{{props.phoneNumber}}</p>
    </div>
    <div class="flex justify-between items-center w-full">
      <div class="flex gap-3 items-center">
        <i class="fa-solid fa-envelope text-gray-500"></i>
        <p class="text-gray-500 text-sm">Email</p>
      </div>
      <p class="text-sm text-gray-500">{{props.emailProfile}}</p>
    </div>
  </div>
  <hr class="w-full mt-4 opacity-100 border-t border-t-primary">
  <button class="btn btn-secondary mt-9 w-full">Edit</button>
</div>
</template>

<style scoped>

</style>