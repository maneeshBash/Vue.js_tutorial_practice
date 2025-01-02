<template>
<h1>Hello from HomePage</h1>
<div v-html="text"></div>
<div v-html="tag1"></div>
<div v-html="tag2" ></div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            text: "Hello from Vue.js",
            tag1: '<h1>h1 tag binding',
            tag2: '<h2>h1 tag binding'

        }
    }

};
</script>
