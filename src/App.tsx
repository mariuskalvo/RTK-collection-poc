import { useEffect, useState } from "react";
import { IStreamableItem } from "./Types/IStreamableItem";
import StreamingRow from "./Components/StreamingRow";
import { Table } from "@dnb/eufemia";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Store/Store";
import { setItems, updateItem } from "./Store/Slices/ItemSlice";
import StreamingTable from "./Components/StreamingTable";
import FakeStreamController from "./Components/FakeStreamController";
import {
  registerOnItemReceived,
  startStreaming,
  stopStreaming,
} from "./Services/FakeStreamService";
import { getItems } from "./Services/ItemService";

function App() {
  const streamState = useSelector((state: RootState) => state.streamState);

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "80rem",
        margin: "2rem auto",
        gap: "1rem",
      }}
    >
      <div
        style={{ flex: "5" }}
        key={`${streamState.numItems}.${streamState.updateIntervalMs}`}
      >
        <StreamingTable />
      </div>
      <div style={{ flex: "2" }}>
        <FakeStreamController />
      </div>
    </div>
  );
}

export default App;
