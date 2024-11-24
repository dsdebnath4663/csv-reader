// src/components/AlertComponent.js
import React from "react";
import { Alert } from "react-bootstrap";

const AlertComponent = ({ notifications }) => {

  return notifications.map((notif) => (
    <Alert key={notif.id} variant={notif.type}>
      {notif.message}
    </Alert>
  ));


};

export default AlertComponent;
