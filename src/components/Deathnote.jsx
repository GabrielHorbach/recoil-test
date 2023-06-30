import { NameRow } from "./NameRow";
import { AddName } from "./AddName";
import { Filter } from "./Filter";
import { useRecoilValue } from "recoil";
import { filteredDeathNoteNames } from "../store/selectors";
import { deathNoteNames } from "../store/atoms";

export function Deathnote() {
  const names = useRecoilValue(deathNoteNames);
  const namesWithFilter = useRecoilValue(filteredDeathNoteNames);

  const hasNames = names.length > 0;
  const hasFilteredNames = namesWithFilter.length > 0;

  console.log(namesWithFilter);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minWidth: "700px",
          marginBottom: 50,
        }}
      >
        <h1>Deathnote</h1>
        <AddName />
      </div>

      {hasNames && <Filter />}
      {hasFilteredNames &&
        namesWithFilter.map((nameData) => (
          <NameRow key={nameData.id} nameData={nameData} />
        ))}

      {!hasFilteredNames && (
        <p style={{ marginTop: 100 }}>The list is empty...</p>
      )}
    </div>
  );
}
