<template>
<img alt="Vue logo" src="./assets/logo.png">
<br />
<h1>Item list</h1>
<ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
<p v-if="error">{{ error }}</p>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            items: [],
            error: null
        };
    },
   async mounted() {
    try{
        const response = await axios.get('https://api.example.com/items')
            this.items = response.data;
        
        }catch(error) {
            this.error = 'Failed to fetch items: ' + error.message;
        
        }
      
    }

}
</script>
