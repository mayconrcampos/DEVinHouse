<template>
  <div>
      <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">

                <li class="nav-item">
                  <router-link class="nav-link " aria-current="page" to="/home">Home</router-link>
                </li>
                <li class="nav-item">
                   <router-link class="nav-link " aria-current="page" to="/pessoas/cadastro">Cadastro</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link " aria-current="page" to="/pessoas/listagem">Listagem</router-link>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usuários
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Cadastrar</a></li>
                    <li><a class="dropdown-item" href="#">Fazer Login</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Sair</a></li>
                  </ul>
                </li>
                
              </ul>
                
            </div>
          </div>
        </nav>

  </div>
</template>

<script>
export default {
    name: "navBar"
}
</script>

<style>
    .navbar {
        background: rgb(41,45,62);
        background: linear-gradient(106deg, rgba(41,45,62,1) 48%, rgba(66,184,131,1) 96%); 
    }
    .nav-link:active {
        color: #42b883;
    }
    .nav-link:hover {
        background-color: #42b883;
        color: white;
        border-radius: 7px;
        transition: 0.5s;
    }
    .nav-link {
        color: whitesmoke;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.3em;
    }
  
</style>