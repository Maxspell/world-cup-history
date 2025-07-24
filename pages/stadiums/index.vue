<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-8">Стадионы</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="stadium in stadiums"
        :key="stadium.id"
        :to="`/stadiums/${stadium.id}`"
        class="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
      >
        <img
          :src="stadium.image"
          :alt="stadium.name"
          class="h-48 w-full object-cover"
        />
        <div class="p-5">
          <h2 class="text-lg font-semibold mb-1">{{ stadium.name }}</h2>
          <p class="text-sm text-gray-500">{{ stadium.city }}, {{ stadium.country }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const stadiums = [
  {
    id: 1,
    name: 'Лусаил Айконик',
    city: 'Лусаил',
    country: 'Катар',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Lusail_Stadium.jpg',
  },
  {
    id: 2,
    name: 'Маракана',
    city: 'Рио-де-Жанейро',
    country: 'Бразилия',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Maracana_Stadium_2014.jpg',
  },
  {
    id: 3,
    name: 'Уэмбли',
    city: 'Лондон',
    country: 'Англия',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Wembley_Stadium_interior.jpg',
  },
]
</script>
