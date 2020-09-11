import React from "react";

export default function TextInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </div>
  );
}
