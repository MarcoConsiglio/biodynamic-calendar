<template>
    <div class="day-of-month-rectangle flex flex-col">
        <div class="day-of-the-month grow">1</div>
        <div class="day-of-the-week grow">LUN</div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
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
    height: 81px;
    width: 73px;
    border-bottom-width: 2px;
    border-bottom-color: #e8e8e8;
}

.day-of-the-month {
    font-family: 'Bernard MT';
    font-size: 57px;
    height: 63px;
    line-height: normal;
    text-align: center;
    color: var(--text-color);
}

.day-of-the-week {
    font-family: "Lato";
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    width: 73px;
    height: 18px;
    line-height: normal;
    color: var(--text-color);
}
</style>

