<template>
<h1>Dynamic Component</h1>
<button @click="tab = 'JavaPage'">JavaPage</button>
<button @click="tab = 'PHPPage'">PHPPage</button>
<button @click="tab = 'PythonPage'">PythonPage</button>

<component :is="tab" />
</template>

<script>
import JavaPage from './JavaPage.vue';
import PHPPage from './PHPPage.vue';
import PythonPage from './PythonPage.vue';

export default {
    name: "TechnologyHome",
    components: {
        JavaPage,
        PHPPage,
        PythonPage
    },
    data() {
        return {
            tab: 'JavaPage'
        }
    }
}
</script>
