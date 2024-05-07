/*
Some things I would like to see in the calendar:
• scheduled shifts
• open shifts
• events:
    -family that might be out of town
    -carers that will be unavailable to take on shifts
    -doctor's appointments
• could see a rough overview of the day? click on day to get a more detailed view
• the calendar should show who is scheduled to cover each shift. anyone with access to the calendar should
    be able to see that.
• i would like to see available shifts on the calendar and for users to be able to click on that day to have
    the option to pick up the shift
*/

//npm install react-calendar
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  return (
    <div>
      <Calendar calendarType="gregory" />
      <div>
        <p>
          • Need user. If userId for shift === null, something needs to signal
          that there is an uncovered shift
        </p>
      </div>
    </div>
  );
};

export default Schedule;
