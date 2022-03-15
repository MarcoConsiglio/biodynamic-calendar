<template>
    <div class="day-of-month-rectangle flex flex-col">
        <div class="day-of-the-month grow">{{ this.dayOfMonth }}</div>
        <div class="day-of-the-week grow">{{ this.dayOfWeek }}</div>
    </div>
</template>

<script>
export default {
    props: {
        dayOfMonth: Number,
        dayOfWeek: String
    }
}
</script>

<style>
:root {
    --text-color: #595c6e;
}

@font-face {
    font-family: 'Bernard MT';
    src: url('../../../fonts/Bernard MT Condensed.ttf') format("truetype");
}

@font-face {
    font-family: 'Lato';
    src: url('../../../fonts/Lato-Bold.ttf') format("truetype");
    font-weight: bold;
}

.day-of-month-rectangle {
    width: 73px;
    border-bottom-width: 2px;
    border-bottom-color: #e8e8e8;
}

.day-of-the-month {
    font-family: 'Bernard MT';
    font-size: 53px;
    line-height: normal;
    text-align: center;
    color: var(--text-color);
    text-transform: uppercase;
}

.day-of-the-week {
    font-family: "Lato";
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    height: 18px;
    line-height: 18px;
    color: var(--text-color);
}
</style>

