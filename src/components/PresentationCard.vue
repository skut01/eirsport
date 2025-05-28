<script setup>

</script>
defineProps({
  image: {
    type: String,
  },
  nom: {
    type: String,
  },
  description: {
    type: String,
  },
  role: {
    type:string
  }
})
<template>
    <div class="max-w-sm bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
    <img
      :src="photo"
      alt="Photo de la personne"
      class="w-24 h-24 rounded-full object-cover mb-4"
    />
    <h2 class="text-xl font-semibold">{{ nom }}</h2>
    <p class="text-sm text-gray-500 mb-2">{{ role }}</p>
    <p class="text-sm text-gray-700">{{ description }}</p>
  </div>
</template>