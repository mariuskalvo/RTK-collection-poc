import { useEffect } from "react";
import { IStreamableItem } from "./Types/IStreamableItem";
import StreamingRow from "./Components/StreamingRow";
import { Table } from "@dnb/eufemia";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Store/Store";
import { rows, updateItem } from "./Store/Slices/ItemSlice";

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const callbacks: ((item: IStreamableItem) => void)[] = []
const registerOnItemReceived = (func: (item: IStreamableItem) => void) => {
  callbacks.push(func);
}

const startStreaming = () => {
  setInterval(() => {
    const randomIndex = randomNumber(0, rows.length);
    const oldItem = rows[randomIndex];
    const newItem = {
      ...oldItem,
      value: oldItem.value + (Math.random() * 0.1),
      percentage: oldItem.percentage + (Math.random() * 0.1)
    };

    callbacks.forEach((callback) => {
      callback(newItem);
    })
  }, 100);
}

function App() {
  const items = useSelector((state: RootState) => state.items.data);
  const dispatch = useDispatch();

  const onItemReceived = (item: IStreamableItem) => {
    dispatch(updateItem(item));
  }

  useEffect(() => {
    registerOnItemReceived(onItemReceived);
    startStreaming();
  }, []);

  return (
    <div style={{ width: "60rem", margin: "2rem auto" }}>
      <Table className="dnb-table .dnb-table--fixed" >
        <caption>RTK Streaming POC</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <StreamingRow item={row} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
