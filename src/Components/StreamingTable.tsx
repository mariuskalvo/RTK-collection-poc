import { Table } from "@dnb/eufemia";
import { IStreamableItem } from "../Types/IStreamableItem";
import StreamingRow from "./StreamingRow";

export default ({ rows }: { rows: IStreamableItem[] }) => (
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
      {rows.map((row) => (
        <StreamingRow item={row} />
      ))}
    </tbody>
  </Table>
);
