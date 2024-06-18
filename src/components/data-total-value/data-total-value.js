import React, { useState } from "react";

import DataListItem from "../data-list-item";

const DataList = () => {
  const [dataList, setDataList] = useState({
    investments: [
      { name: "Company A", initialInvestment: 100000, currentValue: 150000 },
      { name: "Company B", initialInvestment: 200000, currentValue: 250000 },
      { name: "Company C", initialInvestment: 50000, currentValue: 75000 },
      { name: "Company D", initialInvestment: 150000, currentValue: 200000 },
      { name: "Company E", initialInvestment: 100000, currentValue: 125000 },
    ],
  });

  return (
    <main>
      <ul>
        {dataList.investments.map(
          ({ name, initialInvestment, currentValue }) => (
            <DataListItem
              name={name}
              initialInvestment={initialInvestment}
              currentValue={currentValue}
            />
          )
        )}
      </ul>
    </main>
  );
};

export default DataList;
