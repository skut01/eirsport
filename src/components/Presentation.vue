<script setup>
import PresentationCard from './PresentationCard.vue'
import mikelImage from '@/assets/presentations_cards/Mikel.jpg'
import maximeImage from '@/assets/presentations_cards/Maxime.jpg'
import emileImage from '@/assets/presentations_cards/Emile.jpg'
import louisImage from '@/assets/presentations_cards/Louis.jpg'
import nielsImage from '@/assets/presentations_cards/Niels.jpg'
import Tom_alessandroImage from '@/assets/presentations_cards/Tom_alessandro.jpg'
import younesImage from '@/assets/presentations_cards/Younes.jpg'
import belhassenImage from '@/assets/presentations_cards/belhassen.jpg'
import remiImage from '@/assets/presentations_cards/Remi.jpg'
import placeHolder from '@/assets/Eirsport_Logo.png'
import { ref,computed  } from 'vue'
let id = 0

const members = ref([
    { id: id++, nom: 'Mikel Vinciguerra', role: "Président",image:mikelImage, description:""},
    { id: id++, nom: 'Mathéo Hugel', role: "Vice-Président",image:placeHolder, description:""},
    { id: id++, nom: 'Yann', role: "Trésorier",image:placeHolder, description:""},
    { id: id++, nom: 'Maxime', role: "Respo Com/Kitesurf/Wakeboard",image:maximeImage, description:""},
    { id: id++, nom: 'Louis Gauvain', role: "Respo com",image:louisImage, description:""},
    { id: id++, nom: 'Eoghan', role: "Respo Partenariat",image:placeHolder, description:""},
    { id: id++, nom: 'Paul Skutecki', role: "Respo web",image:placeHolder, description:""},
    { id: id++, nom: 'Younes Bouhoreira', role: "Respo rando/course",image:younesImage, description:""},
    { id: id++, nom: 'Jilian', role: "Respo Surf",image:placeHolder, description:""},
    { id: id++, nom: 'Belhassen Charbaji', role: "Respo Volley",image:belhassenImage, description:""},
    { id: id++, nom: 'Ludovic', role: "Respo ping-pong",image:placeHolder, description:""},
    { id: id++, nom: 'Niels Morin', role: "Respo basket",image:nielsImage, description:""},
    { id: id++, nom: 'Youssef', role: "Respo foot",image:placeHolder, description:""},
    { id: id++, nom: 'Remi Lamat', role: "Respo raquette",image:remiImage, description:""},
    { id: id++, nom: 'Damien', role: "Respo raquette",image:placeHolder, description:""},
    { id: id++, nom: 'Emile', role: "Respo running",image:emileImage, description:""},
    { id: id++, nom: 'Tom', role: "Respo Street Workout",image:Tom_alessandroImage, description:""},
    
])

const search = ref('')

const filteredMembers = computed(() => {
  const term = search.value.toLowerCase()
  return members.value.filter(member =>
    member.nom.toLowerCase().includes(term) ||
    member.role.toLowerCase().includes(term) ||
    member.description.toLowerCase().includes(term)
  )
})
</script>



<template>
    <div class="pt-20 md:pt-24 px-6 pb-6">
        <div class="flex justify-center mb-6">
            <div class="relative w-full max-w-md">
                <input
                v-model="search"
                type="text"
                placeholder="Tu cherches quelqu'un ? Tape un nom, un rôle ou autre ici"
                class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
                </svg>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            <PresentationCard v-for="member in filteredMembers" :key="member.id" :image="member.image" :nom="member.nom" :role="member.role" :description="member.description"></PresentationCard>
        </div>
    </div>
</template>