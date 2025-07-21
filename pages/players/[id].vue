<template>
  <div class="container mx-auto px-4 py-10 max-w-3xl">
    <div class="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row gap-6 items-center">
      <img
        :src="player.photo"
        :alt="player.name"
        class="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border border-gray-300"
      />

      <div>
        <h1 class="text-2xl font-bold mb-2">{{ player.name }}</h1>
        <p class="text-gray-600 text-sm mb-2">Позиция: {{ player.position }}</p>
        <p class="text-gray-600 text-sm mb-2">Команда: {{ player.team }}</p>
        <p class="text-gray-600 text-sm">Возраст: {{ player.age }} лет</p>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-semibold mb-4">Статистика</h2>
      <ul class="text-sm text-gray-700 space-y-2">
        <li>Матчей: {{ player.stats.matches }}</li>
        <li>Голов: {{ player.stats.goals }}</li>
        <li>Ассистов: {{ player.stats.assists }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)

const mockPlayers = [
  {
    id: 1,
    name: 'Килиан Мбаппе',
    position: 'Нападающий',
    team: 'Франция',
    age: 25,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kylian_Mbapp%C3%A9_2019.jpg/240px-Kylian_Mbapp%C3%A9_2019.jpg',
    stats: { matches: 20, goals: 15, assists: 7 },
  },
  {
    id: 2,
    name: 'Лионель Месси',
    position: 'Нападающий',
    team: 'Аргентина',
    age: 37,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lionel_Messi_20180626.jpg/240px-Lionel_Messi_20180626.jpg',
    stats: { matches: 25, goals: 20, assists: 10 },
  },
  // ...
]

const player = mockPlayers.find((p) => p.id === id) || mockPlayers[0]
</script>
