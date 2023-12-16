<script setup>
import FooterStatusBar from './components/FooterStatusBar.vue'
</script>

<template>
  <header></header>

  <RouterView />
  <FooterStatusBar/>
</template>

<style scoped>
header {
  border: solid 1px #006eff;
}
</style>
