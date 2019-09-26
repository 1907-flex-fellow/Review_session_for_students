import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import thunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

// dispatch(plain_old_obj)
// dispatch(async_func)
=======
import reducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
>>>>>>> origin/master
