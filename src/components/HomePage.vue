<template>
<h1>Simple form in vue.js</h1>
<p>{{ form }}</p>
<form>
    <label>Email : </label>
    <input type="text" placeholder="Enter email" v-model="form.email" />
    <br /> <br />
    <label>Password : </label>
    <input type="password" placeholder="Enter password" v-model="form.password" />
    <br /> <br />
    <button v-on:click="login" type="button">Login</button>
</form>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            console.warn("login data: ", this.form)
        }
    }
};
</script>
