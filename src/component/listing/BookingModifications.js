import { Table } from "react-bootstrap";


const BookingModifications = ({ modifications }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Type</th>
          <th>Requested Date</th>
          <th>Status</th>
          <th>Approved By</th>
          <th>Approval Date</th>
        </tr>
      </thead>
      <tbody>
        {modifications.map((modification, index) => (
          <tr key={index}>
            <td>{modification.modificationType}</td>
            <td>{modification.requestedDate}</td>
            <td>{modification.status}</td>
            <td>{modification.approvedBy}</td>
            <td>{modification.approvedDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

};

export default BookingModifications; 