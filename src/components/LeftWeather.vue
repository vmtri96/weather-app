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
                >
            </app-button>
        </div>

        <div class="img-wrapper">
            <img src="../assets/Shower.png" alt="weather">
        </div>
        
        <h1 class="degree">15<span>&#176;C</span></h1>
        <h2 class="weather-status">Shower</h2>
        <p class="date">Today &#183; Fri, 5 Jun</p>
        <p class="location"><span class="material-icons">place</span>Helsinki</p>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
    components: {
        'app-button': AppButton,
    }
}
</script>

<style scoped>
@import '../styles/left-weather.css';
</style>