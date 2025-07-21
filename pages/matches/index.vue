<template>
  <section class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Всі матчі</h1>
    <div class="grid gap-4">
      <NuxtLink
        v-for="match in matches"
        :key="match.id"
        :to="`/matches/${match.id}`"
        class="flex items-center justify-between p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
      >
        <div class="flex items-center gap-4">
          <img :src="match.team1.flag" class="w-6 h-6 rounded-full" />
          <span class="font-medium">{{ match.team1.name }}</span>
          <span class="text-gray-500">vs</span>
          <img :src="match.team2.flag" class="w-6 h-6 rounded-full" />
          <span class="font-medium">{{ match.team2.name }}</span>
        </div>
        <div class="text-right">
          <p class="font-bold text-lg">{{ match.score }}</p>
          <p class="text-sm text-gray-500">{{ match.date }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const matches = [
  {
    id: 1,
    team1: { name: 'Аргентина', flag: '/flags/ar.svg' },
    team2: { name: 'Франція', flag: '/flags/fr.svg' },
    score: '3 : 3 (п 4:2)',
    date: '18 грудня 2022',
  },
  {
    id: 2,
    team1: { name: 'Бразилія', flag: '/flags/br.svg' },
    team2: { name: 'Хорватія', flag: '/flags/hr.svg' },
    score: '1 : 1 (п 2:4)',
    date: '9 грудня 2022',
  },
]
</script>