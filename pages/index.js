import React, { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

import MemberForm from "../components/MemberForm";
import MemberTable from "../components/MemberTable";

import "antd/dist/antd.css";

const MEMBERS = [
  {
    key: 1,
    name: "Mike",
    gender: "male",
    phone: "0232323",
    nationality: "Thai"
  },
  {
    key: 2,
    name: "Knot",
    gender: "female",
    phone: "123223",
    nationality: "Eng"
  }
];

function Home() {
  const [members, setMembers] = useState([]);
  return (
    <PageContainer>
      <Global
        styles={{
          body: {
            backgroundColor: "#f5f5f5",
            fontSize: "16px"
          },
          label: {}
        }}
      />
      <Head>
        <title>Member management app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Member form management</h1>
      <MemberForm members={members} setMembers={setMembers} />
      <MemberTable members={members} setMembers={setMembers} />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  padding: 30px;
`;

export default Home;
