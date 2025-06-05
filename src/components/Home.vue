<script setup>
import { inject, onMounted, onBeforeUnmount,ref } from 'vue'
import heroImage from '@/assets/hero.jpg'
import Presentation from './Presentation.vue'
import Intro from './Intro.vue'

const showNavbar = inject('showNavbar')
const presentationRef = ref(null)

function handleScroll() {
  showNavbar.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function scrollToPresentation() {
  presentationRef.value?.scrollIntoView({ behavior: 'smooth' })
}

</script>

<template>
    <section
    class="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white "
    :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="text-center text-5xl font-extrabold drop-shadow-lg cursor-pointer animate-pulse-slow" @click="scrollToPresentation">
        <div class="backdrop-blur-sm bg-white/30 rounded-full p-2 inline-block">
            <img
                src="@/assets/Eirsport_Logo.png"
                alt="Logo"
                class="w-64 h-64 object-contain p-4"
                />
        </div>
        <!--<span class="bg-white/60 backdrop-blur-sm rounded shadow-2xl shadow-black/30"><span style="color: #3054c1;">Eir</span><span style="color: #f4d22c;">sport</span></span>-->
      </div>
    </section>
    <div ref="presentationRef" class="scroll-mt-20">
        <Intro></Intro>
    </div>
</template>

<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s infinite ease-in-out;
}
</style>