<template>
    <div>
        <img src="../../../../../resources/images/moon_illumination.png" :style="style" />
        <!-- @slot Place here content related to the sinodyc rhythm of the Moon -->
        <slot></slot>
    </div>
</template>

<script>
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
