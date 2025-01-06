<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <nav>
      <router-link to="/">Home</router-link>
      <br/> <br />
      <router-link to="/about">About</router-link>
    </nav>
    
    <!-- This is where the routed components will be injected -->
    <router-view></router-view>
  </div>
</template>

<script>
// You don't need to import HomeView and AboutView if you're routing them
export default {
  name: 'App'
}
</script>
