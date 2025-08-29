<script setup>
import instaLogo from '@/assets/Instagram_icon.png'
import telegramLogo from '@/assets/Telegram_logo.svg'

defineProps({
  email: {
    type: String,
    default: 'paulo.skut@gmail.com'
  },
  instagramLink: {
    type: String,
    default: 'https://www.instagram.com/asso_eirsport?igsh=dnEwdzJobmp2dThx' 
  },
  telegramLink: {
    type: String,
    default: 'https://t.me/+V8ucm9uykNU3ZGE8'
  }
})
</script>

<template>
  <div class="max-w-lg mx-auto p-5 bg-gray-100 rounded-lg shadow-lg mt-25">
    <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Contactez-nous</h2>

    <div class="mb-6">
      <p class="text-lg text-gray-700 inline">Pour toute question, vous pouvez nous contacter par email&nbsp;:</p>
      <a :href="'mailto:' + email" class="inline text-blue-500 hover:underline ml-1">{{ email }}</a>
    </div>

    <div class="mb-6 text-center">
      <p class="text-lg text-gray-700 mb-6">Suivez-nous sur les réseaux sociaux :</p>
      
      <!-- Instagram Logo -->
      <a :href="instagramLink" target="_blank" class="inline-block mx-4">
        <img :src="instaLogo" alt="Instagram" class="w-24 h-24 mx-auto hover:opacity-80 transition-all duration-300"/>
      </a>

      <!-- Telegram Logo -->
      <a :href="telegramLink" target="_blank" class="inline-block mx-4">
        <img :src="telegramLogo" alt="Telegram" class="w-24 h-24 mx-auto hover:opacity-80 transition-all duration-300"/>
      </a>
    </div>
  </div>
</template>



