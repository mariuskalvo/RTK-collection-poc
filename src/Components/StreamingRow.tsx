import { Section } from "@dnb/eufemia";
import { IStreamableItem } from "../Types/IStreamableItem";

export default ({ item }: { item: IStreamableItem }) => (
  <tr>
    <td>
      <p className="dnb-p">
        <b>{item.name}</b>
      </p>
    </td>
    <td>{item.value.toFixed(2)}</td>
    <td>{item.percentage.toFixed(2)}</td>
  </tr>
);
