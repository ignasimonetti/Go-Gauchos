
import Button from "../Button";

const Main = ({greeting, numero}) => {


    return (
      <main>
        <h2>{greeting}</h2>
        <p>Tenemos más de {numero} disponibles</p>
        <Button text="Bienvenidos"/>
      </main>
    );
};

export default Main;
