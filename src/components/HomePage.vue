<template>
<h1>Hello from HomePage</h1>
<Child name="Manish" :user="user" :getData="getData" />
</template>

<script>
import Child from './ChildPage.vue'
export default {
    name: 'HomePage',
    components: {
        Child,
    },
    data(){
        return{
            user:{
                name:"peter",
                email:"peter@gmail.com"
            }
        }
    },
    methods:{
        getData(){
            console.warn("method called");
            alert("function called")
        }
    }
};
</script>
