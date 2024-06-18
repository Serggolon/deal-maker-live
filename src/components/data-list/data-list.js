import React from "react";

import DataListItem from "../data-list-item";

const DataList = ({ investmentsList, totalValue }) => {
  return (
    <main>
      <p>
        Total value: <span>{totalValue}</span>
      </p>

      <ul>
        {investmentsList.map(({ name, initialInvestment, currentValue }) => (
          <DataListItem
            name={name}
            initialInvestment={initialInvestment}
            currentValue={currentValue}
          />
        ))}
      </ul>
    </main>
  );
};

export default DataList;
