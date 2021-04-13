import React, { useRef, useState } from 'react'
import { useHistory } from "react-router-dom";
import { Button, DateTime, Input } from '@voyage/artigas-ds'
import Counter from '../Counter'
import { SearchForm } from './Search.style'

let initialSearchData = {
  cityCode: "",
  checkInDate: "",
  checkOutDate: "",
  adults: 2,
};

const Search = () => {
  const history = useHistory();
  const inputEl = useRef(null);
  const [searchData, setSeachData] = useState(initialSearchData);
  const [minData, setMinData] = useState();
  const [dateTimeType, setDateTimeType] = useState("text")
  const today = new Date();
  const day = String(today.getDate() + 1).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const tomorrow = `${year}-${month}-${day}`;

  const minRetunDate = (dateTime) => {
    const newDate = new Date();
    newDate.setDate(dateTime.getDate() + 2);
    setMinData(newDate.toISOString().split("T")[0]);
  };

  const updateSearchData = (name, value) => {

    let internalObject = {
      ...searchData,
      [name]: value,
    };

    setSeachData(internalObject);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "checkInDate") {
      const { valueAsDate } = inputEl.current;
      minRetunDate(valueAsDate);
    }

    updateSearchData(name, value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    const {
      cityCode,
      checkInDate,
      checkOutDate,
      adults
    } = searchData;

    history.push(
      `/offers/${cityCode}/${checkInDate}/${checkOutDate}/${adults}`
    );
  }

  return (
    <SearchForm className="container">
      <Input
        label="City"
        id="cityCode"
        placeholder="Choose a city"
        onChange={(e) => handleChange(e)}
      />
      <DateTime
        label="Check In"
        id="checkInDate"
        placeholder="Choose CheckIn date"
        type={dateTimeType}
        ref={inputEl}
        min={tomorrow}
        onChange={(e) => handleChange(e)}
      />
      <DateTime
        label="Check Out"
        id="checkOutDate"
        placeholder="Choose Check Out date"
        type={dateTimeType}
        min={minData}
        onChange={(e) => handleChange(e)}
      />
      <Counter
        label="Passangers"
        id="adults"
        value={searchData.adults}

        onChange={(e) => handleChange(e)}
      />
      <Button onClick={(e) => handleClick(e)}>Search</Button>
    </SearchForm>
  )
}

export default Search
