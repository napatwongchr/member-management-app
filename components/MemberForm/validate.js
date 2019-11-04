const validate = formValues => {
  let errors = {};

  if (!formValues.firstName) {
    errors.firstName = "Required.";
  }

  if (!formValues.lastName) {
    errors.lastName = "Required.";
  }

  if (!formValues.expectedSalary) {
    errors.expectedSalary = "Required.";
  }

  if (!formValues.title) {
    errors.title = "Required.";
  }

  if (!formValues.birthday) {
    errors.birthday = "Required.";
  }

  return errors;
};

export default validate;
