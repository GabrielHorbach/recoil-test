import { atom } from "recoil";

export const deathNoteNames = atom({
  key: "names",
  default: [],
});

export const deathNoteNamesFilterState = atom({
  key: "namesFilter",
  default: "Show All",
});
