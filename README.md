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
- see component_communication -
    Data property should be a function - that returns the data as an object
    
    Data communication should be cared for object sending from parent to child - the whole object is recommended to sent - i.e. Don't send only a value without key 

    For sending reference types (arrays and objects), change from child component is automatically reflected - because same memory location

    For sending primitive types (string and numbers), change from chiled component won't reflect to the parent component (* but reflect in parent -> child) - because different memory location. The value is copied from parent to child.

    If we want to send back the updated value from child to parent, should emit an event. 

    3 possible ways of updating data back to parent 
    - using reference types - so auto-update available
    - using primitive types - but emitting events
    - using props functions - passed from parent to child

    4 possible ways of child to child communication
    - using reference types - child->parent->sibling
    - emitting event        - child->parent->sibling
    - using props functions - child->parent->sibling
    - event bus             - child->child 


    ** Important **
    Every change to the parent's property rerender the whole parent template
    Be aware - even if only one property change in parent may result changes in other properties in children
    This is because - we transfer the properties to the children by binding in the parent's template
    The parent's template is rerendered and the properties are overwritten.
    Use data property or computed property to prevent rerendering in child template.