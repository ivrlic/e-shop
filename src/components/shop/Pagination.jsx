const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="paging-cont">
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <button
            onClick={() => {onPageChange(pageNumber)}}
            disabled={pageNumber === currentPage}
            className={pageNumber === currentPage ? "active-page" : ""}
          >
            {pageNumber}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;