<template>
  <div class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start gap-3 hover:shadow-xl transition">
    <div class="text-3xl">{{ icon }}</div>
    <h2 class="text-xl font-semibold">{{ title }}</h2>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>