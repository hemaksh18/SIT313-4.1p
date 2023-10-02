import React from "react";
import Cards from "./cards";
import "./cards.css";
import listofstaff2 from "./listofstaff2";

function cardcomponent(staff, i) {
    return (
      <Cards
        key={staff.key}
        image={staff.image}
        name={staff.name}
        position={staff.position}
        rating={staff.rating}
        description={staff.description}
      />
    );
  }
  
  function listoftutorial() {
    return (
      <div>
        <div className="row">
          {listofstaff2.map((staff, i) => cardcomponent(staff, i))}
        </div>
        <button className="see-all-button">See All Tutorials</button>
       
      </div>
    );
  }
  
  export default listoftutorial;
  