import { Pagination } from "react-bootstrap";

// const CustomPagination = () => {


const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {

  console.log("Current Page:", currentPage);
  console.log("Total Pages:", totalPages);
  let items = [];

  for (let number = 1; number <= totalPages; number++) {
    console.log("Creating item for page: ", number);
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => {
          console.log("Page clicked: ", number);
          onPageChange(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  console.log("Generated items: ", items);
  return <Pagination>{items}</Pagination>
};

export default CustomPagination;
