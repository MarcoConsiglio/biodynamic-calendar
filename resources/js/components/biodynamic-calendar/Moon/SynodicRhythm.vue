<template>
    <div class="synodic-rhythm">
        <Illumination>
            <MoonPhase type="new_moon" timestamp="2000-01-01 10:00"></MoonPhase>
            <MoonPhase type="first_quarter" timestamp="2000-01-07 11:00"></MoonPhase>
            <MoonPhase type="full_moon" timestamp="2000-01-14 12:00"></MoonPhase>
            <MoonPhase type="third_quarter" timestamp="2000-01-28 13:00"></MoonPhase>
        </Illumination>
    </div>
</template>

<script>
import Illumination from './Illumination.vue'
import MoonPhase from './MoonPhase.vue'
export default {
    components: {
        Illumination, MoonPhase
    }
}
</script>
