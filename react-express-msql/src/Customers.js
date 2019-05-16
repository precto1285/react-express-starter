import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

const Customers = (props) => {
  return (
    <div className="px-3">
      <Card>
        <CardHeader>
          <h1>Name: {props.firstName} {props.lastName}</h1>
        </CardHeader>
        <CardBody className="bg-dark text-white text-left px-5">
          <h2>UserName: {props.userName}</h2>
          <h3>Pin#: {props.pin}</h3>
        </CardBody>
      </Card>
    </div>
  );
};

export default Customers;