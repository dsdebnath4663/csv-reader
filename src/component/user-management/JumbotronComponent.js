
import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

const JumbotronComponent = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>User Management Dashboard</h1>
        <p>
          Manage your users easily and efficiently.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronComponent;