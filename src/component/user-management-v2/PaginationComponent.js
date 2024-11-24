// src/components/PaginationComponent.js
import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item key={page} active={page === currentPage} onClick={() => onPageChange(page)}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
