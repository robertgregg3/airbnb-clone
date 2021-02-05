import { Button } from "@material-ui/core";
import { People } from "@material-ui/icons";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../css/Search.css";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of Guests
        <People />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button>Search Airbnb</Button>
    </div>
  );
}

export default Search;
