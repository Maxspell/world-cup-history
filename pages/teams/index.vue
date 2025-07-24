<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">Команды</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <NuxtLink
        v-for="team in teams"
        :key="team.id"
        :to="`/teams/${team.id}`"
        class="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
      >
        <img
          :src="team.logo"
          :alt="team.name"
          class="w-20 h-20 object-contain mb-4"
        />
        <h2 class="text-lg font-semibold">{{ team.name }}</h2>
        <p class="text-sm text-gray-500">{{ team.country }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const teams = [
  {
    id: 1,
    name: 'Франция',
    country: 'Франция',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/120px-Flag_of_France.svg.png',
  },
  {
    id: 2,
    name: 'Аргентина',
    country: 'Аргентина',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/120px-Flag_of_Argentina.svg.png',
  },
  {
    id: 3,
    name: 'Бразилия',
    country: 'Бразилия',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/120px-Flag_of_Brazil.svg.png',
  },
  // ...
]
</script>