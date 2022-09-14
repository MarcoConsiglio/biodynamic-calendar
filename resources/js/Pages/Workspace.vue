<template>
    <Layout>
        <MoonPhase type="third_quarter" timestamp="2022-09-14 15:35"/>
    </Layout>
</template>

<script>
import Dayjs from 'dayjs'
import Layout from '../Layouts/Standard.vue'
import MoonPhase from '../components/biodynamic-calendar/Moon/MoonPhase.vue'
export default {
    components: {
        Layout,
        MoonPhase
    },
    methods: {
        date(dateString) {
            return Dayjs(dateString)
        }
    }
}
</script>