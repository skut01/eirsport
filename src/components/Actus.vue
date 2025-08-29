<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])
const error = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const url = `${import.meta.env.BASE_URL}news.json?ts=${Date.now()}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    items.value = data.sort((a, b) => b.date.localeCompare(a.date))
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>


<template>
  <main class="min-h-screen bg-gray-50 px-4 pt-24">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-3xl font-extrabold mb-8 text-center">Actualités</h1>

      <div v-if="loading" class="text-gray-500">Chargement…</div>
      <div v-else-if="error" class="text-red-600">Erreur : {{ error }}</div>

      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="n in items" :key="n.id" class="bg-white rounded-xl shadow border overflow-hidden">
          <img v-if="n.image" :src="n.image" :alt="n.title" class="w-full h-40 object-cover">
          <div class="p-4 space-y-2">
            <h2 class="text-xl font-semibold">{{ n.title }}</h2>
            <p class="text-sm text-gray-500">{{ new Date(n.date).toLocaleDateString() }}</p>
            <p class="text-gray-700 line-clamp-3">{{ n.excerpt }}</p>
            <a v-if="n.link" :href="n.link" class="inline-block mt-2 text-blue-600 font-medium hover:underline">
              En savoir plus →
            </a>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>
