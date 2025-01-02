<template>
<h1>Hello from HomePage</h1>
<ul>
    <li v-for="item in users" :key="item.name">
        <UserComp :data="item" :getData="getData" />

    </li>
</ul>
</template>

<script>
import UserComp from './UserComp.vue'
export default {
    name: 'HomePage',
    components: {
        UserComp,
    },
    methods: {
        getData(name, email) {
            alert(`Name: ${name}, Email:${email}`)
        }
    },
    data() {
        return {
            users: [{
                    name: "peter",
                    email: "peter@gmail.com"
                },
                {
                    name: "Joe",
                    email: "Joe@gmail.com"
                },
                {
                    name: "Jane",
                    email: "Jane@gmail.com"
                }

            ]
        }
    }

};
</script>
