<template>
    <div class="left">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.left {
    width: 460px;
    background-color: #1E213A;
    padding: 30px 35px;
    min-height: 100vh;
    
}
</style>

<script>
// import LeftWeather from './LeftWeather'

export default {
    props: {
        weather: Object,
    }
}
</script>