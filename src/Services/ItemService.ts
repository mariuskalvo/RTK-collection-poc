import { IStreamableItem } from "../Types/IStreamableItem";

const generateItems = (numItems: number): IStreamableItem[] => {
  return new Array(numItems).fill(0).map((i, index) => ({
    name: `${index}`,
    percentage: Math.random() * 10 + Math.random(),
    value: Math.random() * 1000 + Math.random(),
  }));
};


export const getItems = (numItems: number) => {
  return generateItems(numItems);
}