<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
    <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-opacity duration-500',
      visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    ]"
    class="text-white shadow-md px-6 py-4"
    style="
      background-image: repeating-linear-gradient(
        45deg,
        #60a5fa 0px,
        #60a5fa 20px,
        #fcd34d 20px,
        #fcd34d 40px,
        #6b7280 40px,
        #6b7280 60px
      );
    "
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-full p-[2px]"
            style="
            background-image: repeating-linear-gradient(
                45deg,
                #60a5fa 0px,
                #60a5fa 20px,
                #fcd34d 20px,
                #fcd34d 40px,
                #6b7280 40px,
                #6b7280 60px
            );
            "
        >
            <img
            src="@/assets/Eirsport_Logo.png"
            alt="Logo"
            class="w-full h-full rounded-full object-contain bg-white"
            />
        </div>
        <h1 class="text-2xl text-black font-bold backdrop-blur-sm rounded px-3 py-1 shadow-2xl shadow-black/30">Eirsport</h1>
      </div>
      <!-- coller logo/titre à barre droite et metttre tout gauche fond blanc, bords full rond et ombre -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul class="hidden md:flex gap-6 text-xl font-medium text-black backdrop-blur-sm rounded px-3 py-1 shadow-2xl shadow-black/30">
        <li><router-link to="/" class="hover:underline">Accueil</router-link></li>
        <li><router-link to="/equipe" class="hover:underline"> Équipe</router-link></li>
        <li><a href="#" class="hover:underline">Événements</a></li>
        <li><a href="#" class="hover:underline">Course jcplusquoi</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </div>

    <ul
      v-if="isOpen"
      class="flex flex-col gap-4 mt-4 text-black font-medium md:hidden bg-white/60 backdrop-blur-sm rounded px-3 py-1"
    >
      <li><router-link to="/" class="hover:underline">Accueil</router-link></li>
      <li><router-link to="/equipe" class="hover:underline"> Équipe</router-link></li>
      <li><a href="#" class="hover:underline">Événements</a></li>
      <li><a href="#" class="hover:underline">Course jcplusquoi</a></li>
      <li><a href="#" class="hover:underline">Contact</a></li>
    </ul>
  </nav>
</template>
