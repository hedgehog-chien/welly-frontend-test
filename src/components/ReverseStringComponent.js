import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useState } from "react";

function ReverseString() {
  const [string, setString] = useState("");
  const [reversedString, setReversedString] = useState("");

  function reverseString() {
    var splitedStr = string.split("");
    var reversedArray = splitedStr.reverse();
    var joinedStr = reversedArray.join("");
    setReversedString(joinedStr);
    // setReversedString(str);
  }
  return (
    <Card>
      <Card.Body>
        <Row>
          <h3>Reverse String</h3>
          <Col>
            <Form.Control
              type='text'
              placeholder='Text'
              onChange={(e) => {
                setString(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Button onClick={reverseString}>Reverse</Button>
          </Col>
        </Row>
        <Row className='mt-3'>
          <p>Original String: {string}</p>
          <p>Reversed String: {reversedString}</p>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ReverseString;
