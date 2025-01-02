<template>
<h1>Dynamic class binding</h1>
<h2 :class="applyStyles">Homepage</h2>
<button v-on:click="colorfull=!colorfull">toggleClass</button>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            colorfull: true
        }
    },
    computed:{
        applyStyles(){  //multiple dynamic classes add in one function under computed: property
            return{
                green:this.colorfull,
                err:true,
                other:false
            }
        }
    }

};
</script>

<style scoped>
.green {
    background-color: green;
    width: 200px;
    padding: 20px;
    display: flex;
    justify-content: center;
}
.err{
color: red;
}
.other{
font-size: 50px;
}
</style>
