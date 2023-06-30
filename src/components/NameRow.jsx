import { NameRowActions } from "./NameRowActions";

export function NameRow(props) {
  const { nameData } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 20,
      }}
    >
      <p
        style={{
          width: "60%",
          textAlign: "left",
          padding: "5px",
          borderBottom: "2px solid #3d3d3d",
        }}
      >
        {nameData.name}
      </p>
      <div>
        <input
          type="checkbox"
          checked={nameData.isPriority}
          id="priority"
          readOnly
          style={{ marginRight: 5 }}
        />
        <label htmlFor="priority">Is priority?</label>
      </div>
      <NameRowActions id={nameData.id} />
    </div>
  );
}
