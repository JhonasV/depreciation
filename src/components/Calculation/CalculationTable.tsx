import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Result } from "../../models/Result";

const ListResult = styled.ul`
  background-color: #eee;
  width: 85%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #54a0ff;
  margin-top: 0;
  li {
    list-style: none;
    padding: 0.7rem;
    font-size: 17px;
    border: 1px solid #54a0ff;
    span {
      font-weight: bold;
    }
  }
`;
interface ICalculationTableProps {
  result: Result;
}

const CalculationTable = ({ result }: ICalculationTableProps) => {
  return (
    <>
      {result ? (
        <>
          <ListResult>
            <li>
              <h3>Descuentos</h3>
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
    </>
  );
};

CalculationTable.propTypes = {
  result: propTypes.object.isRequired,
};

export default CalculationTable;
