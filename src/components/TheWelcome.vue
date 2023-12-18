<template>
  <div class="main">
    <div class="title">
      <div>
        data
      </div>
      <div class="score"></div>
      <div class="score">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="title">
      <div class="score"></div>
    </div>
    <div class="title"></div>
    <div class="title"></div>
  </div>
</template>

<script setup>
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
  height: 17.5%;
  padding: 15px;
  border-radius: 10px;
  /*
  background-color: #100e17;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 1.01)*/
}

.navigation {
  width: 100%;
  height: 17.5%;
  padding: 15px;
}

li {
  border: solid 1px #ffff;
  list-style: none;
  width: 5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 10px;
}
.navBar {
  display: flex;
  width: 100%;
  height: 70%;
}

@media screen and (max-width: 1200px) {
  .navBar {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 1200px) {
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>