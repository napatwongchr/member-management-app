import React from "react";
import { Field } from "formik";
import { Radio } from "antd";
import styled from "@emotion/styled";

function GenderField() {
  return (
    <RadioGroup>
      <GroupLabel>Gender</GroupLabel>
      <RadioField label="Male" id="maleOption" name="gender" value="male" />
      <RadioField
        label="Female"
        id="femaleOption"
        name="gender"
        value="female"
      />
      <RadioField label="Other" id="otherOption" name="gender" value="other" />
    </RadioGroup>
  );
}

function RadioField({ id, name, value, label }) {
  return (
    <div>
      <Field id={id} type="radio" name={name} value={value}>
        {props => {
          const { field, form } = props;
          function handleChange(e) {
            form.setFieldValue(field.name, e.target.value);
          }
          return (
            <Radio {...props.field} onChange={handleChange}>
              {label}
            </Radio>
          );
        }}
      </Field>
    </div>
  );
}

const RadioGroup = styled.div`
  display: flex;
`;

const GroupLabel = styled.span`
  margin-right: 10px;
`;

export default GenderField;
