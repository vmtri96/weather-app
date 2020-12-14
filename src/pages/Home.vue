<template>
    <div class="wrapper">
        <Left />
        <Right />
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    background-color: #100E1D;
    min-height: 100vh;
}
</style>

<script>
import Left from '../components/Left';
import Right from '../components/Right';

export default {
    components: {
        Left,
        Right,
    },
}
</script>