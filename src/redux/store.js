import { createStore, applyMiddleware, compose } from "redux";
import reducer from '../reducers';

/*
  Различные миддлвейр которые нужны в нашем проекте.
*/
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import promises from './middleware/promises';

// Проверяем мод и если это не продакшн, подключаем redux-dev-tools
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// applyMiddleware -
const middleware = applyMiddleware(thunk, logger, promises);

const store = createStore( reducer, composeEnhancers(middleware) );

export default store;
