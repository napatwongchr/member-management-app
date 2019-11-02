import React, { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";

import MemberForm from "../components/MemberForm";
import MemberTable from "../components/MemberTable";

import membersMock from "../data/members.json";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [members, setMembers] = useState(membersMock);
  return (
    <PageContainer>
      <Global
        styles={{
          body: {
            backgroundColor: "#f5f5f5",
            fontSize: "16px"
          }
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
