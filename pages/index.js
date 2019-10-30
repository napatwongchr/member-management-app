import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import MemberForm from "../components/MemberForm";

function Home() {
  return (
    <div>
      <Head>
        <title>Member management app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MemberForm />
      <div>
        <TableMenuContainer>
          <DeleteAllContainer>
            <input type="checkbox" name="deleteAll" value="deleteAll" />{" "}
            <span>Select All</span>
            <button>DELETE</button>
          </DeleteAllContainer>
          <div>pagination</div>
        </TableMenuContainer>
        <Table>
          <thead>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Mobile Phone</th>
            <th>Nationality</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <TableData>
                <input type="checkbox" name="deleteItem" value="deleteItem" />
              </TableData>
              <TableData>Name</TableData>
              <TableData>Male</TableData>
              <TableData>0883333333</TableData>
              <TableData>Thai</TableData>
              <TableData>Edit / Delete</TableData>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

const TableMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DeleteAllContainer = styled.div``;

const Table = styled.table`
  width: 100%;
`;

const TableData = styled.td`
  text-align: center;
`;

export default Home;
