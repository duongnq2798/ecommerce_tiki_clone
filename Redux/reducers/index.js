// Imports: Dependencies
import {combineReducers} from 'redux';

// Imports: Reducers
import ShopApp from './ShopApp';
import Language from './Language';
// Redux: Root Reducer
const rootReducer = combineReducers({
  ShopApp: ShopApp,
  Language: Language,
});

// Exports
export default rootReducer;
