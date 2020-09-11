import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Experiencia de Usuario</h1>
      <p>Esta es la clase de las 6:40 P.M.</p>
      <a href="/about">Acerca de la aplicación</a>
      <Link to="/about" className="btn btn-primary">
        Acerca de la aplicación
      </Link>
    </div>
  );
}
