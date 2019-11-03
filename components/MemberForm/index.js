import React from "react";
import { Form as FormikForm } from "formik";
import styled from "@emotion/styled";
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap";

import { INITIAL_VALUES } from "../../constants";
import nationality from "../../data/nationality.json";
import dialCodes from "../../data/dial.json";

const TITLE_OPTIONS = [
  { label: "Mr", value: "mr" },
  { label: "Ms", value: "ms" },
  { label: "Miss", value: "miss" }
];

function MemberForm(props) {
  let { members } = props;

  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isEditMode,
    setIsEditMode,
    resetForm,
    setMembers
  } = props;

  function handleClearForm() {
    setIsEditMode(false);
    resetForm({ values: INITIAL_VALUES });
  }

  function handleUpdateMember() {
    const memberKey = values.key;

    let newMembers = members.map(member => {
      if (member.key === memberKey) {
        let updatedMember = {
          ...member,
          ...values,
          name: `${values.firstName} ${values.lastName}`
        };
        return updatedMember;
      }
      return member;
    });
    // console.log(newMembers, ";;;");
    setMembers(newMembers);
    resetForm({ values: INITIAL_VALUES });
    // toast on updated
  }

  return (
    <FormContainer>
      <FormikForm>
        <Row>
          <Col>
            <Form.Group as={Row} controlId="formTitle">
              <Form.Label column sm="2">
                Title:<RequiredMark>*</RequiredMark>
              </Form.Label>
              <Col>
                <Form.Control
                  as="select"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.title && errors.title}
                >
                  <option defaultValue value="">
                    Please select title
                  </option>
                  {TITLE_OPTIONS.map(option => (
                    <option key={option.value}>{option.label}</option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId="formFirstName">
              <Form.Label column sm="3">
                Firstname:<RequiredMark>*</RequiredMark>
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.firstName && errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId="formLastName">
              <Form.Label column sm="3">
                Lastname:<RequiredMark>*</RequiredMark>
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.lastName && errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm="4">
            <Form.Group as={Row} controlId="formBirthDay">
              <Form.Label column sm="2">
                Birthday:<RequiredMark>*</RequiredMark>
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="birthday"
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.birthday && errors.birthday}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.birthday}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
          <Col sm="4">
            <Form.Group as={Row} controlId="formNationality">
              <Form.Label column sm="3">
                Nationality:
              </Form.Label>
              <Col>
                <Form.Control
                  as="select"
                  name="nationality"
                  value={values.nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.nationality && errors.nationality}
                >
                  <option defaultValue value="">
                    Please select nationality
                  </option>
                  {nationality.map((item, index) => (
                    <option key={`${item.nationality}-${index}`}>
                      {item.nationality}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.nationality}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group as={Row} controlId="formCitizenId">
              <Form.Label column sm="1">
                Citizen Id:
              </Form.Label>
              <Col sm="1">
                <Form.Control
                  type="text"
                  name="citizenIdBlock1"
                  value={values.citizenIdBlock1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.citizenIdBlock1 && errors.citizenIdBlock1}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.citizenIdBlock1}
                </Form.Control.Feedback>
              </Col>
              <Divider>-</Divider>
              <Col>
                <Form.Control
                  type="text"
                  name="citizenIdBlock2"
                  value={values.citizenIdBlock2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.citizenIdBlock2 && errors.citizenIdBlock2}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.citizenIdBlock2}
                </Form.Control.Feedback>
              </Col>
              <Divider>-</Divider>
              <Col>
                <Form.Control
                  type="text"
                  name="citizenIdBlock3"
                  value={values.citizenIdBlock3}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.citizenIdBlock3 && errors.citizenIdBlock3}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.citizenIdBlock3}
                </Form.Control.Feedback>
              </Col>
              <Divider>-</Divider>
              <Col>
                <Form.Control
                  type="text"
                  name="citizenIdBlock4"
                  value={values.citizenIdBlock4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.citizenIdBlock4 && errors.citizenIdBlock4}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.citizenIdBlock4}
                </Form.Control.Feedback>
              </Col>
              <Divider>-</Divider>
              <Col sm="1">
                <Form.Control
                  type="text"
                  name="citizenIdBlock5"
                  value={values.citizenIdBlock5}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.citizenIdBlock5 && errors.citizenIdBlock5}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.citizenIdBlock5}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <fieldset>
              <Form.Group as={Row} className="d-flex align-items-center">
                <Form.Label as="legend" column sm={1}>
                  Gender:
                </Form.Label>
                <Form.Check
                  className="mr-5"
                  type="radio"
                  label="Male"
                  name="gender"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={handleChange}
                  id="genderMale"
                />
                <Form.Check
                  className="mr-5"
                  type="radio"
                  label="Female"
                  name="gender"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={handleChange}
                  id="genderFemale"
                />
                <Form.Check
                  className="mr-5"
                  type="radio"
                  label="Unisex"
                  name="gender"
                  value="unisex"
                  checked={values.gender === "unisex"}
                  onChange={handleChange}
                  id="genderUnisex"
                />
              </Form.Group>
            </fieldset>
          </Col>
        </Row>
        <Row>
          <Col sm="9">
            <Form.Group as={Row} controlId="formBirthDay">
              <Form.Label column sm="2">
                Mobile Phone:<RequiredMark>*</RequiredMark>
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  as="select"
                  name="dialCode"
                  value={values.dialCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.dialCode && errors.dialCode}
                >
                  {dialCodes.map(item => (
                    <option
                      key={`${item.dial_code}-${item.code}`}
                      value={`${item.dial_code}`}
                    >
                      {item.name} ({item.dial_code})
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.dialCode}
                </Form.Control.Feedback>
              </Col>
              <Divider>-</Divider>
              <Col sm="5">
                <Form.Control
                  type="text"
                  name="phoneNo"
                  value={values.phoneNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.phoneNo && errors.phoneNo}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNo}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <Form.Group as={Row} controlId="formPassportNo">
              <Form.Label column sm="4">
                Passport No:
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="passportNo"
                  value={values.passportNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.passportNo && errors.passportNo}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.passportNo}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <Form.Group as={Row} controlId="formPassportNo">
              <Form.Label column sm="4">
                Expected Salary:<RequiredMark>*</RequiredMark>
              </Form.Label>
              <Col>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="expectedSalary"
                    value={values.expectedSalary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.expectedSalary && errors.expectedSalary}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text className="rounded-right">
                      THB
                    </InputGroup.Text>
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    {errors.expectedSalary}
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Button
              variant="danger"
              className="mr-3"
              style={{ width: "100px" }}
              onClick={handleClearForm}
            >
              Clear
            </Button>
            {isEditMode ? (
              <Button
                variant="warning"
                style={{ width: "100px" }}
                onClick={handleUpdateMember}
              >
                Update
              </Button>
            ) : (
              <Button style={{ width: "100px" }} type="submit">
                Submit
              </Button>
            )}
          </Col>
        </Row>
      </FormikForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 20px;
`;

const RequiredMark = styled.span`
  color: red;
`;

const Divider = styled.span`
  display: flex;
  align-items: center;
`;

export default MemberForm;
