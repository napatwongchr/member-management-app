import React from "react";
import { Field } from "formik";
import styled from "@emotion/styled";
import { Input } from "antd";

function TextField({ id, name, label, infoText, noLabel, containerStyle }) {
  return (
    <FormGroup containerStyle={containerStyle}>
      {noLabel ? null : <Label htmlFor={id}>{label}</Label>}
      <Field id={id} type="text" name={name}>
        {props => {
          return <Input {...props.field} />;
        }}
      </Field>
      {infoText}
    </FormGroup>
  );
}

export default TextField;

const Label = styled.label`
  width: 120px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${props =>
    (props.containerStyle && props.containerStyle.ml) || "0px"};
  margin-right: ${props =>
    (props.containerStyle && props.containerStyle.mr) || "10px"};
`;
