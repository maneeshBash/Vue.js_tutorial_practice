<template>
<img alt="Vue logo" src="./assets/logo.png">
<br/>
<input type="text" ref="myElement" />
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message: '',
        }
    },
    created() {
        this.message = 'Component has been created'
        console.log(this.message)
        alert(this.message)
    },
    mounted(){
      console.warn('component is now mounted')
      alert('component is now mounted')
      this.$refs.myElement.focus();
    },
    beforeUnmount(){
      console.warn("Component is about to be destroyed");
      alert("Component is about to be destroyed")
    },
    unmounted(){
      console.warn('Component has been destroyed');
      alert('Component has been destroyed');
    }
   
}
</script>
