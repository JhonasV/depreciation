import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Breakdown } from "../../models/Breakdown";
import { IAddDigitsResult } from "../../models/AddDigits";
import { Table } from "../UI/Tables";

const ListResult = styled.ul`
  background-color: #eee;
  width: 85%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #e67e22;
  margin-top: 0;
  li {
    list-style: none;
    padding: 0.7rem;
    font-size: 17px;
    border: 1px solid #e67e22;
    span {
      font-weight: bold;
    }
  }
`;

interface ICalculationTableProps {
  addDigitResult: IAddDigitsResult[];
}

const CalculationTable = ({ addDigitResult }: ICalculationTableProps) => {
  // const renderResult = (breakDown: Breakdown) => {
  //   console.log(breakDown);
  //   return breakDown.values.map((item: String, i: number) => (
  //     <li key={i}>{item}</li>
  //   ));
  // };

  const renderTBody = (addDigitResult: IAddDigitsResult[]) => {
    return addDigitResult.map((item: IAddDigitsResult, i: number) => (
      <tr key={i}>
        <td>{item.years}</td>
        <td>{item.assetDepreciationBase}</td>
        <td>{item.total}</td>
      </tr>
    ));
  };

  return (
    <>
      {addDigitResult
        ? (
          <>
            <Table>
              <thead>
                <tr>
                  <th>Año</th>
                  <th>Total activo</th>
                  <th>Depreciación</th>
                </tr>
              </thead>
              <tbody>
                {renderTBody(addDigitResult)}
              </tbody>
            </Table>
          </>
        )
        : null}
    </>
  );
};

CalculationTable.propTypes = {
  result: propTypes.object.isRequired,
};

export default CalculationTable;
