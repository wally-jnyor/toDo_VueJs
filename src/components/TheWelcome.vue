<template>
  <div class="main">
    <div class="container" v-show="hasAcessToDesktop">
      <div v-for="user in userData" :key="user.id">
        <div class="title">
        <h2>Hello, {{ user.name}}! - {{ user.dataHora }}</h2>
        <div v-for="finance in user.finance.investment_cash" :key="finance.id">
          <p>Target: {{ finance.name }} - Progress: {{ finance.total }} / {{ finance.amount }}</p>
        </div>
        <p>something motivating</p>
        <div class="navbar">
          <li class="navigationList">
            <RouterLink to="/user-details">Details</RouterLink>
          </li>
        </div>
      </div>

      <div class="title">
        <h2>Missions in process</h2>
        <div v-for="task in user.checklist" :key="task.id">
          <p>Doing now: {{ task.title }} - {{ task.dataHora }} - {{ task.local }}</p>
        </div>
        <div class="navbar">
          <li class="navigationList">
            <RouterLink to="/quests">Details</RouterLink>
          </li>
        </div>
      </div>
      <div class="title">
        <h2>Completed</h2>
        <p>something motivating</p>
        <div v-for="task in user.checklist" :key="task.id">
          <p v-if="task.status != 1">{{ task.title }} - {{ task.dataHora }} - {{ task.local }}</p>
        </div>
        <div class="navbar">
          <li class="navigationList">
            <RouterLink to="/bag">Details</RouterLink>
          </li>
        </div>
      </div>
      </div>
    </div>
    <mobileUserData/>
    <div> desktop: {{ hasAcessToDesktop }} -- mobile: {{ hasMobileAccess }}</div>
    <div v-show="hasMobileAccess">
      <mobileUserData/>
      <p>{{}}</p>
    </div>
  </div>
</template>

<script>
//import fakeBackEnd from '../fakeBackend/UserData' //mobile acess
import axios from 'axios'
import mobileUserData from '../components/UserDataMobile.vue'

export default {
  components: {
    mobileUserData,
  },
  data() {
    return {
      userData: '',
      hasMobileAccess: false,
      hasAcessToDesktop: true
    }
  },
  computed: {
    hasData() {
      return Array.isArray(this.userData) && this.userData.length > 0 ? true : false;
    }
  },
  mounted() {
    this.getUserData()
    this.checkAccess()
    //this.hasToDesktop()
    console.log(this.userData.length)
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
    checkAccess() {
      // Verifique aqui suas condições para definir o acesso ao desktop e ao dispositivo móvel
      // Exemplo básico para alterar com base na presença de dados em userData
      this.hasAcessToDesktop = !this.hasData;
      this.hasMobileAccess = this.hasData; // Invertendo para dispositivos móveis
    },
  },
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