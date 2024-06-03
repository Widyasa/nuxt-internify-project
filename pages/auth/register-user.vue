<script setup lang="ts">

</script>

<template>
  <div class="bg-primary bg-opacity-20 h-screen flex justify-center items-center">
    <div class="container">
      <div class="flex justify-center">
        <div class="rounded-xl bg-gray-50 border p-10 max-w-[600px] w-full">
          <h1 class="text-center text-4xl font-medium text-primary">Register</h1>
          <div class="">
            <div class="mt-5 flex-col flex gap-4">
              <base-input input-placeholder="input nama..." input-name="name" input-title="Nama" input-type="text" />
              <base-input input-placeholder="input no hp..." input-name="phone_number" input-title="No HP" input-type="tel" />
              <base-input input-placeholder="input email..." input-name="email" input-title="Email" input-type="email" />
              <base-input input-placeholder="input password..." input-name="password" input-title="Password" input-type="password" />
            </div>
            <button class="btn btn-primary mt-7 w-full py-3">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>