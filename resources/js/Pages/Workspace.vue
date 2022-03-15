<template>
    <Layout>
        <Day-Of-Month dayOfMonth="12" dayOfWeek="Mar"></Day-Of-Month>
    </Layout>
</template>

<script>
import Layout from '../Layouts/Standard.vue'
import DayOfMonth from '../components/biodynamic-calendar/DayOfMonth.vue'
export default {
    components: {
        Layout,
        DayOfMonth
    }
}
</script>