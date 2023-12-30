import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useState } from "react";

function FilterNumberArray() {
  const [numbers, setNumbers] = useState("");
  const [filteredNumbers, setFilteredNumbers] = useState("");

  function filterArray() {
    const array = numbers.split(",");
    const result = array.filter((item) => item > 5);
    setFilteredNumbers(result.join(","));
  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <h3>Filter Array Number</h3>
          <Col>
            <Form.Control
              type='text'
              placeholder='Insert numbers, ex. 1, 2, 3'
              onChange={(e) => {
                setNumbers(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Button onClick={filterArray}>Filter</Button>
          </Col>
        </Row>
        <Row className='mt-3'>
          <p>Original Array: {numbers}</p>
          <p>Reversed Array: {filteredNumbers}</p>
        </Row>
        <Row>
          {/* <Col>
            <CodeBlock
              text='function filterArray() {const array = numbers.split(",");const result = array.filter((item) => item > 5);setFilteredNumbers(result.join(","));  }'
              language='javascript'
              wrapLongLines={true}
            ></CodeBlock>
          </Col> */}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default FilterNumberArray;
