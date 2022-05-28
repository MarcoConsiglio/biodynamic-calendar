<template>
    <div class="month-calendar-rectangle flex flex-col justify-center">
        <DayOfMonth v-for="day in days" :key="day" :date="day">
        </DayOfMonth>
    </div>
</template>

<script>
import Dayjs from 'dayjs'
import DayOfMonth from './DayOfMonth.vue'
import dayjs from 'dayjs';
export default {
    components: {
        DayOfMonth
    },
    props: {
        // The starting day of this month.
        start: {
            type: String,
            required: true
        },
        // The ending day of this month.
        end: {
            type: String,
            required: true
        }
    },
    // data() {
    //     return {
    //         startDay: this.start,
    //         endDay: this.end
    //     }
    // },
    computed: {
        days() {
            return new Array(
                // How many days are in this month?
                // That should be the array length.
                dayjs(this.start).daysInMonth()
            ).fill(null).map(
                // Start adding day by day to the array
                (x, i) => dayjs().startOf('month').add(i, 'days')
            );

        }
    }
}
</script>

<style scoped>
.month-calendar-rectangle {
    width: 72px;
    background-color: white;
    box-shadow: 2px 0px 6px rgba(167, 167, 167, 0.16);
}
</style>