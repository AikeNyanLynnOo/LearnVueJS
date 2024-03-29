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

- Advanced Component Usage -
    Slot - carry all contents including dynamic data - benefit is no need to bind data and send
    Default element is allowed inside slot

    Replace by supported when slot="text" was not supplied 
    
    Using slots, can execute any function from parent is possible 
    For example, passing button holding a parent's function to child
    
    Styling for the same element - if no child modification, style from parent works, but if child modification occurs, style from child overwrites parent.

- Form Control - https://jsfiddle.net/AikeNyanLynnOo/1hfan4gd/

    v-model - for two way binding


    If option-value is not supported, the textContent is used as value 
    Use multiple attibute in select for multiple select
    Name attribute is no longer needed in form elements for data-binding

    For only one radio or checkbox - no value attribute is given, value is true/false for checkbox and no value is generated for radio
 
    modifiers - .lazy, .number(typecast), .trim

- Directives - 
    bind: called only once, when the directive is first bound to the element. This is where you can do one-time setup work.

    inserted: called when the bound element has been inserted into its parent node (this only guarantees parent node presence, not necessarily in-document).

    update: called after the containing component’s VNode has updated

    componentUpdated: called after the containing component’s VNode and the VNodes of its children have updated.

    unbind: called only once, when the directive is unbound from the element.

    
- Filters -

    Filters transform the format user see, not the data 
    Filters does not rerender the element 
    No longer supported in vue 3.0

- Mixins - 

    Centerate the duplicte properties
    Merge the local properties to the mixin
    Lifecycle - mixin first, host component later

    *** Mixins are created as the order in the array list of host element
    Accessing data property of second mixin by the first mixin is possible - but not methods properties
    Because, methods from second mixin have not already been registered 
    Accessing a method property of first mixin by the second mixin is possible - because first mixin has already been created and its methods are registered

    1. Property names in using mixins should be unique - recommended
    2. Access only pre-created mixin's property - nor Error encountered.

    Global Mixin - created everytime new vue instance is created
    Use to ship business logic in other apps

- Animations -

    Transition - only should use to animate pre-rendered html element, i.e., not for newly created elements by js code

    Using name and css class - eg. name="*"
    *-enter, *-enter-active, *-leave, *-leave-active
    Using class attributes 
    enter-class, enter-active-class, leave-class, leave-active-class
    Using transition lifecycle events and make styles by js - (:css="false") must be given
    @before-enter, @enter, @after-enter, @enter-cancelled, @before-leave, @leave, @after-leave, @leave-cancelled

- Routing - 
    Component will not be recreated on calling same component by itself
    To track params changes, write watcher for $route

    *** Component is recreated on calling by the parent component - no need watcher - params are auto-updated and component is recreate.

    Without backslash,route path is appended. Otherwise, route path is replaced. 
    All routes are based on the parent component's route.

    To ways to navigate routes
    - Using 'to' attribute
    - Using $router.push() method

    Naming routes is a good practice because we can concern on the params or query

    Router views also should be named to make a certain component loaded to that router view area.

    BeforeRoute Guards - Good place to check authentication 
    BeforeRouteEnter hook of a component is the very first executed hook before component is created. So no data cannot be accessed since created hook has not also been executed.
    Call next() method inside beforeRouteEnter hook to continue component creation.

    3 places to configure before route guards
    - beforeEach() -> global before route hook which runs before every route
    - beforeEnter() -> configure inside route configuration
    - beforeRouteEnter() -> configure inside the component as a lifecycle hook

    BeforeRouteLeave and BeforeRouteUpdate are only available inside components
    BeforeRouteUpdate can be used instead of watchers to update the route param data

    AfterRoute Guards 
    - afterEach() - global
    - beforeRouteUpdate() - inside component
    - beforeRouteLeave() - inside component

    Vuex
    - Reupdate(not rerender, update only the place where state is used) all components if state property changes which is used by those components
    - Use 'getters' for getting state value (mapGetters in component)
    - Using getters avoid problems of data accessing since we use complex structure with modules where directly accessing state property's name is difficult.
    - Using getters avoids accidentally changing state by the component since we store data in computed property within components
    - Using set() method within computed property to make changes back to global state
    - Use 'mutations' for centralizing operations and logic on state properties (mapMutations in component)
    - Mutations are synchronous - run in single thread
    - Use 'actions' (where we may write async code - eg api request) to get asynchronous behavior before commiting mutations - mapActions in component
    - Default payload for mutations and actions is Mouse Event Object
    - If we want to use payloads, we must pass it when calling function in component
    - Only one payload is allowed, for more, use object
    - Duplicate method names are not allowed in vuex store object
    - Use types to avoid duplication

    - mapGetters/mapMutuations/mapActions accept both [] and {}
    - [] is for name mapping where function name is mapped directly
    - {} is for type mapping where function name is defined by unique type - eg {customkey : type}