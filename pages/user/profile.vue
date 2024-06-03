<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout:'home-layout'
})
</script>

<template>
  <div class="container mt-10">
    <div class="grid grid-cols-12 gap-10">
      <div class="col-span-4">
          <card-profile
              name-profile="I Kadek Widhi Andrian"
              address-profile="Denpasar, Bali"
              phone-number="081278985924"
              email-profile="widhiandrian@gmail.com"
          />
      </div>
      <div class="col-span-6">

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>