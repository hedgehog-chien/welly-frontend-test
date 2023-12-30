import "./App.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReverseString from "./components/ReverseStringComponent";
import FilterNumberArray from "./components/FilterNumberArrayComponent";
import FunctionRestructure from "./components/FunctionRestructureComponent";
import ConditionalRendering from "./components/ConditionalRenderingComponent";
import CountingClicks from "./components/CountingComponent";

function App() {
  return (
    <Container>
      <Row>
        <h1>Welly Frontend Test</h1>
      </Row>
      <Row>
        <Col xs lg='6'>
          <ReverseString></ReverseString>
        </Col>
        <Col xs lg='6'>
          <FilterNumberArray></FilterNumberArray>
        </Col>
      </Row>
      <Row>
        <Col xs lg='6'>
          <FunctionRestructure></FunctionRestructure>
        </Col>
        <Col xs lg='6'>
          <ConditionalRendering></ConditionalRendering>
        </Col>
        <Col xs lg='6'>
          <CountingClicks></CountingClicks>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
