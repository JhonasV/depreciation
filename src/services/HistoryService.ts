import { Result } from "../models/Result";

const key = "HISTORY_DISCOUNT";
const Set = (history: Result): void => {
  const historyArray: Result[] = [];
  if (Exists()) {
    const items = Get();
    historyArray.push(...items, history);
  } else {
    historyArray.push(history);
  }

  localStorage.setItem(key, JSON.stringify(historyArray));
};

const Get = (): Result[] => {
  return JSON.parse(localStorage.getItem(key));
};

const Exists = (): boolean => {
  return Get() !== null;
};

const Clear = (): void => {
  localStorage.removeItem(key);
};

export default {
  Set,
  Get,
  Exists,
  Clear,
};
