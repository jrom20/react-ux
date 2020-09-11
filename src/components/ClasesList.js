import React from "react";
import { Link } from "react-router-dom";

export default function ClasesList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Profesor</th>
          <th>Categoria</th>
        </tr>
      </thead>
      <tbody>
        {props.clases.map((clase) => {
          return (
            <tr key={clase.id}>
              <td>
                <Link to={"/clase/" + clase.slug}>{clase.titulo}</Link>
              </td>
              <td>{clase.profesorId}</td>
              <td>{clase.categoria}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
