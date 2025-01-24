<template>
<img alt="Vue logo" src="./assets/logo.png">
<h1>beforeCreate and Created {{ name }}</h1>

<h1 ref="count">{{ counter }}</h1>
<button v-on:click="counter=counter+1">Update Value</button>

<button v-on:click="show=!show">Toggle button</button>
<UnmountedComp  v-if="show"/>
</template>

<script>
import UnmountedComp from './components/UnmountedComp.vue';
export default {
    name: 'App',
    components:{
        UnmountedComp
    },
    data() {
        console.warn("created ")
        return {
            name: 'MSDhoni',
            counter: 0,
            show:true
        }
    },
    beforeCreate() {
        alert("beforeCrete")
    },
    created() {
        alert("created")
    },
    beforeMount() {
        console.warn("beforeMount", this.$el)
    },
    mounted() {
        console.warn("mounted", this.$el)
    },
    beforeUpdate() {
        console.warn("beforeUpdate", this.$refs['count'].textContent)
    },
    updated() {
        console.warn("updated", this.$refs['count'].textContent)
    }

}
</script>
