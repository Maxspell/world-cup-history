<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">Игроки</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <NuxtLink
        v-for="player in players"
        :key="player.id"
        :to="`/players/${player.id}`"
        class="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center text-center"
      >
        <img
          :src="player.photo"
          :alt="player.name"
          class="w-24 h-24 object-cover rounded-full mb-4 border border-gray-200"
        />
        <h2 class="text-lg font-semibold">{{ player.name }}</h2>
        <p class="text-sm text-gray-500">{{ player.position }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const players = [
  {
    id: 1,
    name: 'Килиан Мбаппе',
    position: 'Нападающий',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kylian_Mbapp%C3%A9_2019.jpg/240px-Kylian_Mbapp%C3%A9_2019.jpg',
  },
  {
    id: 2,
    name: 'Лионель Месси',
    position: 'Нападающий',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lionel_Messi_20180626.jpg/240px-Lionel_Messi_20180626.jpg',
  },
  {
    id: 3,
    name: 'Лука Модрич',
    position: 'Полузащитник',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Luka_Modri%C4%87_2018.jpg/240px-Luka_Modri%C4%87_2018.jpg',
  },
  // ...
]
</script>
