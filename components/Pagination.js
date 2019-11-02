import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";

function Pagination({
  pageIndex,
  pageCount,
  gotoPage,
  nextPage,
  previousPage
}) {
  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <BootstrapPagination.Item
        key={number}
        active={number - 1 === pageIndex}
        onClick={() => gotoPage(number - 1)}
      >
        {number}
      </BootstrapPagination.Item>
    );
  }

  return (
    <BootstrapPagination className="mb-0">
      <BootstrapPagination.Prev onClick={previousPage} />
      {items}
      <BootstrapPagination.Next onClick={nextPage} />
    </BootstrapPagination>
  );
}

export default Pagination;
