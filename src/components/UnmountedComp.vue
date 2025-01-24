<template>
    <h1 ref="user">In BeforeUnmount and Unmounted component</h1>
</template>
<script>
export default{
    name:'UnmountedComp',
    beforeUnmount(){
        console.log("beforeUnmount", this.$refs['user']);
    },
    unmounted(){
        console.log("Unmounted", this.$refs['user']);
    }

}
</script>