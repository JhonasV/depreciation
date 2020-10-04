import { IAddDigits, IAddDigitsResult } from "../models/AddDigits";
import { IStraightLines } from "../models/StraightLine";

const CalculateStraightLine = (straightLine: IStraightLines): number => {
  let result = straightLine.totalAssetValue / straightLine.usefulLife;
  return Number(result.toFixed(2));
};

const CalculateAddDigits = (addDigits: IAddDigits): IAddDigitsResult[] => {
  let yearsSummary: number = 0;
  let addDigitsResult: IAddDigitsResult[] = [];

  for (let i: number = 0; i < addDigits.yearsAssetLife; i++) {
    yearsSummary = yearsSummary + addDigits.yearsAssetLife - i;
  }

  for (let i: number = 1; i <= addDigits.yearsAssetLife; i++) {
    let calculation: number =
      (addDigits.assetDepreciationBase * (addDigits.yearsAssetLife - i + 1)) /
      yearsSummary;

    let res: IAddDigitsResult = {
      years: i,
      assetDepreciationBase: addDigits.assetDepreciationBase,
      total: calculation.toFixed(2),
    };

    addDigitsResult.push(res);
  }

  return addDigitsResult;
};

export default {
  CalculateStraightLine,
  CalculateAddDigits,
};
