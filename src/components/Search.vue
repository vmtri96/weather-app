<template>
    <div class="search">
        <router-link to="/">
            <a href="#" class="close-btn">&times;</a>
        </router-link>

        <div class="search-input">
            <input type="text" placeholder="search location">
            <!-- <button class="btn btn-blue">Search</button> -->
            <app-button
                title="Search"
                color="blue"
                >
            </app-button>
        </div>

        <ul class="result">
            <li>
                <p>London 
                    <span class="material-icons">
                        keyboard_arrow_right
                    </span>
                </p>
            </li>
            <li>
                <p>Barcelona
                    <span class="material-icons">
                        keyboard_arrow_right
                    </span>
                </p>
            </li>
        </ul>
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
@import '../styles/search.css';
</style>