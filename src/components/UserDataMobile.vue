<template>
  <div class="main">
      <div v-for="user in userData" :key="user.id">
        <div class="title">
        <h2>Hello, {{ user.name }}! - {{ user.dataHora }}</h2>
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
</template>

<script>

export default {
  data() {
    return {
      userData: [
        {
            "id": 1,
            "name": "João Silva",
            "age": 30,
            "dataHora": "2023-12-15T08:00:00",
            "prioridade": "alta",
            "ativo": true,
            "status": "pendente",
            "work": [
                {
                    "occupation": "Revisar estatísticas",
                    "wage": 2400
                }
            ],
            "finance": {
                "wage": 2400,
                "safe": 400,
                "free_money": 300,
                "monthly_expenses": 500,
                "investment_cash": [
                    {
                        "id":2,
                        "name": "pc gamer",
                        "amount": 4000,
                        "total": 127
                    },
                    {
                        "id":3,
                        "name": "casa",
                        "amount": 100000,
                        "total": 20000
                    }
                ]
            },
            "checklist": [
                {
                    "title": "Revisar estatísticas",
                    "description": "ir em tal lugar, fazer tal coisa",
                    "local" : "rua tal, loja tal, numero tal",
                    "dataHora": "2023-12-15T08:00:00",
                    "status": 1
                },
                {
                    "title": "Role não sei aonde",
                    "description": "ir em tal lugar, fazer tal coisa",
                    "local" : "rua tal, loja tal, numero tal",
                    "dataHora": "2023-12-15T08:00:00",
                    "status": 0
                },
                {
                    "title": "Organizar a casa",
                    "description": "ir em tal lugar, fazer tal coisa",
                    "local" : "rua tal, loja tal, numero tal",
                    "dataHora": "2023-12-15T08:00:00",
                    "status": 1
                }
            ]
        }
    ]
    }
  },
  mounted() {
  },
  methods: {
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