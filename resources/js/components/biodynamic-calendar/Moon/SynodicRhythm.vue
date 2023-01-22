<template>
    <div class="synodic-rhythm">
        <Illumination>
            <MoonPhase type="new_moon" timestamp="2023-01-21 21:53"></MoonPhase>
            <MoonPhase type="first_quarter" timestamp="2023-01-28 16:18"></MoonPhase>
            <MoonPhase type="full_moon" timestamp="2023-02-05 19:28"></MoonPhase>
            <MoonPhase type="third_quarter" timestamp="2023-02-13 17:00"></MoonPhase>
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
