<template>
    <div id="app">
        <h1>Vue x</h1>
        <result></result>
        <counter></counter>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue'
    import Result from './components/Result.vue'

    export default {
        components: {
            Counter, Result
        }
    }
</script>

