import { Button, Input, Table } from "@dnb/eufemia";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStreamState } from "../Store/Slices/FakeStreamSlice";
import { RootState } from "../Store/Store";

interface ComponentState {
  updateInterval: number;
  numItems: number;
}

const FakeStreamController = () => {
  const streamState = useSelector((state: RootState) => state.streamState);
  const dispatch = useDispatch();

  const [internalState, setInternalState] = useState<ComponentState>({
    numItems: streamState.numItems,
    updateInterval: streamState.updateIntervalMs,
  });

  const updateValues = () => {
    dispatch(
      setStreamState({
        numItems: internalState.numItems,
        updateIntervalMs: internalState.updateInterval,
      })
    );
  };

  return (
    <div>
      <Table className="dnb-table">
        <thead>
          <tr>
            <th scope="col">Setting</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Update interval MS</td>
            <td>
              <Input
                type="number"
                value={internalState.updateInterval}
                on_change={(e: { value: string }) =>
                  setInternalState({
                    ...internalState,
                    updateInterval: parseInt(e.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td># Items</td>
            <td>
              <Input
                type="number"
                value={internalState.numItems}
                on_change={(e: { value: string }) => {
                  setInternalState({
                    ...internalState,
                    numItems: parseInt(e.value),
                  });
                }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button
        variant="secondary"
        style={{ width: "100%" }}
        onClick={updateValues}
      >
        Update values
      </Button>
    </div>
  );
};

export default FakeStreamController;