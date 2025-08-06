<template>
  <main class="min-h-screen bg-white dark:bg-gray-900">
    <section class="container mx-auto px-4 py-10">
      <h1 class="text-4xl font-bold mb-4 text-center">🏆 Кубки світу з футболу</h1>
      <p class="text-center text-lg text-gray-600 mb-10">
        Досліджуйте історію чемпіонатів світу: матчі, команди, гравці, стадіони.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink to="/matches">
          <div class="card-link">
            <Card title="Матчі" description="Усі матчі за роками, групами та стадіями." icon="⚽" />
          </div>
        </NuxtLink>

        <NuxtLink to="/teams">
          <div class="card-link">
            <Card title="Команди" description="Учасники, переможці, склади." icon="🇫🇷" />
          </div>
        </NuxtLink>

        <NuxtLink to="/players">
          <div class="card-link">
            <Card title="Гравці" description="Найкращі футболісти всіх часів." icon="🧍‍♂️" />
          </div>
        </NuxtLink>

        <NuxtLink to="/stadiums">
          <div class="card-link">
            <Card title="Стадіони" description="Місця проведення матчів — від Ріо до Катара." icon="🏟️" />
          </div>
        </NuxtLink>
      </div>
    </section>
    <TournamentTable />
    <LatestMatches />
    <TopForwards />
    
    <section class="bg-white dark:bg-gray-900 p-12 grid grid-cols-1 md:grid-cols-4 gap-8">
  <div class="col-span-2 backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10">
    <h2 class="text-3xl font-bold text-white">Заголовок</h2>
    <p class="text-gray-300 mt-3">Текст в полупрозрачном блоке</p>
  </div>
  <div class="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
    <h3 class="text-xl font-semibold text-white">Элемент</h3>
  </div>
  <div class="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
    <h3 class="text-xl font-semibold text-white">Элемент</h3>
  </div>
</section>

</main>
</template>