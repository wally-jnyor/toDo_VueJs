<template>
  <div class="main">
    <div class="container">
        <div class="card">
          <h3 class="title">Card 1</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
             cicle
          </div>
        </div>
        <div class="card">
          <h3 class="title">Card 1</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
             cicle
          </div>
        </div>
        <div class="card">
          <h3 class="title">Card 1</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
             cicle
          </div>
        </div>
        <div class="card">
          <h3 class="title">Card 1</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
             cicle
          </div>
        </div>
        <div class="card">
          <h3 class="title">Card 1</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
             cicle
          </div>
        </div>
        <div class="card">
          <h3 class="title">Card 1</h3>
          <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
             cicle
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.main {
  border: solid 1px #ffff;
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #100e17;
  font-family: 'Open Sans', sans-serif;
  padding-bottom: 10px;
}

.container {
  position: sticky;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
  border: solid 1px #ffff;
}

.card {
  display: flex;
  height: 85px;
  width: 170px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.2.5s ease-out;
}

.card:hover {
  transform: translateY(-10px);
  transition: 0.4s ease-out;
}

.card:hover ~ .card {
  position: relative;
  transition: 0.2.5s ease-out;
}

.title {
  color: white;
  font-weight: 300;
}
</style>