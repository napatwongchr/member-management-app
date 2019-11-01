import React from "react";
import { Formik, Field, Form } from "formik";
import styled from "@emotion/styled";
import { Button, Input, Select } from "antd";

import GenderField from "./GenderField";
import DatePickerField from "./DatePickerField";
import TextField from "./TextField";
import SelectField from "./SelectField";

import nationality from "../data/nationality.json";
import dialCodes from "../data/dial.json";

const TITLE_OPTIONS = [
  { label: "Mr", value: "mr" },
  { label: "Mrs/Ms", value: "ms" },
  { label: "Miss", value: "miss" }
];

const INITIAL_VALUES = {
  title: "",
  firstName: "",
  lastName: "",
  nationality: "",
  gender: "",
  birthday: "",
  citizenID: {
    block1: "",
    block2: "",
    block3: "",
    block4: "",
    block5: ""
  },
  dialCode: "+66",
  phoneNo: "",
  passportNo: "",
  expectedSalary: ""
};

const uuidv4 = require("uuid/v4");

function MemberForm({ members, setMembers }) {
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
    console.log(values, ";;");
  }

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      {props => {
        return (
          <Form>
            <FormContainer>
              <FormRow>
                <SelectField label="Title" name="title" style={{ width: 150 }}>
                  <Select.Option defaultValue value="">
                    Please select
                  </Select.Option>
                  {TITLE_OPTIONS.map(option => {
                    return (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                    );
                  })}
                </SelectField>
                <TextField id="firstName" name="firstName" label="First name" />
                <TextField id="lastName" name="lastName" label="Last name" />
              </FormRow>
              <FormRow>
                <DatePickerField />
                <SelectField
                  label="Nationality"
                  name="nationality"
                  style={{ width: 200 }}
                  showSearch
                  filterOption={(input, option) => {
                    return (
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    );
                  }}
                >
                  <Select.Option defaultValue value="">
                    Please select
                  </Select.Option>
                  {nationality.map((item, index) => {
                    return (
                      <Select.Option
                        key={`${item.nationality}-${index}`}
                        value={`${item.nationality}-${index}`}
                      >
                        {item.nationality}
                      </Select.Option>
                    );
                  })}
                </SelectField>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <label>CitizenID</label>
                  <TextField
                    id="citizenIdBlock1"
                    name="citizenID.block1"
                    noLabel
                    containerStyle={{ mr: "0px", ml: "10px" }}
                  />
                  <Divider>-</Divider>
                  <TextField
                    id="citizenIdBlock2"
                    name="citizenID.block2"
                    noLabel
                    containerStyle={{ mr: "0px" }}
                  />
                  <Divider>-</Divider>
                  <TextField
                    id="citizenIdBlock3"
                    name="citizenID.block3"
                    noLabel
                    containerStyle={{ mr: "0px" }}
                  />
                  <Divider>-</Divider>
                  <TextField
                    id="citizenIdBlock4"
                    name="citizenID.block4"
                    noLabel
                    containerStyle={{ mr: "0px" }}
                  />
                  <Divider>-</Divider>
                  <TextField
                    id="citizenIdBlock5"
                    name="citizenID.block5"
                    noLabel
                    containerStyle={{ mr: "0px" }}
                  />
                </FormGroup>
              </FormRow>
              <FormRow>
                <GenderField />
              </FormRow>
              <FormRow>
                <SelectField
                  label="Mobile phone"
                  name="dialCode"
                  containerStyle={{ mr: "0px" }}
                >
                  {dialCodes.map(item => {
                    return (
                      <Select.Option
                        key={`${item.dial_code}-${item.code}`}
                        value={`${item.dial_code}-${item.code}`}
                      >
                        {item.dial_code}
                      </Select.Option>
                    );
                  })}
                </SelectField>
                <Divider>-</Divider>
                <FormGroup>
                  <Field type="text" name="phoneNo">
                    {props => {
                      return <Input {...props.field} />;
                    }}
                  </Field>
                </FormGroup>
              </FormRow>
              <FormRow>
                <TextField
                  id="passportNo"
                  name="passportNo"
                  label="Passport No"
                />
              </FormRow>
              <FormRow>
                <TextField
                  id="expectedSalary"
                  name="expectedSalary"
                  label="Expected Salary"
                  infoText={<InfoText>THB</InfoText>}
                  containerStyle={{ mr: "100px" }}
                />
                <Button htmlType="submit" type="primary">
                  SUBMIT
                </Button>
              </FormRow>
            </FormContainer>
          </Form>
        );
      }}
    </Formik>
  );
}

const FormContainer = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
`;

const InfoText = styled.div`
  margin-left: 10px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

export default MemberForm;
