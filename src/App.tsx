import { useEffect } from "react";
import { IStreamableItem } from "./Types/IStreamableItem";
import StreamingRow from "./Components/StreamingRow";
import { Table } from "@dnb/eufemia";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Store/Store";
import { rows, setItems, updateItem } from "./Store/Slices/ItemSlice";
import StreamingTable from "./Components/StreamingTable";

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const callbacks: ((item: IStreamableItem) => void)[] = [];
const registerOnItemReceived = (func: (item: IStreamableItem) => void) => {
  callbacks.push(func);
};


let intervalId: number = -1;
const startStreaming = () => {
  if (intervalId !== -1) {
    return;
  }

  intervalId = window.setInterval(() => {
    const randomIndex = randomNumber(0, rows.length);
    const oldItem = rows[randomIndex];
    const newItem = {
      ...oldItem,
      value: oldItem.value + Math.random() - 0.5,
      percentage: oldItem.percentage + Math.random() - 0.5,
    };

    callbacks.forEach((callback) => {
      callback(newItem);
    });
  }, 250); 
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onItemReceived = (item: IStreamableItem) => {
    dispatch(updateItem(item));
  };

  useEffect(() => {
    setItems(rows);
    registerOnItemReceived(onItemReceived);
    startStreaming();
  }, []);

  return (
    <div style={{ width: "60rem", margin: "2rem auto" }}>
      <StreamingTable rows={rows} />
    </div>
  );
}

export default App;
