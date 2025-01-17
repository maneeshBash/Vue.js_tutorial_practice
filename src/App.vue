<template>
<SlotChildPage>
    <template v-slot:header>
        <h1>Hello Vue.js</h1>
    </template>
    <template v-slot:main>
        <p>A Vue.js project</p>
    </template>
    <template v-slot:footer>
        <button>View</button>
    </template>
</SlotChildPage>
<SlotChildPage>
    <template v-slot:header>
        <h1>Hello Evan You</h1>
    </template>
    <template v-slot:main>
        <p>Vue is actively maintained by a team of both full-time and volunteer members from all around the world, where Evan serves as the project lead.</p>
    </template>
    <template v-slot:footer>

    </template>
</SlotChildPage>
</template>

<script>
import SlotChildPage from './components/SlotChildPage.vue';

export default {
    name: 'App',
    components: {
        SlotChildPage
    }
}
</script>

<style>
h1 {
    color: orange
}
</style>
