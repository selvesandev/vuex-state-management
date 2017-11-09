import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

new Vuex.Store({
    //store is a method where you pass an object.
    state: {
        counter: 0
    }
});
