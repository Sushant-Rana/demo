import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators } from '../state/index';

function Bank(props) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.amount);
  console.log(data)

  return (
   <><button className="mocke" onClick={()=>{dispatch(actionCreators.depositMoney(10))}}>Deposi 10</button>
</>
  );
}

export default Bank;