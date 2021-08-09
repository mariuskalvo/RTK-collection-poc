import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import IStreamableItem from "../Types/IStreamableItem";

const StreamingRow = ({ item }: { item: IStreamableItem }) => {
  const itemFromState = useSelector(
    (state: RootState) => state.items.data[item.name]
  );
  return (
    <tr>
      <td>
        <p className="dnb-p">
          <b>{itemFromState?.name}</b>
        </p>
      </td>
      <td>{itemFromState?.value?.toFixed(2)}</td>
      <td>{itemFromState?.percentage?.toFixed(2)}</td>
    </tr>
  );
};

export default StreamingRow;
