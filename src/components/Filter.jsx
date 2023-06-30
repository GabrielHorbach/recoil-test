import { useRecoilState } from "recoil";
import { deathNoteNamesFilterState } from "../store/atoms";

export function Filter() {
  const [, setFilter] = useRecoilState(deathNoteNamesFilterState);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: 5,
        marginBottom: 20,
      }}
    >
      <span
        style={{
          marginRight: 5,
        }}
      >
        Filters:
      </span>
      <button onClick={() => setFilter("Show priority")}>Priority only</button>
      <button onClick={() => setFilter("Show non priority")}>
        Non priority only
      </button>
      <button onClick={() => setFilter("Show all")}>Reset</button>
    </div>
  );
}
