import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Card>
      <Card.Body>
        <Row>
          <h3>Conditional Rendering</h3>
          <Col>
            <Button
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
              }}
            >
              Switch
            </Button>
          </Col>
        </Row>
        <Row className='mt-3'>
          <p>
            {isLoggedIn ? "You are now logged in" : "You are not logged in"}
          </p>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ConditionalRendering;
