<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout: 'home-layout'
})
const showDetail = ref(false)
</script>

<template>
<search-component />
  <section class="mt-10 container">
    <div class="flex gap-2">
      <button class="btn-secondary btn">Lowongan</button>
      <button class="btn-secondary-second btn">Disimpan</button>
    </div>
    <div class="grid grid-cols-12 mt-10 gap-20">
      <div class="col-span-4">
        <CardLowongan
            card-description="Palm Studio membuka lowongan magang untuk berbagai posisi, termasuk Copy Writing, Marketing, Graphic Design, dan banyak lagi. Pelamar harus aktif sebagai siswa/mahasiswa semester akhir, bersedia WFO, memiliki laptop pribadi, dan berkomitmen menyelesaikan waktu magang. "
            card-title="Graphic Designer"
            company-title="Palm Studio"
            date-post="7"
            rating="4.5"
            @click="showDetail = true"
            img-card="https://media.licdn.com/dms/image/D560BAQHalDEoqkhHxg/company-logo_200_200/0/1707786146549/palm_game_studio_logo?e=1725494400&v=beta&t=2B86lGcUfJkKSrM4NehJ5TtPR8D4_KyCkLNqwgbCp9E"
        />
      </div>
      <div class="col-span-6 ml-10">
        <div v-if="showDetail">
          <detail-lowongan />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>