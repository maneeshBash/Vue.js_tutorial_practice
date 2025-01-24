<template>
    <h1>{{profile}}'s ProfileView Page</h1>
    </template>
    
    <script>
    import { useRoute } from 'vue-router';
        export default{
            name:'ProfileView',
            mounted(){
                const route = useRoute();
                console.warn("route", route.params.name)
                this.profile = route.params.name
            },
            data(){
                return{
                    profile:'',
                }
            }
        }
    
    </script>