<script setup>
import PresentationCard from './PresentationCard.vue'
import mikelImage from '@/assets/presentations_cards/mikel.jpg'
import paulImage from '@/assets/presentations_cards/paul.jpg'
import maximeImage from '@/assets/presentations_cards/Maxime.jpg'
import emileImage from '@/assets/presentations_cards/Emile.jpg'
import louisImage from '@/assets/presentations_cards/Louis.jpg'
import nielsImage from '@/assets/presentations_cards/Niels.jpg'
import Tom_alessandroImage from '@/assets/presentations_cards/Tom_alessandro.jpg'
import younesImage from '@/assets/presentations_cards/Younes.jpg'
import { ref,computed  } from 'vue'
let id = 0

const members = ref([
    { id: id++, nom: 'Mikel Vinciguerra', role: "Président",image:mikelImage, description:"Capitaine motivé, toujours partant pour tenter un nouveau sport et prêt à se battre pour vous régaler (en plus personne ne le prend à la bagarre)."},
    { id: id++, nom: 'Mathéo Hugel', role: "Vice-Président",image:paulImage, description:"La légende raconte qu'il a confondu VP BDS et VP Eirsport... Mais bon maintenant qu'il est là on va le garder."},
    { id: id++, nom: 'Yann', role: "Trésorier",image:paulImage, description:"Pour pouvoir vous régaler toute l'annéee sans finir dans le rouge fluo, voici notre pince officielle."},
    { id: id++, nom: 'Maxime', role: "Respo Com/Kitesurf/Wakeboard",image:maximeImage, description:"Si vous pouvez lire ces lignes, c'est grâce à moi, même si personne ne lit ça..."},
    { id: id++, nom: 'Louis Gauvain', role: "Respo com",image:louisImage, description:"A la base il voulait Respo bar, on a failli le renommer Respo Emploi Fictif, mais bon l'admin n'aurait peut-être pas kiffé."},
    { id: id++, nom: 'Eoghan', role: "Respo Partenariat",image:paulImage, description:"Pour pouvoir vous régaler et vous dégotter un max de réductions sur vos sports, voici notre Respo Partenariat."},
    { id: id++, nom: 'Paul Skutecki', role: "Respo web",image:paulImage, description:"Ici ça mange des cartes graphiques sans modération."},
    { id: id++, nom: 'Younes Bouhoreira', role: "Respo rando/course",image:younesImage, description:"Pour vous aider à courir (pas forcément vite, mais avec style). A défaut d'être chez BDS il a décidé d'avoir 2 pôles."},
    { id: id++, nom: 'Jilian', role: "Respo Surf",image:paulImage, description:"Glisse assurée, mousse garantie. Et on parle pas que des vagues."},
    { id: id++, nom: 'Belhassen Charbaji', role: "Respo Volley",image:paulImage, description:"Pour un filet tendu et des smashs, faites lui confiance !"},
    { id: id++, nom: 'Ludovic', role: "Respo ping-pong",image:paulImage, description:"Il a pas compris qu'il y avait déjà un pôle raquette mais bon on lui laisse ça."},
    { id: id++, nom: 'Niels Morin', role: "Respo basket",image:nielsImage, description:"On espère qu'il sera aussi bon que le rap qu'il a fait pour TMT. (voir meilleur on espère)."},
    { id: id++, nom: 'Youssef', role: "Respo foot",image:paulImage, description:"Coach tactique et simulateur pro, prêt à transformer un 5 vs 5 en Coupe du Monde."},
    { id: id++, nom: 'Remi Lamat', role: "Respo raquette",image:paulImage, description:"Peu importe le sport tant qu'il y a une raquette c'est bon (peut-être pas les randos raquette en montagne)."},
    { id: id++, nom: 'Damien', role: "Respo raquette",image:paulImage, description:"Peu importe le sport tant qu'il y a une raquette c'est bon (peut-être pas les randos raquette en montagne)."},
    { id: id++, nom: 'Emile', role: "Respo running",image:emileImage, description:"Pour vous aider à courir (pas forcément vite, mais avec style)."},
    { id: id++, nom: 'Tom', role: "Respo Street Workout",image:Tom_alessandroImage, description:"Il a mis tous ses points en force mais ducoup les partiels ont été durs, dans tous les cas il sera là pour vous régaler."}
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
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PresentationCard v-for="member in filteredMembers" :key="member.id" :image="member.image" :nom="member.nom" :role="member.role" :description="member.description"></PresentationCard>
        </div>
    </div>
</template>