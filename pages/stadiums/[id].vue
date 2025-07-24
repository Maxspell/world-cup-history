<template>
  <div class="container mx-auto px-4 py-10 max-w-5xl">
    <div class="bg-white rounded-2xl shadow-md overflow-hidden">
      <img
        :src="stadium.image"
        :alt="stadium.name"
        class="h-64 w-full object-cover"
      />

      <div class="p-8">
        <h1 class="text-3xl font-bold mb-4">{{ stadium.name }}</h1>
        <p class="text-gray-600 mb-2">📍 {{ stadium.city }}, {{ stadium.country }}</p>
        <p class="text-gray-600 mb-2">🧍 Вместимость: {{ stadium.capacity.toLocaleString() }} зрителей</p>
        <p class="text-gray-600">🏗️ Построен: {{ stadium.yearBuilt }}</p>
      </div>
    </div>

    <div class="mt-10">
      <h2 class="text-xl font-semibold mb-4">Матчи на стадионе</h2>
      <ul class="space-y-3">
        <li
          v-for="match in stadium.matches"
          :key="match.id"
          class="bg-gray-50 rounded-lg px-5 py-3 shadow-sm flex justify-between items-center"
        >
          <span>{{ match.teams }}</span>
          <span class="text-sm text-gray-500">{{ match.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)

const mockStadiums = [
  {
    id: 1,
    name: 'Лусаил Айконик',
    city: 'Лусаил',
    country: 'Катар',
    yearBuilt: 2022,
    capacity: 88000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Lusail_Stadium.jpg',
    matches: [
      { id: 1, teams: 'Аргентина vs Франция', date: '18.12.2022' },
      { id: 2, teams: 'Бразилия vs Хорватия', date: '09.12.2022' },
    ],
  },
  {
    id: 2,
    name: 'Маракана',
    city: 'Рио-де-Жанейро',
    country: 'Бразилия',
    yearBuilt: 1950,
    capacity: 78838,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Maracana_Stadium_2014.jpg',
    matches: [
      { id: 3, teams: 'Германия vs Аргентина', date: '13.07.2014' },
    ],
  },
]

const stadium = mockStadiums.find((s) => s.id === id) || mockStadiums[0]
</script>