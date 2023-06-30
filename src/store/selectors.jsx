import { selector } from "recoil";
import { deathNoteNamesFilterState, deathNoteNames } from "./atoms";

export const filteredDeathNoteNames = selector({
  key: "filteredNames",
  get: ({ get }) => {
    const filter = get(deathNoteNamesFilterState);
    const namesList = get(deathNoteNames);

    switch (filter) {
      case "Show priority":
        return namesList.filter((name) => name.isPriority);
      case "Show non priority":
        return namesList.filter((name) => !name.isPriority);
      default:
        return namesList;
    }
  },
});
