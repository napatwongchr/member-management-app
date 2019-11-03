import React, { useState, Fragment } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { Formik } from "formik";

import MemberForm from "../components/MemberForm";
import MemberTable from "../components/MemberTable";

import { INITIAL_VALUES } from "../constants";
import generateMembers from "../data/members";
import "bootstrap/dist/css/bootstrap.min.css";

import validate from "../components/MemberForm/validate";

const uuidv4 = require("uuid/v4");

const membersMock = generateMembers();

function Home() {
  const [members, setMembers] = useState(membersMock);
  const [isEditMode, setIsEditMode] = useState(false);

  function handleSubmit(values, form) {
    let newMembers = {
      ...values,
      key: uuidv4(),
      name: `${values.firstName} ${values.lastName}`,
      gender: values.gender,
      phone: `${values.dialCode} ${values.phoneNo}`,
      nationality: values.nationality.split("-")[0]
    };
    setMembers([...members, newMembers]);
    form.resetForm({ values: INITIAL_VALUES });
  }

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
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {props => {
          return (
            <Fragment>
              <MemberForm
                members={members}
                setMembers={setMembers}
                isEditMode={isEditMode}
                setIsEditMode={setIsEditMode}
                {...props}
              />
              <MemberTable
                members={members}
                setMembers={setMembers}
                setIsEditMode={setIsEditMode}
                {...props}
              />
            </Fragment>
          );
        }}
      </Formik>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  padding: 30px;
`;

export default Home;
