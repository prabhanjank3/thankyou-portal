import React from "react";
import { Card, Button } from "react-bootstrap";
import "./miraclebox.css";
export default (props) => {
  console.log(props);
  return (
    <Card>
      <Card.Header className="miracle-card-header">
        {props.item.thankyou_title}
      </Card.Header>
      <Card.Body>
        <Card.Text className="miracle-card-body">
          {props.item.thankyou_descr}
        </Card.Text>
        <Button variant="primary">view More</Button>
      </Card.Body>
    </Card>
  );
};
