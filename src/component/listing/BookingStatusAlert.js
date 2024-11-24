import { ProgressBar } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


const BookingStatusAlert = ({ status = '' }) => {

  const getStatusVAriant = () => {
    if (status === 'confirmed') return 'success';
    if (status === 'pending') return 'warning';
    return 'danger';
  };

  const formattedStatus = typeof status === 'string' && status.length > 0
    ? status.charAt(0).toUpperCase() + status.slice(1)
    : 'Unknown';

  const progressValue = status === 'confirmed' ? 100 : status === 'pending' ? 50 : 0;

  return (
   
    <>
      <Alert variant={getStatusVAriant()}>
        <strong>Status:</strong> {formattedStatus}
      </Alert>
      <ProgressBar variant="danger" now={80} />
    </>
  );

};

export default BookingStatusAlert;




