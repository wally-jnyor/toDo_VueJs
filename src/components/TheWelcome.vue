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
    <div class="title">resume current weekly task</div>
    <div class="title">recent victoriesrecent victories</div>
    <div class="title">
      <footerStatusBar />
    </div>
  </div>
</template>

<script setup>
import footerStatusBar from './FooterStatusBar.vue'
</script>

<style scoped>
.main {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  width: 100%;
  height: 20%;
  padding: 15px;
}

@media screen and (max-width: 1200px) {
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    background-color: #100e17;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 1.1);
  }
}
</style>