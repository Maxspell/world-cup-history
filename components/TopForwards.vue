<template>
  <section class="container mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold text-white mb-8">🏆 Top Forwards</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="player in topForwards"
        :key="player.id"
        class="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center shadow-xl transition hover:scale-105"
      >
        <img
          :src="`http://localhost:1337${player.photo}`"
          alt="Forward photo"
          class="w-24 h-24 rounded-full object-cover border-2 border-white mb-4"
        />
        <h3 class="text-xl font-semibold text-white">{{ player.name }}</h3>
        <p class="text-sm text-gray-300 mt-1">{{ player.team }}</p>
        <p class="text-4xl font-bold text-yellow-400 mt-4">{{ player.goals }}</p>
        <span class="text-sm text-gray-300">Goals</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const topForwards = ref([])

const getImageUrl = (photo) => {
  if (!photo?.formats?.thumbnail?.url) return ''
  return `http://localhost:1337${photo.formats.thumbnail.url}`
}

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'http://localhost:1337/api/players',
      {
        params: {
        //   sort: ['goals:desc'],
          'sort[0]': 'goals:desc',
        //   pagination: { limit: 3 },
          'pagination[limit]': 3,
          'populate[photo][fields][0]': 'name',
          'populate[photo][fields][1]': 'url',
        }
      }
    )

    topForwards.value = data.data.map(item => ({
      id: item.id,
      name: item.name,
    //   team: item.attributes.team?.data?.attributes?.name || 'Unknown Team',
      goals: item.goals,
      photo: item.photo?.url
    }))
  } catch (error) {
    console.error('Failed to fetch top forwards:', error)
  }
})
</script>