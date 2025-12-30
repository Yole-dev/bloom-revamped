// Hooks
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

// imported react libraries
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// imported button component
import Button from "./Button";
import { minutesInHour } from "date-fns/constants";
import { div } from "motion/react-client";

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
        <CalendarStep onNext={nextStep} dateSelected={!!formValues.date}>
          <CustomDatePicker control={control} />
        </CalendarStep>
      )}

      {/* step 2 (Time Selection) */}

      {step === 2 && (
        <TimeStep
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
          onBack={prevStep}
          formValid={!!formValues.name && !!formValues.email}
          selectedDate={formValues.date}
          selectedTime={formValues.time}
        >
          <UserFormDetails control={control} />
        </UserDetailsStep>
      )}
    </form>
  );
}

function CalendarStep({ className, children, onNext, dateSelected }) {
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

function TimeStep({ children, onNext, onBack, timeSelected, selectedDate }) {
  return (
    <div className="clock-wrapper">
      <div className="custom-clock-container">
        <p className="selected-date">
          {selectedDate?.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <div className="clock-header-text">
          <p>Select a Time</p>
          <p>Duration: 30mins</p>

          <p>Available time: 11:00AM - 16:00PM</p>
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
          timeFormat="HH  :  mm"
          timeIntervals={15}
          dateFormat="h  :  mm aa"
          minTime={new Date().setHours(11, 0)}
          maxTime={new Date().setHours(16, 0)}
          excludeTimes={[
            new Date().setHours(12, 0), // Noon
            new Date().setHours(13, 0), // 1PM
          ]}
          inline
          className="custom-time-picker"
        />
      )}
    />
  );
}

function UserDetailsStep({
  children,
  control,
  onBack,
  selectedTime,
  selectedDate,
  formValid,
}) {
  return (
    <div className="user-details-wrapper">
      <div className="user-details-container">
        <div className="user-details-header-texts">
          <p>
            <span>
              <ion-icon name="time-outline"></ion-icon>
            </span>
            30 mins
          </p>

          <p>
            <span>
              <ion-icon name="videocam-outline"></ion-icon>
            </span>
            Web conferencing details provided upon confirmation.
          </p>

          <p>
            <span>
              <ion-icon name="calendar-clear-outline"></ion-icon>
            </span>
            {selectedTime.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}{" "}
            -{" "}
            {new Date(selectedTime.getTime() + 30 * 60000).toLocaleTimeString(
              "en-US",
              {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }
            )}
            , {"  "}
            {selectedDate?.toLocaleString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            .
          </p>

          <p>
            <span>
              <ion-icon name="earth-outline"></ion-icon>
            </span>
            West Africa Time
          </p>
        </div>

        <div className="user-details-form-container">
          <p>Description</p>
          <p>
            In this Virtual Meeting, we’ll be discussing your business, goals,
            and how we can help. We’ll also answer any questions you have.
          </p>

          {children}

          <p>
            By proceeding, you confirm that you have read and agree to 
            <a href="#">Calendly's Terms of Use</a> and 
            <a href="#">Privacy Notice</a>.
          </p>
        </div>
      </div>

      <div className="user-details-buttons">
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
          className="booking-submit-button"
          width={220}
          height={73}
          background="#FF6016"
          fontSize={22}
          fontWeight={400}
          borderRadius={38}
          type="submit"
          disabled={!formValid}
        >
          Schedule Call
        </Button>
      </div>
    </div>
  );
}

function UserFormDetails({ control }) {
  const servicesOptions = [
    "Web Design",
    "Branding Design",
    "UI/UX",
    "Web Development",
    "Ecommerce",
    "Others",
  ];

  return (
    <div className="user-details-form">
      <div className="user-grid-form">
        <div>
          <label htmlFor="firstName">First name</label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="First name"
                className="form-input"
              />
            )}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last name</label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Last name"
                className="form-input"
              />
            )}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email">Email address</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Email address"
              className="form-input"
            />
          )}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone number</label>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="tel"
              placeholder="012 3456 7890"
              maxLength={11}
              className="form-input"
            />
          )}
        />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="send us a message"
              maxLength={1500}
              className="form-textarea"
            />
          )}
        />
      </div>

      <div>
        <label htmlFor="services">Services</label>
        <div className="user-services-grid-form">
          {servicesOptions.map((service) => (
            <div key={service} className="user-check-service-container">
              <Controller
                name={`services.${service}`}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    id={service}
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />
              <label htmlFor={service}> {service} </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="budget">What's your budget for this project?</label>
        <Controller
          name="budget"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="number"
              placeholder=""
              maxLength={11}
              className="form-input"
            />
          )}
        />
      </div>
    </div>
  );
}
