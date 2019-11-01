import React from "react";
import moment from "moment";
import { Field } from "formik";
import styled from "@emotion/styled";
import { DatePicker as AntdDatePicker } from "antd";

function DatePickerField() {
  return (
    <FormGroup>
      <Label htmlFor="birthday">Birthday</Label>
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
      value={field.value ? moment(field.value) : null}
      onChange={handleOnChange}
    />
  );
}

const Label = styled.div`
  margin-right: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export default DatePickerField;
