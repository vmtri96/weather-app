<template>
    <button class="btn" :class="[btnColor, { 'btn-circle': circle, 'active': active }]">
        {{ title }}
        <i class="material-icons" v-if="icon">{{ icon }}</i>
    </button>
</template>

<script>
import { ref } from 'vue';
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        circle: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        active: {
            type: Boolean,
            default: false,
        }
    },
    setup(props) {
        let btnColor = ref('');
        btnColor = "btn-" + props.color;
        

        return {
            btnColor
        }
    }
}
</script>