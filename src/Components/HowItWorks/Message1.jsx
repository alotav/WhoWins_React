import "./HowItWorks.css";

// eslint-disable-next-line react/prop-types
const Message1 = ({className}) => {
  return (
    <div className={`message1 ${className}`}>
      <h3>1. Ve a la Sección &quot;Realizar Sorteo&quot;</h3>
      <p>
        Dirígete a la sección &quot;Realizar Sorteo&quot;, allí encontrarás todas las herramientas que necesitas para crear una experiencia única para tus participantes.
      </p>
    </div>
  );
};

export default Message1;
