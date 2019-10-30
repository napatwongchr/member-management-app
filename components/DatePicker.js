import React from "react";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import dateFnsLocalizer from "react-widgets-date-fns";
import "react-widgets/dist/css/react-widgets.css";
dateFnsLocalizer();

function DatePicker(props) {
  const { field, form } = props;

  function handleOnChange(value) {
    form.setFieldValue(field.name, value);
  }

  return (
    <DateTimePicker
      {...field}
      onChange={handleOnChange}
      time={false}
      value={!field.value ? null : new Date(field.value)}
    />
  );
}

export default DatePicker;
