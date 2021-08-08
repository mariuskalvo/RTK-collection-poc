import { Section } from "@dnb/eufemia";
import { IStreamableItem } from "../Types/IStreamableItem";

export default ({ item }: { item: IStreamableItem }) => (
  <tr>
    <td>
      <p className="dnb-p">
        <b>{item.name}</b>
      </p>
    </td>
    <td>{item.value}</td>
    <td>{item.percentage}</td>
  </tr>
);
