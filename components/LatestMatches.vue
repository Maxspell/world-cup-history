<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const matches = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/matches', {
      params: {
        'sort[0]': 'date:desc',
        'pagination[limit]': 5,
        'populate[team_1][populate]': 'logo',
        'populate[team_2][populate]': 'logo',
        'populate[stadium]': true
      }
    })
    matches.value = res.data.data
  } catch (error) {
    console.error('Error loading matches:', error)
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <div class="overflow-x-auto rounded border border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900">
      <table class="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
        <thead class="ltr:text-left rtl:text-right">
          <tr class="*:font-medium *:text-gray-900 dark:*:text-white">
            <th class="px-3 py-2 whitespace-nowrap">Match</th>
            <th class="px-3 py-2 whitespace-nowrap">Score</th>
            <th class="px-3 py-2 whitespace-nowrap">Stadium</th>
            <th class="px-3 py-2 whitespace-nowrap">Date</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr
            v-for="match in matches"
            :key="match.id"
            class="*:text-gray-900 *:first:font-medium dark:*:text-white"
          >
            <td class="px-3 py-2 whitespace-nowrap">
              <div class="flex items-center gap-3">
                <img
                  v-if="match.team_1?.logo?.formats?.thumbnail?.url"
                  :src="`http://localhost:1337${match.team_1.logo.formats.thumbnail.url}`"
                  alt="Team 1 Logo"
                  class="h-6 w-6 object-contain"
                />
                <span>{{ match.team_1.name }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">vs</span>
                <img
                  v-if="match.team_2?.logo?.formats?.thumbnail?.url"
                  :src="`http://localhost:1337${match.team_2.logo.formats.thumbnail.url}`"
                  alt="Team 2 Logo"
                  class="h-6 w-6 object-contain"
                />
                <span>{{ match.team_2.name }}</span>
              </div>
            </td>
            <td class="px-3 py-2 whitespace-nowrap text-center">
              {{ match.score || 'TBD' }}
            </td>
            <td class="px-3 py-2 whitespace-nowrap">
              {{ match.stadium?.name || '-' }}
            </td>
            <td class="px-3 py-2 whitespace-nowrap">
              {{ new Date(match.date).toLocaleDateString() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>