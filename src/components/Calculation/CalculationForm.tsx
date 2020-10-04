import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Buttons";
import { Input, Select, Label } from "../UI/Controls";
import CalculationService from "../../services/CalculationService";
import { Result } from "../../models/Result";
import propTypes from "prop-types";
import { Breakdown } from "../../models/Breakdown";
import { IStraightLines } from "../../models/StraightLine";
import { IAddDigits, IAddDigitsResult } from "../../models/AddDigits";
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
  setAddDigitResult: any;
  addDigitResult: IAddDigitsResult[];
};

const CalculationForm = (
  { setAddDigitResult, addDigitResult }: CalculationFormProps,
) => {
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

  const [straightLineResult, setStraightLineResult] = useState<number | null>(
    null,
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Method.LineaRecta === method) {
      let result: number = CalculationService.CalculateStraightLine(
        straightLine,
      );
      setStraightLineResult(result);
    }

    if (Method.SumaDigitos === method) {
      let result = CalculationService.CalculateAddDigits(digits);
      setAddDigitResult(result);
    }
  };
  const clear = () => {
    if (method === Method.LineaRecta) {
      setStraightLine({
        annualDepreciation: 0,
        totalAssetValue: 0,
        rescueValue: 0,
        usefulLife: 0,
      });
      setStraightLineResult(null);
    }

    if (method === Method.SumaDigitos) {
      setAddDigitResult(null);
      setDigits({
        assetDepreciationBase: 0,
        yearsAssetLife: 0,
      });
    }
  };

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    clear();
    setMethod(Number(event.target.value));
  };

  const renderStraightLinesForm = () => {
    return (<>
      <Label>Valor total del activo</Label>
      <Input
        type="number"
        value={straightLine.totalAssetValue}
        onChange={(event) =>
          setStraightLine(
            { ...straightLine, totalAssetValue: event.target.valueAsNumber },
          )}
      />
      <Label>Vida util (años)</Label>
      <Input
        type="number"
        value={straightLine.usefulLife}
        onChange={(event) =>
          setStraightLine(
            { ...straightLine, usefulLife: event.target.valueAsNumber },
          )}
      />
      {straightLineResult && (<>
        <Label>Depreciación por año</Label>
        <Input
          readOnly={true}
          type="number"
          value={straightLineResult}
        />
      </>)}
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
      {addDigitResult &&
        <Button onClick={() => clear()} secondary>Limpiar</Button>}
      {straightLineResult &&
        <Button onClick={() => clear()} secondary>Limpiar</Button>}
    </Form>
  );
};

CalculationForm.propTypes = {
  setAddDigitResult: propTypes.any.isRequired,
  addDigitResult: propTypes.any.isRequired,
};

export default CalculationForm;
