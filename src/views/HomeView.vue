<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TaskList from '../components/TasksList.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <TaskList/>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  border: solid 1px #969696;
  display: flex;
}

@media screen and (max-width: 1200px) {
  main {
  width: 100%;
  height: 100%;
  border: solid 1px #969696;
  display: flex;
  flex-direction: column;
}
}
</style>
