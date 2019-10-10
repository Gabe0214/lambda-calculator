import React, {useState} from "react";


//import any components needed

//Import your array data to from the provided data file

import { specials } from "../../../data";

import SpecialButton from "./SpecialButton";

const Specials = () => {
  // STEP 2 - add the imported data to state
   const [specialsState, setSpecialsState] = useState(specials)
  
  
  
   return (
    <div>
       {specialsState.map((button, index) => (
         <SpecialButton key={index} button ={button}/>
       ))}
    </div>
  );
      
};
export default Specials