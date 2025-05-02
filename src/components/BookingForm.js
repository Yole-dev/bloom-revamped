import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";

export default function BookFreeCallForm() {
  const [startDate, setStartDate] = useState(new Date());

  function handleNextStep(e) {
    e.preventDefault();
    return;
  }

  return (
    <form action="">
      <CustomCalendarContainer
        className="disappear"
        onNextStep={handleNextStep}
      >
        <CustomDatePicker startDate={startDate} setStartDate={setStartDate} />
      </CustomCalendarContainer>
    </form>
  );
}

function CustomCalendarContainer({ className, children, onNextStep }) {
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

      <Button
        className="booking-first-button"
        width={333}
        height={73}
        background="#FF6016"
        fontSize={22}
        fontWeight={400}
        borderRadius={38}
        onClick={onNextStep}
      >
        Next
      </Button>
    </div>
  );
}

function CustomDatePicker({ className, startDate, setStartDate }) {
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
