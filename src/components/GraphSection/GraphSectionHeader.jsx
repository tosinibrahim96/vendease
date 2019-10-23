import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./GraphSectionHeader.scss";

const GraphSectionHeader = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [focusedInput, setFocusedInput] = useState("");

  return (
    <Row>
      <Col sm={7}>
        <ul className="time-ranges">
          <li>1w</li>
          <li>2w</li>
          <li>1m</li>
          <li>3m</li>
          <li>1y</li>
          <li>mtd</li>
          <li>qtd</li>
          <li>ytd</li>
          <li>all</li>
        </ul>
      </Col>
      <Col sm={5}>
        <DateRangePicker
          startDate={startDate} 
          startDateId="randomStartDateId" 
          endDate={endDate} 
          endDateId="randomEndDateId"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }} 
          focusedInput={focusedInput} 
          onFocusChange={focusedInput => setFocusedInput(focusedInput)}
          showClearDates
        />
      </Col>
    </Row>
  );
};

export default GraphSectionHeader;
