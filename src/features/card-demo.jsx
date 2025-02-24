import React from 'react';
import Card from "../component/card/card";
import CardHeader from "../component/card/card-header";
import CardBody from "../component/card/card-body";
import CardFooter from '../component/card/card-footer';


function CardDemo() {
  return (
    <div>
      <Card extraClass="highlight" data-id="card-1" >
        <CardHeader>Profile</CardHeader>
        <CardBody>Name: James Bond</CardBody>
        <CardFooter>Secret: 007</CardFooter>
      </Card>
    </div>
  )
}

export default CardDemo;