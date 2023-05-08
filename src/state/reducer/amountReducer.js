/* eslint-disable no-undef */
import { fromJS } from 'immutable';
const initialState = fromJS({
    quote: '',
    assetUploading: false,
    fetchingAllAssets: false,
  });
const reducer = (state=initialState,action)=>{
    console.log('action in reducer is:',action);
    if (action.type==='kanye_success'){
        return state
          .set('quote', action.sidebar)
          .set('fetchingAllAssets', false)
          .set('fetchAllAssetSuccess', true);
    }
    else if(action.type==='kanye_failure'){
        console.log(state);
        return state
        .set('quote', action.error)
        .set('fetchingAllAssets', true)
        .set('fetchAllAssetSuccess', false
        );
    }
    return state;
}





export default reducer;