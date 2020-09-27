import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Breakdown } from "../../models/Breakdown";

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
  breakDown: Breakdown;
}

const CalculationTable = ({ breakDown }: ICalculationTableProps) => {
  const renderResult = (breakDown: Breakdown) => {
    console.log(breakDown);
    return breakDown.values.map((item: String, i: number) => (
      <li key={i}>{item}</li>
    ));
  };

  return (
    <>
      {breakDown ? (
        <>
          <ListResult>
            <li>
              <h3>Desglose</h3>
            </li>
            {renderResult(breakDown)}
          </ListResult>
        </>
      ) : null}
    </>
  );
};

CalculationTable.propTypes = {
  result: propTypes.object.isRequired,
};

export default CalculationTable;
