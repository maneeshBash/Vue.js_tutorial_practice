<template>
<img alt="Vue logo" src="./assets/logo.png">
<h1>Teleport Component</h1>
<teleport to="#footer"><FooterPage/>
</teleport>

</template>

<script>
import FooterPage from './components/FooterPage.vue';
export default {
    name: 'App',
  components:{
    FooterPage
  }
}
</script>
