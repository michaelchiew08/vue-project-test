<script setup>
import animation from '@/assets/Heart.json';
</script>

<template>
    <div>
        <h1>About me page</h1>
    </div>
    <div>
        <Vue3Lottie
            :animation-data="animation"
            :height="200"
            :width="200"
        />
    </div>
</template>