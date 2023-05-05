import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators } from '../state/index';

function ProfReducer(props) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.profile);
  console.log(data)

  return (
   <><button className="mocke" onClick={()=>{dispatch(actionCreators.profileAdd())}}>Deposi 10</button>
</>
  );
}

export default ProfReducer;
