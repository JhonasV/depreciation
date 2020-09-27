import { Result } from "../models/Result";

const Calculate = (salary: string): Result => {
  let income = Number(salary);
  let arsPercent: number = 3.04;
  let afpPercent: number = 2.87;
  let arsDiscount: number = round((income * arsPercent) / 100);
  let afpDiscount: number = round((income * afpPercent) / 100);
  let totalDiscount: number = round(arsDiscount + afpDiscount);
  let netIncome: number = round(income - totalDiscount);

  let total: Result = {
    arsDiscount,
    afpDiscount,
    totalDiscount,
    netIncome,
    income,
  };

  return total;
};

const round = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export default {
  Calculate,
};
