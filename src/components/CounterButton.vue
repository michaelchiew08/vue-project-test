<script setup>
import { reactive, ref } from 'vue';

// Simply can use 'counter++' to react with state change
const counter = ref(0);

// With function as the example to react with state change
const count = ref(0);
function increment() {
  count.value++;
}
function decrement() {
  count.value--;
}
function say(message) {
  alert(message)
}

// [Reactive] method to listen to state, but destructive due to limitation  
// https://vuejs.org/guide/essentials/reactivity-fundamentals#limitations-of-reactive
const state = reactive({ count: 0 })
</script>

<template>
    <div class="card">
        <div>
            <button type="button" @click="counter++">count is {{ counter }}</button>
        </div>
        <div>
            <button type="button" @click="increment">count is {{ count }}</button>
            <button type="button" @click="decrement">count is {{ count }}</button>
            <button type="button" @click="say('hello')">Say hello</button>
        </div>
        <div>
            <button type="button" @click="state.count++">count is {{ state.count }}</button>
        </div>
        <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>
</template>
