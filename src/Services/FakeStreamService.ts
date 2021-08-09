import IStreamableItem from "../Types/IStreamableItem";
import { randomNumber } from "../Utils/random";

const onItemUpdatedCallbacks: ((item: IStreamableItem) => void)[] = [];

export const registerOnItemReceived = (func: (item: IStreamableItem) => void) => {
  onItemUpdatedCallbacks.push(func);
};


export const stopStreaming = (intervalId: number | null) => {
  if (intervalId) {
    clearInterval(intervalId);
  }
}

export const startStreaming = (items: IStreamableItem[], intervalUpdateMs: number): number => {

  if (!items) {
    return -1;
  }

  const intervalId = window.setInterval(() => {
    const randomIndex = randomNumber(0, items.length);
    const oldItem = items[randomIndex];
    const newItem = {
      ...oldItem,
      value: oldItem.value + Math.random() - 0.5,
      percentage: oldItem.percentage + Math.random() - 0.5,
    };

    onItemUpdatedCallbacks.forEach((callback) => {
      callback(newItem);
    });

  }, intervalUpdateMs);

  return intervalId;
};