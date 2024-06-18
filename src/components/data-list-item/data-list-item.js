import React from "react";

import "./data-list-item.css";

const DataListItem = ({ name, initialInvestment, currentValue }) => {
  return (
    <li>
      <p>
        Name:<span>{name}</span>
      </p>
      <p>
        Initial investment:<span>{initialInvestment}</span>
      </p>
      <p>
        Current value:
        <span>{currentValue}</span>
      </p>
    </li>
  );
};

export default DataListItem;
