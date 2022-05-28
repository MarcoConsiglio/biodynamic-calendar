<template>
    <Layout>
        <MonthCalendar start="2022-05-01" end="2022-05-31"></MonthCalendar>
        <!-- <DayOfMonth date="2022-05-28"></DayOfMonth>
        <DayOfMonth date="2022-05-29"></DayOfMonth>
        <DayOfMonth date="2022-05-30"></DayOfMonth> -->
    </Layout>
</template>

<script>
import Dayjs from 'dayjs'
import Layout from '../Layouts/Standard.vue'
import MonthCalendar from '../components/biodynamic-calendar/MonthCalendar.vue'
// import DayOfMonth from '../components/biodynamic-calendar/DayOfMonth.vue'
export default {
    components: {
        Layout,
        MonthCalendar,
        // DayOfMonth
    },
    methods: {
        date(dateString) {
            return Dayjs(dateString)
        }
    }
}
</script>