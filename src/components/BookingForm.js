// Hooks
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

// imported react libraries
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// imported button component
import Button from "./Button";

export default function BookFreeCallForm() {
  const [step, setStep] = useState(1);
  const { control, handleSubmit, watch } = useForm();

  //handles form submission
  function onSubmit(data) {
    console.log("Form Submitted:", data);
  }

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  // watchs form values passed for validation purposes
  const formValues = watch();

  return (
    // step 1 (Date Selection)
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && (
        <CalendarStep
          control={control}
          onNext={nextStep}
          dateSelected={!!formValues.date}
        >
          <CustomDatePicker control={control} />
        </CalendarStep>
      )}

      {/* step 2 (Time Selection) */}

      {step === 2 && (
        <TimeStep
          control={control}
          onNext={nextStep}
          onBack={prevStep}
          timeSelected={!!formValues.time}
          selectedDate={formValues.date}
        >
          <CustomTimePicker control={control} />
        </TimeStep>
      )}

      {/* step 3 (User Details) */}
      {step === 3 && (
        <UserDetailsStep
          control={control}
          onBack={prevStep}
          formValid={!!formValues.name && !!formValues.email}
        ></UserDetailsStep>
      )}
    </form>
  );
}

function CalendarStep({ className, children, onNext, control, dateSelected }) {
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
        onClick={onNext}
        disabled={!dateSelected}
      >
        Next
      </Button>
    </div>
  );
}

function CustomDatePicker({ className, control }) {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);

  return (
    <Controller
      name="date"
      control={control}
      defaultValue={new Date()}
      render={({ field }) => (
        <DatePicker
          selected={field.value}
          onChange={field.onChange}
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          maxDate={maxDate}
          inline
          className="react-datepicker"
        />
      )}
    />
  );
}

function TimeStep({
  children,
  control,
  onNext,
  onBack,
  timeSelected,
  selectedDate,
}) {
  return (
    <div className="clock-wrapper">
      <div className="custom-clock-container">
        <div className="selected-date">
          <p>{selectedDate?.toLocaleString()}</p>
        </div>

        <div className="clock-header">
          <p>Select Time</p>
          <p></p>
        </div>

        <div className="clock-body">{children}</div>
      </div>

      <div className="time-step-buttons">
        <Button
          className="booking-back-button"
          width={160}
          height={73}
          background="#FFF"
          color="#FF6016"
          fontSize={22}
          fontWeight={400}
          borderRadius={38}
          border="1px solid #FF6016"
          onClick={onBack}
        >
          Back
        </Button>

        <Button
          className="booking-next-button"
          width={160}
          height={73}
          background="#FF6016"
          fontSize={22}
          fontWeight={400}
          borderRadius={38}
          onClick={onNext}
          disabled={!timeSelected}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

function CustomTimePicker({ control }) {
  return (
    <Controller
      name="time"
      control={control}
      defaultValue={null}
      render={({ field }) => (
        <DatePicker
          selected={field.value}
          onChange={field.onChange}
          showTimeSelect
          showTimeSelectOnly
          timeFormat="HH : mm"
          timeIntervals={5}
          dateFormat="h:mm aa"
          minTime={new Date().setHours(11, 0)}
          maxTime={new Date().setHours(16, 0)}
          excludeTimes={[
            new Date().setHours(12, 0), // Noon
            new Date().setHours(13, 0), // 1PM
          ]}
        />
      )}
    />
  );
}

function UserDetailsStep({ control, onBack, formValid }) {
  return;
}
