import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useState } from "react";

function FunctionRestructure() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formattedName, setFormattedName] = useState("");
  const [message, setMessage] = useState("");

  function formatName() {
    if (firstName && lastName) {
      setFormattedName(firstName + " " + lastName);
    } else if (!firstName) {
      setMessage("No firstName");
    } else if (!lastName) {
      setMessage("No lastName");
    } else {
      setMessage("Something went wrong");
    }

    return formattedName;
  }

  // 同時需要有firstname以及lastname才能組成完整formatted name，
  // 因此會讓function判斷同時有firstname以及lastname才能進行fromat。

  return (
    <Card>
      <Card.Body>
        <Row>
          <h3>Format Name</h3>
          <InputGroup className='mb-3'>
            <InputGroup.Text>First and last name</InputGroup.Text>
            <Form.Control
              aria-label='First name'
              placeholder='First name'
              onChange={(e) => {
                setMessage("");
                setFirstName(e.target.value);
              }}
            />
            <Form.Control
              aria-label='Last name'
              placeholder='Last name'
              onChange={(e) => {
                setMessage("");
                setLastName(e.target.value);
              }}
            />
          </InputGroup>
          <Col>
            <Button onClick={formatName}>Format</Button>
          </Col>
        </Row>
        <Row>{formattedName}</Row>
        <Row>{message}</Row>
      </Card.Body>
    </Card>
  );
}

export default FunctionRestructure;
