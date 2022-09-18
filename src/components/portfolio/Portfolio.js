import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";
import Grid1 from "../../images/grid1.jpg";
import Grid2 from "../../images/grid2.jpg";
import Grid3 from "../../images/grid3.jpg";
import Grid4 from "../../images/grid4.jpg";
import Grid5 from "../../images/grid5.jpg";
import Grid6 from "../../images/grid6.jpg";
import Grid7 from "../../images/grid7.jpg";
import Grid8 from "../../images/grid8.jpg";
import Grid9 from "../../images/grid9.jpg";

export default function Portfolio() {
  return (
    <Container>
      <Heading title="Portfolio" />
      <Row>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid1} alt="Pink bouqet" />
        </Col>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid2} alt="Pink bouqet" />
        </Col>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid3} alt="Pink bouqet" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid4} alt="Pink bouqet" />
        </Col>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid5} alt="Pink bouqet" />
        </Col>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid6} alt="Pink bouqet" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid7} alt="Pink bouqet" />
        </Col>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid8} alt="Pink bouqet" />
        </Col>
        <Col>
          <h4>Lorem ipsum</h4>
          <img className="d-block w-100" src={Grid9} alt="Pink bouqet" />
        </Col>
      </Row>
    </Container>
  );
}
