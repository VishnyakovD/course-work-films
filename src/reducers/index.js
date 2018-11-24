/*
  Основной редьюсер в котором собираем все остальные
*/

import { combineReducers } from 'redux';
import films from './films';
import film from './films/film';
import ganres from './ganres';

const reducer = combineReducers({
  films,
  film,
  ganres
});

export default reducer;















