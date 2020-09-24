import React, { useState, useEffect } from "react";
import HistoryService from "../services/HistoryService";
import { Table } from "../components/UI/Tables";
import styled from "styled-components";
import { Button } from "../components/UI/Buttons";

const HistoryWrapper = styled.div`
  margin-top: 2em;
  padding: 1em;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  height: auto;
  border: 1px solid #eee;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const History = () => {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    if (HistoryService.Exists()) setHistory(HistoryService.Get());
  }, []);

  const handleClear = () => {
    HistoryService.Clear();
    setHistory(null);
  };

  const tbody = () => {
    return (
      <tbody>
        {history &&
          history.map((item: any, i: string) => (
            <tr key={i}>
              <td>{item.afpDiscount}</td>
              <td>{item.arsDiscount}</td>
              <td>{item.income}</td>
              <td>{item.totalDiscount}</td>
              <td>{item.netIncome}</td>
            </tr>
          ))}
      </tbody>
    );
  };

  return (
    <HistoryWrapper>
      <TitleWrapper>
        <h2>Historial de consultas</h2>
        {history && (
          <Button onClick={() => handleClear()} secondary>
            Limpiar
          </Button>
        )}
      </TitleWrapper>
      <Table>
        <thead>
          <tr>
            <th>AFP</th>
            <th>ARS</th>
            <th>Total Bruto</th>
            <th>Total Descuento</th>
            <th>Total Neto</th>
          </tr>
        </thead>
        {tbody()}
      </Table>
    </HistoryWrapper>
  );
};

export default History;
