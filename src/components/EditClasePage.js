import React, { useState } from "react";
import ClaseForm from "./ClaseForm";
import * as claseApi from "../api/claseApi.js";
import { toast } from "react-toastify";

export default function EditClasePage(props) {
  const [clase, setClase] = useState({
    id: null,
    slug: "",
    titulo: "",
    profesorId: null,
    categoria: "",
  });

  function handleChange({ target }) {
    const updatedClase = { ...clase, [target.name]: target.value };
    setClase(updatedClase);
  }

  function handleSubmit(event) {
    event.preventDefault();
    claseApi.saveClase(clase).then(() => {
      props.history.push("/clases");
      toast.success("clase guardada");
    });
  }

  return (
    <>
      <h2>Administración de Clase</h2>
      <ClaseForm
        clase={clase}
        onChange={handleChange}
        onSubmit={handleSubmit}
      ></ClaseForm>
    </>
  );
}
