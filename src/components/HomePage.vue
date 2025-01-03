<template>
<h1>Ref in vue.js</h1>
<input type="text" ref="input" placeholder="type here!">
<button v-on:click="getData">Click me!</button>
</template>

<script>
export default {
    name: 'HomePage',
    methods:{
        getData(){
            this.$refs.input.focus();
           
            let val = this.$refs.input.value;
            console.log(val)
            this.$refs.input.style.color="green"
        }
    }

};
</script>

<style scoped>

</style>
