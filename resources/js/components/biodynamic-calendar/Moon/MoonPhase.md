```vue
<template>
    <Layout>
        <div class="flex flex-row">
            <MoonPhase v-for="phase in phases" :type="phase.name" :timestamp="phase.timestamp" class="ml-4"/>
        </div>
    </Layout>
</template>
<script>
import Layout from '../../../Layouts/Standard.vue'
import MoonPhase from '../Moon/MoonPhase.vue'

export default {
    components: {
        Layout, MoonPhase
    },
    data() {
        return {
            phases: [
                {name: 'new_moon',      timestamp: '2023-01-01 09:00:00'},
                {name: 'first_quarter', timestamp: '2023-01-07 12:00:00'},
                {name: 'full_moon',     timestamp: '2023-01-14 16:00:00'},
                {name: 'third_quarter', timestamp: '2023-01-21 19:00:00'}
            ],
        }
    }
}
</script>
```
