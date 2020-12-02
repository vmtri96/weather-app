<template>
    <div class="wrapper">
        <Left />
        <Right/>
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
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import Left from '../components/Left';
import Right from '../components/Right';

export default {
    components: {
        Left,
        Right,
    },
    setup() {
        let weather = reactive({});
        let weather1 = reactive({title: 'asdassass'});

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=60acb662839f9a6279f91ef167a37b9f`;
                    getCurrentWeather(API_URL);
                });
            }
        }
        function getCurrentWeather(api) {
            axios.get(api)
                .then(response => {
                    weather1.title = "1111111111111"
                    weather = response.data;
                    console.log("1 "+weather)
                }).catch(error => {
                    console.log(error);
                })
        }
        onMounted(() => {
            getLocation();
            console.log("2 "+weather.name)
            console.log("3 "+weather1.title)
        });

        return weather;
    },
}
</script>