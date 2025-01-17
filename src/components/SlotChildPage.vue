<template>
<div class="cart">
    <header>
    <slot name="header"></slot>
</header>
<content>
    <slot name="main"></slot>
</content>
<footer>
    <slot name="footer"><button>Click me!</button></slot>
</footer>
</div>
</template>

<script>
export default {
    name: 'SlotChildPage',

}
</script>
<style>
.cart{
    border: 1px solid 5px;
    width: 270px;
    padding: 20px;
    margin: 15px;
    text-align: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: #3498db;
    transition: all 0.5s ease, opacity 0.3s ease;
    opacity: 2;  
}
.cart:hover{
    transform: scale(1.1);
    opacity: 5;
}
</style>
