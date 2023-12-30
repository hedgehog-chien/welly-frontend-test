import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useState } from "react";

function CountingClicks() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <Card.Body>
        <Row>
          <h3>Counting Clicks</h3>
          <Col>
            <Button onClick={() => setCount(count - 1)}>-1</Button>
            <span className='mx-3'>{count}</span>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CountingClicks;
