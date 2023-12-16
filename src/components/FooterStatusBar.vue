<script setup>
import SearchBar from './SearchBar.vue';
</script>

<template>
  <div class="footer">
    <nav class="navBar">
        <li class="navigationList">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="navigationList">
          <RouterLink to="/quests">Quests</RouterLink>
        </li>
        <li class="navigationList">
          <RouterLink to="/status">Status</RouterLink>
        </li>
        <li class="navigationList">
          <RouterLink to="/bag">Bag</RouterLink>
        </li>
        <li class="navigationList">
          <RouterLink to="/battle">Battle</RouterLink>
        </li>
        <li class="navigationList">
          <RouterLink to="/about">About</RouterLink>
        </li>
      </nav>
      <SearchBar/>
  </div>
</template>

<style scoped>
.footer {
  height: 5rem;
  border: solid 1px #DD00FF;
  width: 100%;
  display: flex;
  align-items: end;
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
</style>