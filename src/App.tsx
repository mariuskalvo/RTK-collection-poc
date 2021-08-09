import { Heading } from "@dnb/eufemia";
import { useSelector } from "react-redux";
import { RootState } from "./Store/Store";
import StreamingTable from "./Components/StreamingTable";
import FakeStreamController from "./Components/FakeStreamController";

function App() {
  const streamState = useSelector((state: RootState) => state.streamState);

  return (
    <div
      style={{
        maxWidth: "80rem",
        margin: "0 auto",
      }}
    >
      <Heading style={{ fontSize: "1.5rem" }}>RTK collection updates</Heading>

      <div
        style={{
          display: "flex",

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
    </div>
  );
}

export default App;
