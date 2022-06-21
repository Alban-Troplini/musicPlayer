import React, { useState } from "react";
import ListItem from "./ListItem";
import radioStations from "../../reducers/radioList";

import { FaListUl } from "react-icons/fa";
import "./List.css";

const List = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    const prevValue = isOpen;
    setIsOpen(!prevValue);
    console.log(radioStations);
  };

  const [radioList] = useState([radioStations]);

  return (
    <div className="sideBar">
      <button className="openbtn" onClick={toggleBar}>
        <FaListUl />
      </button>

      <div
        id="mySidepanel"
        style={isOpen ? { width: "400px" } : { width: "0" }}
        className="sidepanel"
      >
        {radioStations.map((item, index) => (
          <ListItem
            radioImg={item.radioImg}
            radioName={item.radioName}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
