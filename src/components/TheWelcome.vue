<template>
  <div class="main">
    <div class="container">
      <div class="title">
        <h2>Hello, NAME!</h2>
        <p>Doing now:</p>
        <p>something motivating</p>
        <div class="navbar">
          <li class="navigationList">
            <RouterLink to="/user-details">Details</RouterLink>
          </li>
        </div>
      </div>
      <div class="title">
        <h2>Missions</h2>
        <p>Doing now:</p>
        <div class="navbar">
          <li class="navigationList">
            <RouterLink to="/quests">Details</RouterLink>
          </li>
        </div>
      </div>
      <div class="title">
        <h2>Completed</h2>
        <p>something motivating</p>
        <div class="navbar">
          <li class="navigationList">
            <RouterLink to="/bag">Details</RouterLink>
          </li>
        </div>
      </div>
      <div class="title"></div>
    </div>
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
    border: solid 1px;
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
  .title {
    border: solid 1px;
  }
}
</style>