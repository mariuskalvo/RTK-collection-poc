import { Table } from "@dnb/eufemia";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startStreaming,
  registerOnItemReceived,
} from "../Services/FakeStreamService";
import { getItems } from "../Services/ItemService";
import { updateItem, setItems } from "../Store/Slices/ItemSlice";
import { RootState } from "../Store/Store";
import { IStreamableItem } from "../Types/IStreamableItem";
import StreamingRow from "./StreamingRow";

export default () => {
  const dispatch = useDispatch();
  const streamState = useSelector((state: RootState) => state.streamState);
  const [initialItems, setInitialItems] = useState<IStreamableItem[]>([]);

  const onItemReceived = (item: IStreamableItem) => {
    dispatch(updateItem(item));
  };

  useEffect(() => {
    const items = getItems(streamState.numItems);
    const intervalId = startStreaming(items, streamState.updateIntervalMs);

    dispatch(setItems(items));
    setInitialItems(items);
    registerOnItemReceived(onItemReceived);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Table className="dnb-table .dnb-table--fixed">
      <caption>RTK Streaming POC</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>% Change</th>
        </tr>
      </thead>
      <tbody>
        {initialItems.map((row) => (
          <StreamingRow key={row.name} item={row} />
        ))}
      </tbody>
    </Table>
  );
};
