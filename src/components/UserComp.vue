<template>
<div id="div">
    <h2>{{ data.name }}</h2>
    <h2>{{ data.email }}</h2>
    <button @click="getData(data.name,data.email)">getData</button>
</div>
</template>

<script>
export default {
    name: 'UserComp',
    props: {
        data: Object,
        getData: Function
    }
}
</script>

<style>
#div {
    background-color: aqua;
}
</style>
