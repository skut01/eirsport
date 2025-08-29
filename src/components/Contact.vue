<script setup>
import instaLogo from '@/assets/Instagram_icon.png'
import telegramLogo from '@/assets/Telegram_logo.svg'

defineProps({
  email: {
    type: String,
    default: 'adresse.random@gmail.com'
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
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 pt-24">
    <!-- Carte -->
    <div class="max-w-lg w-full p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 class="text-3xl font-extrabold text-center text-gray-900 mb-8">
        Contactez-nous
      </h2>

      <!-- Email -->
      <div class="mb-10 text-center">
        <p class="text-lg text-gray-700">
          Pour toute question, écrivez-nous à
          <a :href="'mailto:' + email" class="text-blue-600 font-semibold hover:underline ml-1">
            {{ email }}
          </a>
        </p>
      </div>

      <!-- Réseaux sociaux -->
      <div class="text-center">
        <p class="text-lg text-gray-700 mb-6">Suivez-nous :</p>

        <div class="flex justify-center gap-10">
          <!-- Instagram -->
          <a :href="instagramLink" target="_blank" class="group">
            <div class="w-20 h-20 flex items-center justify-center rounded-full shadow-md bg-gradient-to-tr from-pink-500 to-yellow-400 transform transition duration-300 group-hover:scale-110">
              <img :src="instaLogo" alt="Instagram" class="w-10 h-10" />
            </div>
          </a>

          <!-- Telegram -->
          <a :href="telegramLink" target="_blank" class="group">
            <div class="w-20 h-20 flex items-center justify-center rounded-full shadow-md bg-gradient-to-tr from-blue-400 to-blue-600 transform transition duration-300 group-hover:scale-110">
              <img :src="telegramLogo" alt="Telegram" class="w-10 h-10" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
