import React from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state

  // const [specialsState] = useState(specials);
  // console.log("specials", useState());

  return (
    <div className="spcBtn">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

       specials.map((specials, index) => (
        <SpecialButton key={index} specials={specials} />
      ))}

    </div>
  );
};

export default Specials;