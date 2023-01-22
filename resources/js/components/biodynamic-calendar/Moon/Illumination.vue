<template>
    <div :style="style">
        <img src="../../../../../resources/images/moon_illumination.png" :style="style"
            class="absolute"/>
        <div class="flex flex-col moon-phases">
            <!-- @slot Place here content related to the sinodyc rhythm of the Moon -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
/**
 * Represents the illumination of the Moon.
 */
export default {
    data () {
        return {
            style: {
                height: "2044px",
                width: "57px"
            }
        }
    }
}
</script>

<style>
.moon-phases > div {
    z-index: 0;
    position: relative
}
</style>
