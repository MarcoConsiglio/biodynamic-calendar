<template>
    <div class="month-header-space"></div>
    <div class="month-header flex justify-center drop-shadow-lg fixed top-0 left-0 right-0">
        <span class="month-name">{{ monthName }}</span>
    </div>
</template>

<script>
export default {
    props: {
        date: {
            type: String,
            required: true
        }
    },
    computed: {
        monthName() {
            return dayjs(this.date).format('MMMM')
        }
    }
}
</script>

<style scoped>


@font-face {
    font-family: 'Cookie';
    src: url('../../../fonts/Cookie-Regular.ttf') format("truetype");
}

.month-header {
    height: var(--month-header-height);
    background-color: #fff;
}

.month-header-space {
    height: var(--month-header-height);
}

.month-name {
    font-family: "Cookie";
    font-size: 36px;
    line-height: normal;
    text-align: center;
    color: var(--text-color);
    text-transform: capitalize;
}
</style>
