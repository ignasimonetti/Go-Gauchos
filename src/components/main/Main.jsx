/* 
import estilos from '../main/main.module.css'; */
import ItemListContainer from "./ItemListContainer";

const Main = ({greeting, numero, saludar}) => {

    return (
      <main className="main" style={{ display: "inline" }}>
        <p onClick={() => saludar("React")} style={{ 
          display: "flex", 
          justifyContent: "center" }}
        >
         <h2> {greeting} número {numero}</h2>
        </p>
        <ItemListContainer/>
        {/* <div className="cards" style={{ display: "flex", marginTop: "100px", marginLeft: "100px" }}>
          <div className="card">
            <img src="https://res.cloudinary.com/db9rq00mf/image/upload/v1667169576/header-sitios-web-srweb_ih9smx.png" alt=""/>
          </div>
        </div> */}
      </main>
    );
}
    
    export default Main;

//Bootstrap tradicional
/*  <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://www.comparapps.com/wp-content/uploads/2019/08/Como-Crear-Una-Pagina-Web.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="https://google.com" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>; */




//React Bootstrap
/* 
    <Container>
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.comparapps.com/wp-content/uploads/2019/08/Como-Crear-Una-Pagina-Web.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>; */