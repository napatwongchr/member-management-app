import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "@emotion/styled";

import DatePicker from "./DatePicker";

import nationality from "../data/nationality.json";
import dialCodes from "../data/dial.json";

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

function MemberForm() {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      {props => {
        return (
          <Form>
            <FormContainer>
              <FormRow>
                <div>
                  <label>Title:</label>
                  <Field as="select" name="title">
                    <option defaultValue value="">
                      Please select
                    </option>
                    <option value="mr">Mr</option>
                    <option value="ms">Mrs/Ms</option>
                    <option value="miss">Miss</option>
                  </Field>
                </div>
                <div>
                  <label htmlFor="firstName">First name:</label>
                  <Field type="text" name="firstName" />
                </div>
                <div>
                  <label htmlFor="lastName">Last name:</label>
                  <Field type="text" name="lastName" />
                </div>
              </FormRow>
              <FormRow>
                <div>
                  <label htmlFor="birthday">Birthday:</label>
                  <Field component={DatePicker} name="birthday" />
                </div>
                <div>
                  <label htmlFor="nationality">Nationality:</label>
                  <Field as="select" name="nationality">
                    <option defaultValue value="">
                      Please select
                    </option>
                    {nationality.map(item => {
                      return (
                        <option
                          key={item.alpha_2_code}
                          value={item.nationality}
                        >
                          {item.nationality}
                        </option>
                      );
                    })}
                  </Field>
                </div>
              </FormRow>
              <FormRow>
                <div>
                  <label>CitizenID: </label>
                  <Field type="text" name="citizenID.block1" />
                  {"-"}
                  <Field type="text" name="citizenID.block2" />
                  {"-"}
                  <Field type="text" name="citizenID.block3" />
                  {"-"}
                  <Field type="text" name="citizenID.block4" />
                  {"-"}
                  <Field type="text" name="citizenID.block5" />
                </div>
              </FormRow>
              <FormRow>
                <RadioGroup>
                  <span>Gender: </span>
                  <div>
                    <Field
                      id="maleOption"
                      type="radio"
                      name="gender"
                      value="male"
                    />
                    <label htmlFor="maleOption">Male</label>
                  </div>
                  <div>
                    <Field type="radio" name="gender" value="female" />
                    <label htmlFor="femaleOption">Female</label>
                  </div>
                  <div>
                    <Field type="radio" name="gender" value="other" />
                    <label htmlFor="otherOption">Other</label>
                  </div>
                </RadioGroup>
              </FormRow>
              <FormRow>
                <div>
                  <label htmlFor="dialCode">Mobile phone:</label>
                  <Field as="select" name="dialCode" value="+66">
                    {dialCodes.map(item => {
                      return (
                        <option key={item.code} value={item.dial_code}>
                          {item.name} ({item.dial_code})
                        </option>
                      );
                    })}
                  </Field>
                  {"-"}
                  <Field type="text" name="phoneNo" />
                </div>
              </FormRow>
              <FormRow>
                <div>
                  <label htmlFor="passportNo">Passport No:</label>
                  <Field type="text" name="passportNo" />
                </div>
              </FormRow>
              <FormRow>
                <div>
                  <label htmlFor="expectedSalary">Expected Salary:*</label>
                  <Field type="text" name="expectedSalary" />
                  <span>THB</span>
                </div>
                <button type="submit">Submit</button>
              </FormRow>
            </FormContainer>
          </Form>
        );
      }}
    </Formik>
  );
}

const FormContainer = styled.div`
  background-color: khaki;
`;

const FormRow = styled.div`
  display: flex;
`;

const RadioGroup = styled.div`
  display: flex;
`;

export default MemberForm;
