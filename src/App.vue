<script setup>
import { ref, provide, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/navbar.vue'

const showNavbar = ref(false)
provide('showNavbar', showNavbar)

const route = useRoute()
const isHome = computed(() => route.path === '/')

// La navbar est visible soit si on n'est pas sur home, soit si scroll activé
const navbarVisible = computed(() => !isHome.value || showNavbar.value)
</script>

<template>
  <main>
    <Navbar :visible="navbarVisible" />
    <router-view />
  </main>
</template>
