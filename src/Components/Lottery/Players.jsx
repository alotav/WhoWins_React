import "./Players.css";

// eslint-disable-next-line react/prop-types
const Players = ({className}) => {
  return (
    <div className={`playersContainer ${className}`}>
      <h3>Instrucciones</h3>
      <p>Ingres los nombres de los participantes separados por coma.</p>
      <p>Haga click en &quot;Sortear!&quot; y espere el resultado.</p>
      <textarea
        name="players"
        id="players"
        cols="30"
        rows="10"
        placeholder="Ingrese participantes"
      />
      
    </div>
  );
};

export default Players;
