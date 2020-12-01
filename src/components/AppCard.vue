<template>
    <div class="card-wrapper" v-if="type === 'weather'">
        <p class="date">{{ weekdays }}</p>
        <div class="img-wrapper">
            <img src="../assets/LightCloud.png" alt="weather">
        </div>
        <div class="degree-wrapper">
            <p class="degree max">{{ maxDegree }}&#176;C</p>
            <p class="degree min">{{ minDegree }}&#176;C</p>
        </div>
    </div>

    <div class="card-wrapper card-big" v-else>
        <p class="title">{{ weatherParameter }}</p>
        <h2 class="main-value">{{ value }}<span>{{ unit }}</span></h2>
    </div>
</template>

<script>
export default {
    props: {
        weekdays: String,
        type: String,
        img: String,
        minDegree: String,
        maxDegree: String,
        weatherParameter: String,
        value: String,
        unit: String,
    }
}
</script>

<style scoped>
@import '../styles/right.css';
</style>