import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';

const BookingStatus = ({ status }) => {

  const getStatusVariant = () => {
    if (status === 'confirmed') return 'success';
    if (status === 'pending') return 'warning';
    return 'danger';
  };
  return (
    <>
      <Alert variant={getStatusVariant()}>
        <strong>Status:</strong> {status.charAt(0).toUpperCase() + status.slice(1)}
      </Alert>
      <ProgressBar now={status === 'confirmed' ? 100 : status === 'pending' ? 50 : 0} label={status} />
    </>
  );
};

export default BookingStatus;
