<script setup lang="ts">
const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'inputPlaceholder' : String,
  'inputType' : String,
  'modelValue' : [String, Number],
})
</script>

<template>
  <div class="flex flex-col gap-1 w-100">
    <label :for="props.inputName">{{props.inputTitle}}</label>
    <input-text :name="props.inputName" :type="props.inputType" class="border rounded w-full py-2 pl-3 focus:outline-none" :placeholder="props.inputPlaceholder" :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<style scoped>

</style>