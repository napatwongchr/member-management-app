import React from "react";
import moment from "moment";
import { Field } from "formik";
import styled from "@emotion/styled";
import { DatePicker as AntdDatePicker, Form } from "antd";

function DatePickerField() {
  return (
    <FormGroup>
      <Label htmlFor="birthday">Birthday</Label>
      <RequiredMark>*</RequiredMark>
      <Field component={DatePicker} name="birthday" />
    </FormGroup>
  );
}

function DatePicker(props) {
  const { field, form } = props;

  function handleOnChange(date, dateString) {
    form.setFieldValue(field.name, dateString);
  }

  return (
    <AntdDatePicker
      style={{ border: "1px solid red", borderRadius: "5px" }}
      value={field.value ? moment(field.value) : null}
      onChange={handleOnChange}
    />
  );
}

const RequiredMark = styled.span`
  font-weight: 18px;
  margin-right: 10px;
  color: red;
`;

const Label = styled.div`
  margin-right: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  margin-right: 10px;
`;

export default DatePickerField;
