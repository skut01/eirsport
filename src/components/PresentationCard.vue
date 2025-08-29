<script setup>
defineProps({
  image: {
    type: String
  },
  nom: {
    type: String,
  },
  description: {
    type: String,
  },
  role: {
    type: String
  }
})
</script>

<template>
  <div
    class="max-w-sm bg-white rounded-2xl border border-blue-200 shadow-md shadow-blue-200 p-4 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400 ml-5 mr-5 mb-5"
  >
    <!-- Image au-dessus -->
    <img
        v-if="image"
      :src="image"
      :alt="nom"
      class="w-64 h-64 rounded-xl object-cover mb-4"
    />

    <h2 class="text-xl font-semibold">{{ nom }}</h2>
    <p class="text-l text-gray-500 mb-2">{{ role }}</p>
    <p class="text-l text-gray-700 text-justify">{{ description }}</p>
  </div>
</template>

