import React from "react";
import { Field } from "formik";
import styled from "@emotion/styled";
import { Select } from "antd";

function SelectField({
  id,
  name,
  label,
  children,
  style,
  filterOption,
  containerStyle
}) {
  return (
    <FormGroup containerStyle={containerStyle}>
      <Label htmlFor={id}>{label}</Label>
      <Field name={name}>
        {props => {
          const { field, form } = props;

          function handleChange(values) {
            form.setFieldValue(field.name, values);
          }

          return (
            <Select
              {...field}
              {...props}
              id={id}
              onChange={handleChange}
              style={style}
              showSearch
              filterOption={filterOption}
            >
              {children}
            </Select>
          );
        }}
      </Field>
    </FormGroup>
  );
}

export default SelectField;

const Label = styled.label`
  margin-right: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props =>
    (props.containerStyle && props.containerStyle.mr) || "10px"};
`;
