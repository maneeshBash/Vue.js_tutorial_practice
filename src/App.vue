<template>
<img alt="Vue logo" src="./assets/logo.png">
<br />
<div>
    <button @click="toggle">Toggle message</button>
    <transition name="fade">
        <p v-if="show">Hello World!</p>
    </transition>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            show: true
        };
    },
    methods: {
        toggle() {
            this.show = !this.show
        }
    }

}
</script>
<style>
.fade-enter-active, .fade-leave-active{
  transition: 1s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
