<template>
    <h1>{{ name }}</h1>
    <h2>name:{{ user.name }}  <br/>email: {{ user.email }}</h2>
    <button v-on:click="getData()"> get data</button>

</template>

<script>
    export default{
        name:"ChildPage",
        
        props:{
            name:String,
            user:Object,
            getData:Function
        }
    }
</script>