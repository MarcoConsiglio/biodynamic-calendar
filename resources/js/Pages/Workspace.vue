<template>
    <Layout>
        <ThirdQuarter/>
    </Layout>
</template>

<script>
import Dayjs from 'dayjs'
import Layout from '../Layouts/Standard.vue'
import ThirdQuarter from '../components/biodynamic-calendar/Moon/ThirdQuarter.vue'
export default {
    components: {
        Layout,
        ThirdQuarter
    },
    methods: {
        date(dateString) {
            return Dayjs(dateString)
        }
    }
}
</script>