<template>
  <div id="app">
    <div class="container">
      <img class="logo" src="./assets/alogo.png">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 12px;
    padding: 30px 0;
  }
  .logo{
    margin-bottom: 20px;
  }
</style>
