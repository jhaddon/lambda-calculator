import React from "react";
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

  // const [operatorsState] = useState(operators);
  // console.log("operators", useState());

  return (
    <div className="oprBtn">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

       operators.map((operators, index) => (
        <OperatorButton key={index} operators={operators} />
      ))}

    </div>
  );
};

export default Operators;