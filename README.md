## Intro to Redux Lecture Exercises



## Assessment 1
* In Header.js, use `mapStateToProps` to give the `Header` the `counter` prop

* You should see the count render on the page


## Assessment 2

* In Button.js, use `mapDispatchToProps` to give the  `Button` a function.
  * The function should return an action to increment the counter

* When you click the button, it dispatches an **action** to `INCREMENT_COUNT`

* If you use redux devtools, you should be able to see the action get dispatched every time the number is clicked.


## Assessment 3

* Open `store.js`

* The `App` is subscribed to this redux **store**, and rerenders every time state **changes** so it should show the number increment every time you click the button and dispatch the action.
* Why isn't the `App` re rendering?
