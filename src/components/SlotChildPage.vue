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
    box-shadow: 10px 15px 30px;
    background-color: #3498db;
    transition: all 0.5s ease, opacity 0.3s ease;
    opacity: 2;  
}
.cart:hover{
    transform: scale(1.1);
    opacity: 5;
}

</style>
