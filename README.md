    Don't use arrow functions for event callbacks - 'this' event is not binded to the callback
    Don't use arrow functions for accessing or updating properties - 'this' is not understood
    Every times the property value change, every use case rerendered in the template
    Use 'v-once' to render the use case once, don't rerender the applied element on property-update
    Order parameters carefully working with methods

- Vue Instance -
    Creating new property in vue instance is possible, but that property will not be under _data/$data object. So we should not do that.
    Updating Dom using $ref property may be overwritten by the next Dom update, because it is directly to the Dom and not reactive to the vue instance 

    Components should be declared topmost section
    Components tag don't work outsite of the vue instance tag - component tags should be within one of the vue instance tags

    Vue instance generate the html code either directly from the el property we given or the template property which can be provided.

    If we use the template property, we should later mount the instance - defining where we should place our template 

    VueJs generates a virtual Dom, and then write to real Dom.
    In every change the whole virtual Dom is regenerated, but not to the real Dom. 
    VueJs watches the difference between the virtual and real Dom and update only the changed part.
    So becomes VueJs fast.

- Vue Instance Life Cycle - 
    beforeCreate()
    created()
    beforeMount()
    mounted()
    beforeUpdate()
    Updated()
    beforeDestroy()
    destroyed()    


- Vue cli -
    Instead of render method

    1) Using the ES6 Spread Operator (for that, you need to add babel-preset-stage-2 as a Dependency and to your .babelrc File):

    npm install --save-dev babel-preset-stage-2 

    .babelrc:

    {
    "presets": [
        ["es2015", { "modules": false }],
        ["stage-2"]
    ]
    }


    import Vue from 'vue'
    import App from './App.vue'

    new Vue({
    el: '#app',
    ...App
    });


    2) Using mount() :

    Also install the stage-2 preset as described above.

    import Vue from 'vue'
    import App from './App.vue'

    const vm = new Vue({
    ...App
    });

    vm.$mount('#app');    


- Vue Components -

Data property should be a function - that returns the data as an object
