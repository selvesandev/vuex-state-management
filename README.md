# Better State Management with VueX
Central Storage of the data. There is one file in our application
where we store our application state. That does not mean that our component does not have their own state.
If you have a property in a component which is only used by that component there is no use of that keeping it in the state.  

But everything that you use in the different part of your application should go in there.



### Create the store.
`/store/store.js` is the file where all your state will be gathered.   
Now download the `vuex` package which will help you to manage your state.
```
npm install --save vuex
```

Also download the vue js if you have not.
```
npm install --save vue
```

Now let the `vue js` know that it is using the `vuex` in `store.js`.
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

```
Now we enabled the vuex functionality in our vue application.  
Now you can create your store.
```
new Vuex.Store({
    //store is a method where you pass an object. 
});
```
the main task in the vue store is to have the state of our application.
```
export const store = new Vuex.Store({
    state:{
        //where you store all your state data
        counter:0,//like that the counter is our central store.
    }
});
```

Import the store in your main application js file and register it in your vue instance.
```
import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store'

new Vue({
    el: '#app',
    store,//store:store,
    render: h => h(App)
});
```

Now you can access your store using `$store` inside your components.
