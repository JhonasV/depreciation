import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Buttons";
import { Input, Select, Label } from "../UI/Controls";
import CalculationService from "../../services/CalculationService";
import { Result } from "../../models/Result";
import propTypes from "prop-types";
import { Breakdown } from "../../models/Breakdown";
import { IStraightLines } from "../../models/StraightLine";
import { IAddDigits } from "../../models/AddDigits";
import { Method } from "../../config/const";

const Form = styled.form`
  padding: 1em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  h2 {
    color: black;
  }
`;

type CalculationFormProps = {
  salary: string;
  setSalary: any;
  setResult: any;
  result: Result;
};

const CalculationForm = ({
  salary,
  setSalary,
  setResult,
  result,
}: CalculationFormProps) => {
  const [method, setMethod] = useState<number>(0);
  const [straightLine, setStraightLine] = useState<IStraightLines>({
    annualDepreciation: 0,
    totalAssetValue: 0,
    rescueValue: 0,
    usefulLife: 0,
  });

  const [digits, setDigits] = useState<IAddDigits>({
    assetDepreciationBase: 0,
    yearsAssetLife: 0,
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Method.LineaRecta === method) {
      // Validate inputs
      // Calculate
      console.log(straightLine);
    }

    if (Method.SumaDigitos === method) {
      console.log(digits);
    }

    // if (validate(salary)) {
    //   let total: Breakdown = CalculationService.Calculate(Number(salary));
    //   setResult(total);
    // }
  };
  const clear = () => {
    setResult(null);
    setSalary(0);
  };
  const validate = (salary: string): boolean => {
    let isValid: boolean = true;
    let message: string = "";
    const income = Number(salary);
    try {
      if (isNaN(income)) {
        message = "Debe de introducir un salario válido";
        isValid = false;
      }
      if (income < 0 || income === 0) {
        message = "Debe de introducir un salario mayor a 0";
        isValid = false;
      }
    } catch (error) {
      message =
        "Hubo un error al calcular el descuento, intente de nuevo más tarde.";
      isValid = false;
    }

    if (!isValid) {
      alert(message);
    }
    return isValid;
  };

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(Number(event.target.value));
  };

  const renderStraightLinesForm = () => {
    return (<>
      <Label>
        Depreciación anual
      </Label>
      <Input
        type="number"
        value={straightLine.annualDepreciation}
        onChange={(event) =>
          setStraightLine(
            { ...straightLine, annualDepreciation: event.target.valueAsNumber },
          )}
      />

      <Label>Valor total del activo</Label>
      <Input
        type="number"
        value={straightLine.totalAssetValue}
        onChange={(event) =>
          setStraightLine(
            { ...straightLine, totalAssetValue: event.target.valueAsNumber },
          )}
      />
      <Label>Valor de rescate</Label>
      <Input
        type="number"
        value={straightLine.rescueValue}
        onChange={(event) =>
          setStraightLine(
            { ...straightLine, rescueValue: event.target.valueAsNumber },
          )}
      />
      <Label>Vida util</Label>
      <Input
        type="number"
        value={straightLine.usefulLife}
        onChange={(event) =>
          setStraightLine(
            { ...straightLine, usefulLife: event.target.valueAsNumber },
          )}
      />
    </>);
  };

  const renderAddDigitsForm = () => {
    return (
      <>
        <Label>
          Base depreciación del activo
        </Label>
        <Input
          type="number"
          value={digits.assetDepreciationBase}
          onChange={(event) =>
            setDigits(
              { ...digits, assetDepreciationBase: event.target.valueAsNumber },
            )}
        />

        <Label>Años de vida del activo</Label>
        <Input
          type="number"
          value={digits.yearsAssetLife}
          onChange={(event) =>
            setDigits(
              { ...digits, yearsAssetLife: event.target.valueAsNumber },
            )}
        />
      </>
    );
  };

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Select onChange={(e) => onSelectHandler(e)}>
        <option defaultChecked value={Method.SeleccionarMetodo}>
          Seleccionar método
        </option>
        <option value={Method.LineaRecta}>Línea recta</option>
        <option value={Method.SumaDigitos}>Suma de digitos</option>
      </Select>
      {method === Method.LineaRecta && renderStraightLinesForm()}
      {method === Method.SumaDigitos && renderAddDigitsForm()}
      <br />
      <Button marginTop="1" primary>
        Calcular
      </Button>
      {result && <Button onClick={() => clear()} secondary>Limpiar</Button>}
    </Form>
  );
};

CalculationForm.propTypes = {
  salary: propTypes.string.isRequired,
  setSalary: propTypes.any.isRequired,
  setResult: propTypes.any.isRequired,
  result: propTypes.object.isRequired,
};

export default CalculationForm;
