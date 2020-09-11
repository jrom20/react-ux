import React from "react";
import TextInput from "./common/TextInput";

function ClaseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="titulo"
        name="titulo"
        label="Titulo"
        onChange={props.onChange}
        value={props.clase.titulo}
      />

      <div className="form-group">
        <label htmlFor="profesor">Profesor</label>
        <div className="field">
          <select
            id="profesor"
            name="profesorId"
            onChange={props.onChange}
            value={props.clase.profesorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Juan Romero</option>
            <option value="2">Ivan Deras</option>
          </select>
        </div>
      </div>

      <TextInput
        id="categoria"
        name="categoria"
        label="Mi Categoria"
        onChange={props.onChange}
        value={props.clase.categoria}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default ClaseForm;
