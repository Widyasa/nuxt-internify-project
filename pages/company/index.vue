<script setup lang="ts">
import {definePageMeta} from "#imports";
import CardCompany from "~/components/card-company.vue";

definePageMeta({
  layout: 'home-layout'
})

</script>

<template>
  <search-component />
  <section class="container mt-10">
      <div class="grid grid-cols-4 gap-5">
        <card-company
            company-title="Palm Studio"
            img-card="https://media.licdn.com/dms/image/D560BAQHalDEoqkhHxg/company-logo_200_200/0/1707786146549/palm_game_studio_logo?e=1725494400&v=beta&t=2B86lGcUfJkKSrM4NehJ5TtPR8D4_KyCkLNqwgbCp9E"
            card-description="Palm Studio merupakan studio game yang dibut oleh mahasiswa dari primakara university"
            rating="5"
        />
      </div>
  </section>
</template>

<style scoped>

</style>