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

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

import validate from "../components/MemberForm/validate";

const uuidv4 = require("uuid/v4");
import "react-widgets/dist/css/react-widgets.css";

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
          },
          ".rw-widget-input": {
            boxShadow: "none"
          },
          ".rw-widget-container": {
            border: "1px solid #ced4da"
          },
          ".date-picker-error": {
            border: "1px solid #dc3545"
          }
        }}
      />
      <Head>
        <title>Member management app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeading>Member form management</PageHeading>
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

const PageHeading = styled.h1`
  margin-bottom: 30px;
`;

const PageContainer = styled.div`
  padding: 30px;
`;

export default Home;
