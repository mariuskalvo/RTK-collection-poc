import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { IStreamableItem } from "./Types/IStreamableItem";
import StreamingRow from "./Components/StreamingRow";
import { Button, Table } from "@dnb/eufemia";

const rows: IStreamableItem[] = [
  {
    name: "0",
    percentage: 54.3,
    value: 1323.21,
  },
  {
    name: "1",
    percentage: 54.3,
    value: 1323.21,
  },
  {
    name: "2",
    percentage: 54.3,
    value: 1323.21,
  },
  {
    name: "3",
    percentage: 54.3,
    value: 1323.21,
  },
  {
    name: "4",
    percentage: 54.3,
    value: 1323.21,
  },
];

function App() {
  return (
    <div style={{ width: "60rem", margin: "2rem auto" }}>
      <Table className="dnb-table">
        <caption>RTK Streaming POC</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <StreamingRow item={row} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
