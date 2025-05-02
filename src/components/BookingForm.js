import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookFreeCallForm() {
  return (
    <form action="">
      <CustomCalendarContainer>
        <CustomDatePicker />
      </CustomCalendarContainer>
    </form>
  );
}

function CustomCalendarContainer({ className, children }) {
  return (
    <div className="calendar-wrapper">
      <div className="custom-calendar-container">
        <div className="calendar-header-text">
          <p>Select a Day</p>
        </div>

        <div className="calendar-header">
          <p>calendar</p>
          <p>
            <span>{new Date().getFullYear()}</span> <br />
            {`${new Date().toLocaleString("en-US", {
              weekday: "short",
              month: "long",
              day: "numeric",
            })}`}
          </p>
        </div>

        <div className="calendar-body">{children}</div>
      </div>
    </div>
  );
}

function CustomDatePicker({ className }) {
  const [startDate, setStartDate] = useState(new Date());

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM d, yyyy h:mm aa"
      minDate={new Date()}
      maxDate={maxDate}
      inline
      className="react-datepicker"
    />
  );
}
