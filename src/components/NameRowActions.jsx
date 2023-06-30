import { useRecoilState } from "recoil";
import { deathNoteNames } from "../store/atoms";

export function NameRowActions(props) {
  const { id } = props;
  const [names, setNames] = useRecoilState(deathNoteNames);

  const handleDelete = () => {
    const updatedNames = removeItemAtIndex(names, id);
    setNames(updatedNames);
  };

  const removeItemAtIndex = (arr, idToRemove) => {
    const index = arr.findIndex((name) => name.id === idToRemove);
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
