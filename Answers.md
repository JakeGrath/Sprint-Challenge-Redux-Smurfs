1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

No side effects; filter, map, concat.

Create new object while extending properties- Object.assign()
source- https://www.telerik.com/blogs/functional-programming-with-javascript-object-arrays

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions- These get fed into the reducers, they're objects with two properties: type and payload. Used to define actions and send data to reducers.

    Reducers- These modify the state of the app, it takes the current state and returns a new state based on modifications.

    Store- This is where the state of the app is stored. There can only be one, that's why its called the single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state holds data for the entire app, while Component holds data for only itself. Application states should be used by default, except for when
a component's state needs to be modified before being added to the application's state. A good use case would be for forms, the data typed into them shouldn't
be sent to app until it is complete.

1.  What is middleware?

Middleware intercepts a function, and then depending on what happens during the interception, allows the function to continue, or halts it.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows asynchronous(sp?) operations inside of redux action creators. It allows our action creators to run functions and API calls without
halting the app. (I think, I spent way too much time on the project and forgot about the answers)

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
