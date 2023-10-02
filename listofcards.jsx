import React from "react";
import Cards from "./cards";
import "./cards.css";
import listofstaff from "./listofstaff";

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

function Listofcards() {
  return (
    <div>
      <div className="row">
        {listofstaff.map((staff, i) => cardcomponent(staff, i))}
      </div>
      <button className="see-all-button">See All Articles</button>
     
    </div>
  );
}

export default Listofcards;