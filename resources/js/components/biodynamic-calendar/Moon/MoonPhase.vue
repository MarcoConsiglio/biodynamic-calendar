<template>
    <div style="width:55px" class="flex flex-col">
        <img v-if="moon_phase == 'new_moon'"      src="images/new_moon.png">
        <img v-if="moon_phase == 'first_quarter'" src="images/first_quarter.png">
        <img v-if="moon_phase == 'full_moon'"     src="images/full_moon.png">
        <img v-if="moon_phase == 'third_quarter'" src="images/third_quarter.png">
        <div class="hours mx-auto">{{ time }}</div>
    </div>
</template>

<script>
import Dayjs from 'dayjs'
export default {
    props: {
        /**
         * The moon phase type.
         * @values new_moon, first_quarter, full_moon, third_quarter
         */
        type: { // Which moon phase is.
            type: String,
            required: true,
            validator(value) {
                return [
                    'new_moon',
                    'first_quarter',
                    'full_moon',
                    'third_quarter'
                ]
            }
        },
        timestamp: { // The phase timestamp.
            type: String,
            required: true
        }
    },
    data() {
        return {
            moon_phase: this.type
        }
    },
    computed: {
        time() { // The time when the phenomenon occurs
            return Dayjs(this.timestamp).format('H')
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'Britannic';
    font-weight: bold;
    src: url('../../../../fonts/Britannic Bold Regular.ttf') format("truetype");
}
.hours {
    font-family: "Britannic", sans-serif;
    font-weight: bold;
    font-size: 16px;
}
</style>
