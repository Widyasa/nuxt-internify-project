<script setup lang="ts">

</script>

<template>
  <nav class="container mx-auto mt-5">
    <div class="flex justify-between items-center">
      <div class="logo-wrapper flex gap-3 items-center">
        <img src="/logo.png" alt="logo" class="">
        <router-link class="nav-link" active-class="active" to="#">Cari Lowongan</router-link>
        <router-link class="nav-link" active-class="active" to="#">Cari Perusahaan</router-link>
      </div>
      <div class="flex gap-3 items-center">
        <router-link to="#" class="btn btn-primary">Login</router-link>
        <router-link to="#" class="text-primary hover:opacity-100 duration-200 opacity-75">Login Perusahaan</router-link>
      </div>
    </div>
       </nav>
</template>

<style scoped>

</style>