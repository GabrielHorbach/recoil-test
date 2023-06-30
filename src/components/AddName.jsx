import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { deathNoteNames } from "../store/atoms";
import { v4 as uuidv4 } from "uuid";

export function AddName() {
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState("");
  const [isPriority, setIsPriority] = useState(false);
  const addNameToStoreDeathnote = useSetRecoilState(deathNoteNames);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newName = { id: uuidv4(), name, isPriority };
    addNameToStoreDeathnote((prevNames) => [...prevNames, newName]);

    setName("");
    setIsPriority(false);
    setIsAdding(false);
  };

  return (
    <>
      <button onClick={() => setIsAdding(true)}>Add name</button>

      <dialog
        open={isAdding}
        style={{
          width: 500,
          marginTop: "30%",
        }}
      >
        <p
          style={{
            textAlign: "left",
            fontSize: 24,
            fontStyle: "bold",
            margin: 0,
            marginBottom: 50,
          }}
        >
          Type name
        </p>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            rowGap: 10,
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Enter a name"
            style={{
              width: "100%",
              height: "30px",
              padding: "0 5px",
              boxSizing: "border-box",
            }}
            onChange={(evt) => setName(evt.target.value)}
            value={name}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: 5,
            }}
          >
            <input
              type="checkbox"
              name="priority"
              id="priority"
              onChange={(evt) => setIsPriority(evt.target.checked)}
              checked={isPriority}
            />
            <label htmlFor="priority">Is a priority?</label>
          </div>
          <button style={{ alignSelf: "flex-end" }}>Save</button>
        </form>
      </dialog>
    </>
  );
}
