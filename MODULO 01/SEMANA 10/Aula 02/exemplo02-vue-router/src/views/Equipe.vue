<template>
  <div>
      <h1>Nossa Equipe Conta com {{membros.length}} colaboradores.</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quas optio. Eius harum esse nisi aut perferendis, possimus tenetur dolor voluptatum similique architecto nostrum quisquam eaque, laboriosam perspiciatis ea voluptatem.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto pariatur, corporis facilis ipsam in quis ullam dolorum quo vitae labore maxime aperiam hic fugiat. Explicabo voluptate eos aliquid odio.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?</p>

      <ul>
        <li v-for="(m, key) in membros" :key="key"><router-link :to="{name: 'membro', params: { nome: m.nome, bio: m.bio }}">{{m.nome}}</router-link></li>
      </ul>

      <!--------------
      <button @click.prevent="this.$router.push({name: 'membro', params: { nome: m }})">{{m}}</button>
      <br>----->
      


      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "minhaEquipe",
    data() {
      return {
        // Array membros pode muito bem ser preenchido por alguma API com banco de dados.
        membros: [
          {"nome":"Maycon", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea netur adipisicing elit. Quecessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Manel", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique molpsum dolor sit amet consectetur adipilitia unde omnis quis ea necessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Joselito", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Julieta", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Safanilson", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibus repellendus siem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor nt reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Mulambo", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibus repellendus sint reprehenderitdolor incidunt similique mollitia unde om ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Boça", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibus repellendolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea ndus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Gervásio", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitrem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor ia unde omnis quis ea necessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Atanagildo", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quium dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde s ea necessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"Gertrudes", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde oorem ipsum dolor sit amet consectetur adipisimnis quis ea necessitatibus repellendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},

          {"nome":"José Pafúncio", "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibus repesectetur adipisicing elit. Quos dolor incidunt similique mollitia unde omnis quis ea necessitatibusllendus sint reprehenderit ratione dignissimos a officia eveniet ad, porro asperiores possimus?"},
        ]
      }
    },
}
</script>

<style>

</style>