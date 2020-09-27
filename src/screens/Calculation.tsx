import React, { useState } from "react";
import CalculationTable from "../components/Calculation/CalculationTable";
import CalculationForm from "../components/Calculation/CalculationForm";

const Calculation = () => {
  const [salary, setSalary] = useState(0);
  const [result, setResult] = useState(null);

  return (
    <>
      <CalculationForm
        result={result}
        setResult={setResult}
        salary={salary.toString()}
        setSalary={setSalary}
      />

      <CalculationTable breakDown={result} />
    </>
  );
};

export default Calculation;
