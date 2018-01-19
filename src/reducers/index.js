import {combineReducers} from 'redux';
import dummyData from './../components/dummyData';
import reducer from './reducer';


const allReducers = combineReducers({
    dataObj: dummyData,
    likeBookmarkManager: reducer
});

export default allReducers;