import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTable, useRowSelect, usePagination } from "react-table";
import { Button, Form, Row, Col } from "react-bootstrap";

import Pagination from "../components/Pagination";

const PAGE_SIZE = 5;

function MemberTable(props) {
  let { members } = props;
  const { setMembers, resetForm, setIsEditMode } = props;
  const [toggleRowSelected, setToggleRowSelected] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const columns = [
    {
      id: "selection",
      Cell: ({ row }) => (
        <Form.Group controlId="formSelectAll">
          <Form.Check
            {...row.getToggleRowSelectedProps()}
            type="checkbox"
            label="Select All"
          />
        </Form.Group>
      )
    },
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Gender",
      accessor: "gender"
    },
    {
      Header: "Mobile phone",
      accessor: "phoneNo"
    },
    {
      Header: "Nationality",
      accessor: "nationality"
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        return (
          <div>
            <Button variant="primary" onClick={handleEditClick(row)} size="sm">
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={handleRemoveClick(row)} size="sm">
              Delete
            </Button>
          </div>
        );
      }
    }
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    selectedFlatRows,
    toggleRowSelectedAll,
    pageCount,
    page,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data: members,
      initialState: { pageIndex: 0, pageSize: PAGE_SIZE }
    },
    usePagination,
    useRowSelect
  );

  const handleEditClick = record => () => {
    const selectedMember = members.find(
      member => member.key === record.original.key
    );
    setIsEditMode(true);
    resetForm({
      values: selectedMember
    });
  };

  const handleRemoveClick = record => () => {
    let removeMembers = members.filter(
      member => member.key !== record.original.key
    );
    setMembers(removeMembers);
    setToggleRowSelected(false);
    setSelectAllChecked(false);
  };

  function handleSelectAll() {
    toggleRowSelectedAll(!toggleRowSelected);
    setToggleRowSelected(!toggleRowSelected);
    setSelectAllChecked(!selectAllChecked);
  }

  function handleDeleteSelectedItem() {
    let selectedItemKeys = selectedFlatRows.map(row => row.original.key);
    selectedItemKeys.forEach(key => {
      members = members.filter(member => member.key !== key);
      setMembers(members);
    });
  }

  return (
    <TableContainer>
      <Row>
        <Col className="d-flex align-items-center">
          <Form.Group className="mb-0 mr-2" controlId="formBasicCheckbox">
            <Form.Check
              name="selectAll"
              onChange={handleSelectAll}
              checked={selectAllChecked}
              label="Select All"
            />
          </Form.Group>
          <Button variant="danger" size="sm" onClick={handleDeleteSelectedItem}>
            DELETE
          </Button>
        </Col>
        <Col className="d-flex justify-content-end">
          <Pagination
            pageIndex={pageIndex}
            size={pageSize}
            pageCount={pageCount}
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        </Col>
      </Row>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {page.length > 0 && (
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              return (
                prepareRow(row) || (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell, index) => {
                      return (
                        <td key={index} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                )
              );
            })}
          </tbody>
        )}
      </Table>
      {page.length === 0 && <NoDataContainer>No data.</NoDataContainer>}
    </TableContainer>
  );
}

const TableContainer = styled.div`
  margin-top: 40px;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 30px;
`;

const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 20px;
`;

export default MemberTable;
