# Searchable Keywords:

## React-Redux-Toolkit-Store-File


## React-Redux-Toolkit-UI-Slice-File
- React-Redux-Toolkit-UI-Slice-Manipulated-File


## React-Redux-Toolkit-Cart-Slice-File
- React-Redux-Toolkit-Cart-Slice-Manipulated-File

# Clarifications of the code

```javascript
import { useDispatch, useSelector } from 'react-redux';
const dispatch = useDispatch();
dispatch(uiActions.toggle());
```

useDispatch is used to dispatch actions, whatever the action such as increasing, decreasing, toggling will be used by importing this function.

```javascript
export  const cartActions = cartSlice.actions;
```

```javascript
dispatch(uiActions.toggle());
```

actions (for example, cartActions for the example above) is exported because it is used inside the dispatch function to call a specific action (e.g increasing, decreasing, toggling anything)

```javascript
// This is index.js in the store folder
const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
```

```javascript
// This is slice file in the store folder
const initialCounterState = { counter: 0, showCounter: true };
```

```javascript
// This is component file where state is retrieved
// state.counter is drilling into the index.js file in the store folder
// showCounter is retrieving data of showCounter by drilling into the slice file
const show = useSelector(state => state.counter.showCounter);
```

useSelector is used to update the current state in the component so that it can be used inside that component as a source of data.

```javascript
const { title, quantity, total, price, id } = props.item;
```

Regardless of their order, if the props.item is "{id: 'p1', title: 'Book', quantity: 1, total: 6, price: 6}", destructuring will match keys of the props.item object with the assigned names on the left hand side of the equation.

# Async Code Implementation - Redux

- React-Redux-Async-Code-Implementation

IMPORTANT NOTE:

Reducers must be pure, side-effect free, synchronous functions. This is why, async code is not used in reducer.

Async tasks and side-effect should be executed inside the "components" (e.g. useEffect()) and Inside the "action creators".

# Thunk
Thunk is a function that delays an action until later. It means an action creator function does NOT return the action itself but another function which eventually returns the action.

- React-Redux-Action-Creator-Thunk