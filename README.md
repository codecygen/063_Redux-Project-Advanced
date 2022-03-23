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