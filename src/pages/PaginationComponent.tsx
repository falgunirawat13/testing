import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ totalPages, currentPage, paginate }) => {
  return (
    <Pagination className="justify-content-center">
      <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default PaginationComponent;
