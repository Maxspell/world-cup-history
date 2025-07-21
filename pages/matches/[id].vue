<template>
  <section class="p-6 max-w-4xl mx-auto">
    <NuxtLink to="/matches" class="text-blue-600 hover:underline">&larr; Назад</NuxtLink>

    <div class="bg-white rounded-2xl shadow p-6 mt-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Матч: {{ match.team1.name }} vs {{ match.team2.name }}</h1>
        <span class="text-gray-500">{{ match.date }}</span>
      </div>

      <div class="flex justify-around items-center text-center mb-6">
        <div>
          <img :src="match.team1.flag" class="w-12 h-12 mx-auto" />
          <p class="font-semibold">{{ match.team1.name }}</p>
        </div>

        <div class="text-3xl font-bold">{{ match.score }}</div>

        <div>
          <img :src="match.team2.flag" class="w-12 h-12 mx-auto" />
          <p class="font-semibold">{{ match.team2.name }}</p>
        </div>
      </div>

      <div class="grid gap-4">
        <div>
          <h2 class="text-lg font-semibold mb-2">Стадіон</h2>
          <p>{{ match.stadium }}</p>
        </div>

        <div>
          <h2 class="text-lg font-semibold mb-2">Ключові моменти</h2>
          <ul class="list-disc list-inside text-sm text-gray-700">
            <li v-for="(event, i) in match.events" :key="i">{{ event }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const match = {
  id: route.params.id,
  team1: { name: 'Аргентина', flag: '/flags/ar.svg' },
  team2: { name: 'Франція', flag: '/flags/fr.svg' },
  score: '3 : 3 (п 4:2)',
  date: '18 грудня 2022',
  stadium: 'Лусаїль, Катар',
  events: [
    '23’ Ліонель Мессі (пенальті)',
    '80’ Мбаппе (пенальті)',
    '81’ Мбаппе (гол)',
    '108’ Мессі (гол)',
    '118’ Мбаппе (пенальті)',
    'Серія пенальті: 4-2 на користь Аргентини',
  ],
}
</script>