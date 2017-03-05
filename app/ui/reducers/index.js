import { combineReducers } from 'redux';

import storiesIndexReducer from './reducer_story_index'

const rootReducer = combineReducers({
    indexStories: storiesIndexReducer
});

export default rootReducer;
