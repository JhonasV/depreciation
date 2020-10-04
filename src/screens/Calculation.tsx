import React, { useState } from "react";
import CalculationTable from "../components/Calculation/CalculationTable";
import CalculationForm from "../components/Calculation/CalculationForm";
import { IAddDigitsResult } from "../models/AddDigits";

const Calculation = () => {
  // const [salary, setSalary] = useState(0);
  const [addDigitResult, setAddDigitResult] = useState<
    IAddDigitsResult[] | null
  >(null);

  return (
    <>
      <CalculationForm
        addDigitResult={addDigitResult}
        setAddDigitResult={setAddDigitResult}
      />
      <CalculationTable addDigitResult={addDigitResult} />
    </>
  );
};

export default Calculation;
