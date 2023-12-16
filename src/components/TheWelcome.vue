<template>
  <div class="main">
    <div class="title">
      Hello, Name
      <div class="score">score: ????</div>
    </div>
    <div class="title">
      Enemi Name
      <div class="score">score: ????</div>
    </div>
    <div class="title">
      resume current weekly task
    </div>
    <div class="title">
      recent victories
    </div>
  </div>
</template>

<style scoped>
.main {
  border: solid 1px #ffff;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  border: solid 1px #ffff;
  width: 100%;
  height: 20%;
}
</style>