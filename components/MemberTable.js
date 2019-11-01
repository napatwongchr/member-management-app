import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTable, useRowSelect } from "react-table";

import { Button, Checkbox, Pagination } from "antd";

function MemberTable({ members, setMembers }) {
  const [toggleRowSelected, setToggleRowSelected] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const columns = [
    {
      id: "selection",
      Cell: ({ row }) => (
        <div>
          <Checkbox {...row.getToggleRowSelectedProps()} />
          {/* <input type="checkbox" {...row.getToggleRowSelectedProps()} /> */}
        </div>
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
      accessor: "phone"
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
            <Button type="danger" onClick={handleEditClick(row)} size="small">
              Edit
            </Button>{" "}
            <Button
              type="primary"
              onClick={handleRemoveClick(row)}
              size="small"
            >
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
    rows,
    prepareRow,
    selectedFlatRows,
    toggleRowSelectedAll,
    state: { selectedRowPaths }
  } = useTable(
    {
      columns,
      data: members
    },
    useRowSelect
  );

  const handleEditClick = record => () => {
    console.log("edit: ", record);
  };

  const handleRemoveClick = record => () => {
    let removeMembers = members.filter(
      member => member.key !== record.original.key
    );
    setMembers(removeMembers);
    setToggleRowSelected(false);
    setSelectAllChecked(false);
  };

  function handlePageChange(page) {
    console.log(page);
  }

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
      <TableMenuContainer>
        <DeleteAllContainer>
          <Checkbox
            name="selectAll"
            onChange={handleSelectAll}
            checked={selectAllChecked}
          >
            Select All
          </Checkbox>
          <Button type="danger" size="small" onClick={handleDeleteSelectedItem}>
            DELETE
          </Button>
        </DeleteAllContainer>
        <Pagination
          defaultCurrent={1}
          pageSize={25}
          total={50}
          onChange={handlePageChange}
        />
      </TableMenuContainer>
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
        {rows.length > 0 && (
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
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
      {rows.length === 0 && <NoDataContainer>No data.</NoDataContainer>}
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

const TableMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DeleteAllContainer = styled.div``;

export default MemberTable;
