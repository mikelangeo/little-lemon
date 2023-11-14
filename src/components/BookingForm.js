import React from "react";
import { useState } from "react";
import clock from "../icons/clock.png";
import date from "../icons/date.png";
import occasions from "../icons/occasions.jpg";
import persons from "../icons/persons.jpg";


const BookingForm = (props) => {

  const [date,setDate]=useState("");
  const [times,setTimes]=useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
        <form className="reservationForm" onSubmit={handleSumbit}>
            <div className="chooseAll">
              <div className="test">
                <div>
                  <label htmlFor="book-date">Choose Date</label>
                  <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                </div>
              </div>
              <div className="test">
                <label htmlFor="book-time">Choose Time</label>
                <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                  <option value="">Select a Time</option>
                  {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                </select>
              </div>
              <div className="test">
                <label htmlFor="book-guests">Number of Guests</label>
                <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
              </div>
              <div className="test">
                <label htmlFor="book-occasion">Occasion</label>
                <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                  <option value="">Select an Option</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>
            </div>
            <br></br>
            <div className="makeReservation">
              <button aria-label="On Click" type={"submit"}>Make your Reservation</button>
            </div>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;