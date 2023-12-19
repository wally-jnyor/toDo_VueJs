<template>
  <div class="main">
    <div class="container" v-for="user in userData" :key="user.id">
<p>fakeback- {{userFakeBackend}}</p>

      </div>
    </div>

</template>

<script>
import fakeBackEnd from '../fakeBackend/UserData' //mobile acess
import axios from 'axios'

export default {
  data() {
    return {
      userData: [],
      userFakeBackend: fakeBackEnd
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData() {
      axios
        .get('http://localhost:3000/userData')
        .then((response) => {
          this.userData = response.data
        })
        .catch((error) => {
          console.error('Erro ao buscar dados:', error)
        })
    },
  }
}
</script>

<style scoped>
.main {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
}

@media screen and (max-width: 1200px) {
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-color: #ffaaf052;
    border-radius: 25px;
  }
  .title {
    color: #ffff;
  }
}
</style>