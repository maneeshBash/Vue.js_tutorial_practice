<template>
  
    <img alt="Vue logo" src="./assets/logo.png">
    
    <div>
      <h1>{{ count }}</h1>
      <button @click="increment">Increment</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapState(['count'])
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    }
  }
}
</script>
