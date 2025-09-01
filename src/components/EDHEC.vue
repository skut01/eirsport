<script setup>
const props = defineProps({
  // Passe l'ID de la vidéo (ex: "Q1hZKZ3wT3I"). Laisse vide pour afficher le placeholder.
  videoId: { type: String, default: 'VkBXBD3jJT4' }
})
</script>

<template>
  <main class="min-h-screen bg-gray-50 px-4 pt-24">
    <section class="max-w-3xl mx-auto">





      <h1 class="text-3xl font-extrabold text-center mb-3">La « Course »</h1>
      <p class="text-center text-gray-600 mb-8">
        Anciennement appelée Trophée Mer aux origines de la Course Croisière EDHEC
      </p>

      <div class="bg-white rounded-2xl shadow border p-6 space-y-5 text-lg leading-8 text-gray-800">
        <p>
          Cœur historique de l’événement, le Trophée Mer, désormais dénommé la « Course » est la première régate étudiante européenne. Cette compétition fait vibrer depuis maintenant 57 ans plusieurs centaines d’équipages français et internationaux. Si certains ont pour objectif d’arriver premiers, d’autres y voient l’occasion de découvrir la discipline dans une ambiance aussi compétitive que conviviale.
        </p>
        <p>
          Attentive à ce que la Course Croisière EDHEC soit et reste un bel événement sportif, la Fédération Française de Voile s’engage à accompagner les équipes dans la réussite de ce projet, atout pour être une référence sportive.
        </p>
        <p>
          Chaque année la compétition invite amateurs et skippers confirmés à se dépasser sur des épreuves auxquelles se sont déjà confrontés certains sportifs mythiques tels que Eric Tabarly et Alain Colas, ou, plus récemment, François Gabart, Armel Le Cléac’h et Arnaud Boissières.
        </p>

        <a
        class="text-blue-600 underline hover:text-blue-700"
        href="https://cce.fr/la-course/"
        >
        En savoir plus
        </a>
      </div>


        <div class="mb-8 mt-8">

            <div v-if="props.videoId" class="relative w-full rounded-xl overflow-hidden shadow border bg-black">

            <div class="pt-[56.25%]"></div>
            <iframe
                class="absolute inset-0 w-full h-full"
                :src="`https://www.youtube.com/embed/${props.videoId}?rel=0`"
                title="Vidéo YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
            </div>


            <div v-else class="rounded-xl border border-dashed p-6 text-center text-gray-600 bg-white">
            On dirait que y'a un problème de vidéo..... Tapes sur google et fais pas chier.
            </div>
        </div>
    </section>
  </main>
</template>
