<template>
  <div class="container mx-auto px-4 py-10 max-w-4xl">
    <div class="bg-white rounded-2xl shadow-md p-8 flex flex-col sm:flex-row gap-6 items-center">
      <img
        :src="team.logo"
        :alt="team.name"
        class="w-28 h-28 sm:w-32 sm:h-32 object-contain border rounded-full"
      />

      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold mb-2">{{ team.name }}</h1>
        <p class="text-gray-600 text-sm mb-1">Страна: {{ team.country }}</p>
        <p class="text-gray-600 text-sm mb-1">Тренер: {{ team.coach }}</p>
        <p class="text-gray-600 text-sm">Рейтинг FIFA: {{ team.rating }}</p>
      </div>
    </div>

    <div class="mt-10">
      <h2 class="text-xl font-semibold mb-4">Игроки</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div
          v-for="player in team.players"
          :key="player.id"
          class="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <h3 class="font-medium">{{ player.name }}</h3>
          <p class="text-sm text-gray-500">{{ player.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)

const mockTeams = [
  {
    id: 1,
    name: 'Франция',
    country: 'Франция',
    coach: 'Дидье Дешам',
    rating: 1879,
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/120px-Flag_of_France.svg.png',
    players: [
      { id: 1, name: 'Килиан Мбаппе', position: 'Нападающий' },
      { id: 2, name: 'Антуан Гризманн', position: 'Полузащитник' },
    ],
  },
  {
    id: 2,
    name: 'Аргентина',
    country: 'Аргентина',
    coach: 'Лионель Скалони',
    rating: 1901,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/120px-Flag_of_Argentina.svg.png',
    players: [
      { id: 3, name: 'Лионель Месси', position: 'Нападающий' },
      { id: 4, name: 'Анхель Ди Мария', position: 'Полузащитник' },
    ],
  },
    {
    id: 3,
    name: 'Бразилия',
    country: 'Бразилия',
    coach: 'Диего Сала',
    rating: 1901,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/120px-Flag_of_Brazil.svg.png',
    players: [
      { id: 3, name: 'Ronaldo', position: 'Нападающий' },
      { id: 4, name: 'Neymar', position: 'Полузащитник' },
    ],
  },
]

const team = mockTeams.find(t => t.id === id) || mockTeams[0]
</script>