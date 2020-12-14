<template>
    <div class="right">
        <div class="degree-mode">
            
            <app-button
                title="&#176;C"
                color="grey"
                circle
                active
                >
            </app-button>

            <app-button
                title="&#176;F"
                color="grey"
                circle
                >
            </app-button>
        </div>

        <div class="weather-next">
            <app-card
                type="weather"
                weekdays="Tomorrow"
                maxDegree="17"
                minDegree="11"
                >
            </app-card>

            <div class="card-wrapper">
                <p class="date">Tomorrow</p>
                <div class="img-wrapper">
                    <img src="../assets/Shower.png" alt="weather">
                </div>
                <div class="degree-wrapper">
                    <p class="degree max">16&#176;C</p>
                    <p class="degree min">11&#176;C</p>
                </div>
            </div>

            <div class="card-wrapper">
                <p class="date">Tomorrow</p>
                <div class="img-wrapper">
                    <img src="../assets/Thunderstorm.png" alt="weather">
                </div>
                <div class="degree-wrapper">
                    <p class="degree max">16&#176;C</p>
                    <p class="degree min">11&#176;C</p>
                </div>
            </div>

            <div class="card-wrapper">
                <p class="date">Tomorrow</p>
                <div class="img-wrapper">
                    <img src="../assets/LightCloud.png" alt="weather">
                </div>
                <div class="degree-wrapper">
                    <p class="degree max">16&#176;C</p>
                    <p class="degree min">11&#176;C</p>
                </div>
            </div>

            <div class="card-wrapper">
                <p class="date">Tomorrow</p>
                <div class="img-wrapper">
                    <img src="../assets/LightCloud.png" alt="weather">
                </div>
                <div class="degree-wrapper">
                    <p class="degree max">16&#176;C</p>
                    <p class="degree min">11&#176;C</p>
                </div>
            </div>
        </div>

        <h2 class="today-hightlight">Today's Hightlights</h2>

        <div class="hightlight-wrapper">
            <app-card
                weatherParameter="Wind status"
                value="7"
                unit="mph"
                >
            </app-card>

            <div class="card-wrapper card-big">
                <p class="title">Humidity</p>
                <h2 class="main-value">84<span>%</span></h2>

            </div>

            <div class="card-wrapper">
                <p class="title">Visibility</p>
                <h2 class="main-value">6.4<span>miles</span></h2>
            </div>

            <div class="card-wrapper">
                <p class="title">Air pressure</p>
                <h2 class="main-value">998<span>mb</span></h2>
            </div>
        </div>

        <p class="signature">Tri Vo @DevChallenges.io</p>
    </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppCard from './AppCard.vue';

export default {
    components: {
        'app-button': AppButton,
        'app-card': AppCard,
    },
}
</script>

<style scoped>
@import '../styles/right.css';
</style>