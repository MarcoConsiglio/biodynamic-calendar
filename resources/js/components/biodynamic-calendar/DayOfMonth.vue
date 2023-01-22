<template>
    <div class="day-of-month-rectangle flex flex-col">
        <div class="day-of-the-month grow">{{ monthDay }}</div>
        <div class="day-of-the-week grow">{{ weekDay }}</div>
    </div>
</template>

<script>
/**
 * A day of a month.
 */
import Dayjs from 'dayjs'
export default {
    props: {
        /**
         * The date that the component will show as the day of the month
         */
        date: {
            type: String,
            required: true
        }
    },
    computed: {
        /**
         * Format the date as a day of the month.
         */
        monthDay() {
            return Dayjs(this.date).format('D')
        },
        /**
         * Format the date as a day of the week.
         */
        weekDay() {
            return Dayjs(this.date).format('ddd')
        }
    }
}
</script>

<style scoped>
/* :root {
    --text-color: #595c6e;
} */

@font-face {
    font-family: 'Bernard MT';
    src: url('../../../fonts/Bernard MT Condensed.ttf') format("truetype");
}

@font-face {
    font-family: 'Lato';
    src: url('../../../fonts/Lato-Bold.ttf') format("truetype");
    font-weight: bold;
}

.day-of-month-rectangle {
    width: 73px;
    border-bottom-width: 2px;
    border-bottom-color: #e8e8e8;
}

.day-of-the-month {
    font-family: 'Bernard MT';
    font-size: 53px;
    line-height: normal;
    text-align: center;
    color: var(--text-color);
    text-transform: uppercase;
}

.day-of-the-week {
    font-family: "Lato";
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    height: 18px;
    line-height: 18px;
    color: var(--text-color);
}
</style>

<!--
Example usage

<Day-Of-Month :dayOfMonth="12" dayOfWeek="Mar"></Day-Of-Month>
-->

