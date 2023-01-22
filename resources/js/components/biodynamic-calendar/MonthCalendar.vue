<template>
    <div>
        <MonthHeader :date="this.start"></MonthHeader>
        <div class="month-calendar-rectangle flex flex-col justify-center">
            <DayOfMonth v-for="day in days" :key="day" :date="day.format()">
            </DayOfMonth>
        </div>
    </div>
</template>

<script>
/**
 * The calendar of a specific month.
 * @requires './DayOfMonth.vue'
 * @requires './MonthHeader.vue'
 */
import DayOfMonth from './DayOfMonth.vue'
import MonthHeader from './MonthHeader.vue'
import dayjs from 'dayjs';
export default {
    components: {
        DayOfMonth,
        MonthHeader
    },
    props: {
        /**
         * The date of the first day of the month.
         */
        start: {
            type: String,
            required: true
        }
    },
    computed: {
        /**
         * Gets a list of all dates (days) of the month.
         */
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
