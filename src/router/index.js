import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../pages/Home';
import Search from '../components/Search';
import LeftWeather from '../components/LeftWeather';

const routes = [
    {
        path: "/",
        name: "Home",
        component: LeftWeather,
        // redirect: { name: 'Current_Weather' },
        // children: [
        //     {
        //         path: "/current",
        //         name: "Current_Weather",
        //         component: LeftWeather
        //     },
        //     {
        //         path: "/search",
        //         name: "Search",
        //         component: Search
        //     }
        // ]
    },
    {
        path: "/search",
        name: "Search",
        component: Search
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;