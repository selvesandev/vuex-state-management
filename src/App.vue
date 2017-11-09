<template>
    <div class="container">
        <div class="row">
            <h1>
                Vuex
            </h1>
            <app-result></app-result>
            <app-counter></app-counter>
        </div>
    </div>
</template>

<script>
    import Counter from './Components/Counter.vue'
    import Result from './Components/Result.vue'

    export default {
        components: {
            appCounter: Counter,
            appResult: Result
        }
    }
</script>