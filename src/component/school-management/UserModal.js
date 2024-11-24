import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import RolePopover from "./RolePopover";

// import{Modal,Button} from
const UserModal = ({ show, onHide, user }) => {


  // Trigger alert when the modal is closed (show changes to false)
  // useEffect(() => {
  //   if (!show) {
  //     alert(`Show: ${show ? 'true' : 'false'}`);
  //   } else {
  //     alert(`Show: ${show ? 'true' : 'false'}`);
  //   }
  // }, [show]);

  return (
    <Modal show={show} onHide={onHide}>

      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display the value of the show prop */}
        <p>Show: {show ? 'true' : 'false'}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>State:</strong> {user.address.state}</p>
        <p><strong>Notifications:</strong> {user.preferences.notifications ? "Enabled" : "Disabled"}</p>
        <p><strong>Dark Mode:</strong> {user.preferences.darkMode ? "Enabled" : "Disabled"}</p>
        {/* Call the RolePopover component */}
        <RolePopover role={user.role} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>

    </Modal>

  );

};

export default UserModal;