<script setup lang="ts">

import SearchHome from "~/components/search/search-home.vue";
import SearchCompany from "~/components/search/search-company.vue";
const route = useRoute()
</script>

<template>
<div class="bg-primary container py-24">
  <div class="flex justify-center">
    <div class="max-w-[950px] w-full">
      <div v-if="route.path !== '/company'">
        <search-home />
      </div>
      <div v-else>
        <search-company />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>