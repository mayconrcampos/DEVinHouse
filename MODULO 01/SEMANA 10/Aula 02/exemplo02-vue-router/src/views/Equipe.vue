<template>
  <div>
      <h1>Equipe</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quas optio. Eius harum esse nisi aut perferendis, possimus tenetur dolor voluptatum similique architecto nostrum quisquam eaque, laboriosam perspiciatis ea voluptatem.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto pariatur, corporis facilis ipsam in quis ullam dolorum quo vitae labore maxime aperiam hic fugiat. Explicabo voluptate eos aliquid odio.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?</p>

      <router-link :to="{name: 'membro', params: { nome: 'maycon' }}">Maycon</router-link>


      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "minhaEquipe"
}
</script>

<style>

</style>