import { React, useState } from "react";

const ListItem = (props) => {
  const [checked, setChecked] = useState(props.isChecked);
  return (
    <div>
      <div
        className="list-item"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <p>
          <input
            type="checkbox"
            checked={checked}
            onClick={() => setChecked(!checked)}
          ></input>
        </p>
        <p>
          <a href={props.redirect}>{props.name}</a>
        </p>
        <p>{props.author}</p>
        <p>{props.experiment}</p>
        <p>{props.lastEdited}</p>
      </div>
    </div>
  );
};
export default ListItem;
