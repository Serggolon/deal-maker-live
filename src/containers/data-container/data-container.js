import React, { useState, useEffect } from "react";

import DataList from "../../components/data-list";

const DataContainer = () => {
  const [dataList, setDataList] = useState({
    investments: [
      { name: "Company A", initialInvestment: 100000, currentValue: 150000 },
      { name: "Company B", initialInvestment: 200000, currentValue: 250000 },
      { name: "Company C", initialInvestment: 50000, currentValue: 75000 },
      { name: "Company D", initialInvestment: 150000, currentValue: 200000 },
      { name: "Company E", initialInvestment: 100000, currentValue: 125000 },
    ],
  });
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const totalValue = getTotalValue();

    setTotalValue(totalValue);
  }, [dataList]);

  const getTotalValue = () => {
    const value = dataList.investments.reduce(
      (acc, { currentValue }) => acc + currentValue,
      0
    );

    return value;
  };

  return (
    <DataList investmentsList={dataList.investments} totalValue={totalValue} />
  );
};

export default DataContainer;
