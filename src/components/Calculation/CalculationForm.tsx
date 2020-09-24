import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Buttons";
import { Input } from "../UI/Controls";
import HistoryService from "../../services/HistoryService";
import { Result } from "../../models/Result";
const Form = styled.form`
  padding: 1em;
  width: 90%;
  height: 78vh;
  border: 1px solid #eee;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;

  h2 {
    color: black;
  }
`;

const ListResult = styled.ul`
  background-color: #eee;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #54a0ff;
  margin-top: 1em;
  li {
    list-style: none;
    padding: 1rem;
    font-size: 17px;
    border: 1px solid #54a0ff;
    span {
      font-weight: bold;
    }
  }
`;

type CalculationFormProps = {
  salary: string;
  setSalary: any;
};

const CalculationForm = ({ salary, setSalary }: CalculationFormProps) => {
  const [result, setResult] = useState(null);
  const processDiscount = (event: any) => {
    event.preventDefault();
    let income = Number(salary);
    let arsPorcent = 3.04;
    let afpPorcent = 2.87;
    let arsDiscount = round((income * arsPorcent) / 100);
    let afpDiscount = round((income * afpPorcent) / 100);
    let totalDiscount = round(arsDiscount + afpDiscount);
    let netIncome = round(income - totalDiscount);

    let total: Result = {
      arsDiscount,
      afpDiscount,
      totalDiscount,
      netIncome,
      income,
    };

    HistoryService.Set(total);
    setResult(total);
  };

  const round = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

  const clear = () => {
    setResult(null);
    setSalary(0);
  };
  return (
    <Form onSubmit={(e) => processDiscount(e)}>
      <h2>Ingrese su sueldo: </h2>
      <br />
      <Input
        type="number"
        value={salary}
        onChange={(event) => setSalary(event.target.value)}
      />
      <Button primary>Calcular</Button>
      {result && (
        <Button onClick={(e) => clear()} secondary>
          Limpiar
        </Button>
      )}

      <br />
      {result ? (
        <>
          <ListResult>
            <li>
              <span>Descuentos</span>
            </li>
            <li>
              AFP: <span>RD${result.afpDiscount}</span>
            </li>
            <li>
              ARS: <span>RD${result.arsDiscount}</span>
            </li>
            <li>
              Total descuento: <span>RD${result.totalDiscount}</span>
            </li>
            <li>
              Total neto: <span>RD${result.netIncome}</span>
            </li>
          </ListResult>
        </>
      ) : null}
    </Form>
  );
};

export default CalculationForm;
