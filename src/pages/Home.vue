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
        async function getCurrentWeather(api) {
            await axios.get(api).then(response => {
                console.log(response.data)
                weather1.title = "1111111111111"
                weather = response.data;
            })
        }
        onMounted(() => {
            getLocation();
            console.log(weather.value)
            console.log(weather1.title)
        });

        return weather;
    },
}
</script>