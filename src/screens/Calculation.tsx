import React, { useState } from "react";
import CalculationForm from "../components/Calculation/CalculationForm";

const Calculation = () => {
  const [salary, setSalary] = useState(0);
  return (
    <>
      <CalculationForm salary={salary.toString()} setSalary={setSalary} />
    </>
  );
};

export default Calculation;
