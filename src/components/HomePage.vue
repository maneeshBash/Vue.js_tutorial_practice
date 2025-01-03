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
<h3> Select country</h3>
<select v-model="form.country">
    <option>India</option>
    <option>Usa</option>
    <option>China</option>
</select>

<h3>Technology</h3>
<label>Java : </label>
<input type="checkbox" value="java" v-model="form.technology" />
<br /> <br />
<label>.Net : </label>
<input type="checkbox" value=".net" v-model="form.technology" />
<br /> <br />

<h3>Select gender</h3>
<label>Male : </label>
<input type="radio" value="male" v-model="form.gender" />
<br /> <br />
<label>Female : </label>
<input type="radio" value="female" v-model="form.gender" />
<br /> <br />
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: '',
                technology: [],
                gender: ''

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
