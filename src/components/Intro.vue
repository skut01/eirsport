<script setup>

</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero -->
    <div class="bg-blue-600 text-white py-16 text-center px-4" style="
            background-image: repeating-linear-gradient(
            45deg,
            #60a5fa 0px,
            #60a5fa 20px,
            #fcd34d 20px,
            #fcd34d 40px,
            #6b7280 40px,
            #6b7280 60px
            );
        ">
        <span class="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-xl inline-block text-black">
            <h1 class="text-4xl font-extrabold mb-4">
                EirSport – L'aventure sportive autrement
            </h1>
            <p class="text-xl max-w-2xl mx-auto">
                Bienvenue sur le site d’EirSport, l’association multisports qui allie passion, nature et esprit d’équipe !
            </p>
        </span>
    </div>

    <div class="max-w-5xl mx-auto py-12 space-y-16 px-4">
      <!-- 1 -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <img src="@/assets/Eirsport_Logo.png" alt="Mission" class="w-full md:w-1/2 h-64 object-cover rounded-xl shadow" />
        <div class="md:w-1/2 text-lg text-gray-800 text-justify">
          <span class="font-bold">Notre mission :</span> proposer toute l’année des activités sportives variées accessibles à tous les niveaux dans une ambiance conviviale et dynamique.
        </div>
      </div>

      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <img src="@/assets/hero.jpg" alt="Activités" class="w-full md:w-1/2 h-64 object-cover rounded-xl shadow" />
        <div class="md:w-1/2 text-lg text-gray-800 text-justify">
          Que vous soyez amateur de running, féru de voile, adepte des sports de plage ou simplement curieux de découvrir de nouvelles pratiques en plein air, EirSport vous invite à bouger, respirer, et partager des moments forts avec une équipe soudée.
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-8">
        <img src="@/assets/edhec_logo.png" alt="Course Croisière EDHEC" class="w-full md:w-1/2 h-64 object-cover rounded-xl shadow" />
        <div class="md:w-1/2 text-lg text-gray-800 text-justify">
          Chaque année, EirSport participe également à la mythique Course Croisière EDHEC, l’un des plus grands événements étudiants d’Europe, pour vivre ensemble une expérience unique mêlant compétition, mer et esprit d’équipe.
        </div>
      </div>

      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <img src="@/assets/Eirsport_Logo.png" alt="Équipe EirSport" class="w-full md:w-1/2 h-64 object-cover rounded-xl shadow" />
        <div class="md:w-1/2 text-lg text-gray-800 text-justify">
          Rejoindre EirSport, c’est faire le plein d’énergie, repousser ses limites et surtout, vivre le sport autrement : dans la bonne humeur, le respect et le partage.
        </div>
      </div>

      <router-link
        to="/contact"
        class="block text-center py-6 px-4 rounded-xl font-semibold text-xl text-black transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
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
            <span class="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
                Rejoins l’aventure. Rejoins EirSport.
            </span>
        </router-link>

    </div>
  </div>
</template>

