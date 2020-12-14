<template>
    <div class="left-weather">
        <div class="top-wrapper">

            <router-link to="/search">
                <app-button
                    title="Search for places"  
                    color="grey"
                    >
                </app-button>
            </router-link>

            <app-button
                color="grey"
                circle
                icon="gps_fixed"
                @click="fetchData"
                >
            </app-button>
        </div>

        <div class="img-wrapper">
            <img src="../assets/Shower.png" alt="weather">
        </div>
        
        <h1 class="degree">{{ temp }}<span>&#176;C</span></h1>
        <h2 class="weather-status">{{ state.weather.weather[0].main }}</h2>
        <p class="date">Today &#183; {{ new Date().toLocaleDateString() }}</p>
        <p class="location"><span class="material-icons">place</span>{{ state.weather.name }}</p>
    </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import AppButton from './AppButton.vue';

export default {
    components: {
        'app-button': AppButton,
    },
    setup() {
        const state = reactive({});
        let temp = ref(null);

        async function fetchData() {
            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(async position => {
                    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=60acb662839f9a6279f91ef167a37b9f`;
                    const data = await fetch(API_URL);
                    const obj = JSON.parse(await data.text());
                    state.weather = obj;
                });
            }
        }

        function convertFToC(temperature) {
            return Math.round((temperature - 32) * 5 / 9);
        }

        fetchData();

        onMounted(() => {
            temp.value = convertFToC(state.weather.main.temp);
        });

        return {
            state,
            temp,
            fetchData,
        };
    },
}
</script>

<style scoped>
@import '../styles/left-weather.css';
</style>