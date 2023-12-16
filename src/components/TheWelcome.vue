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
      recent victoriesrecent victories
    </div>
    <div class="title">
      <footerStatusBar/>
    </div>
  </div>
</template>

<script setup>
import footerStatusBar from './FooterStatusBar.vue'
</script>

<style scoped>
.main {
  border: solid 1px #ffff;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  width: 100%;
  height: 20%;
}

@media screen and (max-width: 1200px) {
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
  background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);


  }
}
</style>