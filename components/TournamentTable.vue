<template>
    <section class="container mx-auto px-4 py-10">
        <div class="mx-auto my-12 p-6 rounded-2xl bg-white dark:bg-gray-900 backdrop-blur shadow-xl">
            <h2 class="text-3xl font-bold text-white mb-6 text-center">Турнирная таблица</h2>
            <div class="overflow-x-auto">
            <table class="min-w-full text-left text-white">
                <thead class="text-sm uppercase text-gray-300 border-b border-gray-500/30">
                <tr>
                    <th class="py-3 px-4">#</th>
                    <th class="py-3 px-4">Сборная</th>
                    <th class="py-3 px-4">Игры</th>
                    <th class="py-3 px-4">Победы</th>
                    <th class="py-3 px-4">Ничьи</th>
                    <th class="py-3 px-4">Поражения</th>
                    <th class="py-3 px-4">З-П</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(team, index) in teams" :key="team.name" class="hover:bg-white/10 transition">
                    <td class="py-3 px-4 font-bold">{{ index + 1 }}</td>
                    <td class="py-3 px-4 flex items-center gap-2">
                    <img
                        v-if="team.flag"
                        :src="team.flag"
                        alt="flag"
                        class="w-6 h-4 object-cover rounded-sm"
                    />
                    {{ team.name }}
                    </td>
                    <td class="py-3 px-4">{{ team.matches }}</td>
                    <td class="py-3 px-4">{{ team.wins }}</td>
                    <td class="py-3 px-4">{{ team.draws }}</td>
                    <td class="py-3 px-4">{{ team.losses }}</td>
                    <td class="py-3 px-4">{{ team.goals_for }} - {{ team.goals_against }}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const teams = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'http://localhost:1337/api/teams',
      {
        params: {
        //   'sort[0]': 'goals:desc',
          'pagination[limit]': 5,
        //   'populate[photo][fields][0]': 'name',
        //   'populate[photo][fields][1]': 'url',
        }
      }
    )

    teams.value = data.data.map(item => ({
      id: item.id,
      name: item.name,
      matches: item.attributes.matches,
      wins: item.attributes.wins,
      draws: item.attributes.draws,
      losses: item.attributes.losses,
      goals_for: item.attributes.goals_for,
      goals_against: item.attributes.goals_against
    }))
  } catch (error) {
    console.error('Failed to fetch teams:', error)
  }
})
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>