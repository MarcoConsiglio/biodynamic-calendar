<template>
    <Layout>
        <MoonIllumination/>
    </Layout>
</template>

<script>
import Dayjs from 'dayjs'
import Layout from '../Layouts/Standard.vue'
import MoonIllumination from '../components/biodynamic-calendar/MoonIllumination.vue'
export default {
    components: {
        Layout,
        MoonIllumination
    },
    methods: {
        date(dateString) {
            return Dayjs(dateString)
        }
    }
}
</script>