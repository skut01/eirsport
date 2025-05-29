<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Presentation from './components/Presentation.vue'
import Navbar from './components/Navbar.vue'
import heroImage from '@/assets/hero.jpg'

const showNavbar = ref(false)
const handleScroll = () => {
  showNavbar.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main >
    <Navbar :visible="showNavbar" />
    <section
    class="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white "
    :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="text-center text-5xl font-extrabold drop-shadow-lg">
        <img
            src="@/assets/Eirsport_Logo.png"
            alt="Logo"
            class="w-full h-full  object-contain"
            />
        <!--<span class="bg-white/60 backdrop-blur-sm rounded shadow-2xl shadow-black/30"><span style="color: #3054c1;">Eir</span><span style="color: #f4d22c;">sport</span></span>-->
      </div>
    </section>
    <Presentation></Presentation>
  </main>
</template>


