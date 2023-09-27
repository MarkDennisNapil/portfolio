import { createStoreHook } from "react-redux"

const Reducer = (state = {counter:0}, action) => {
    if(action.type === 'inc'){
        return {counter: state.counter++};
    }
    return state;
}

const store = createStoreHook(Reducer);
export default store;