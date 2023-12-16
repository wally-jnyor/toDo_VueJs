<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TaskList from '../components/TasksList.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <TaskList />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  border: solid 1px #969696;
  display: flex;
  /*background-image: url('../../public/img/imgd.jpg');*/
}

@media screen and (max-width: 1200px) {
  main {
    width: 100%;
    height: 100%;
    border: solid 1px #969696;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 20px 20px;
    background: #00d2ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #3a7bd5,
      #00d2ff
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #3a7bd5,
      #00d2ff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}
</style>
