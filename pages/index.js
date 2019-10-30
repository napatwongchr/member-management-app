import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";

const Home = () => (
  <div>
    <Head>
      <title>Member management app</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <WelcomeText data-testid="welcome-text">
      Welcome to Member management app
    </WelcomeText>
  </div>
);

const WelcomeText = styled.h1`
  color: green;
`;

export default Home;
