<template>
<img alt="Vue logo" src="./assets/logo.png"> <br>
<router-link to="/">Home</router-link> <br>
<router-link to="/about">About</router-link> <br>
<router-link to="/profile/hulk">profile</router-link> <br>
<router-view></router-view>
</template>

<script>
export default {
    name: 'App',


}
</script>
