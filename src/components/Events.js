import React from 'react';

function Events() {
  return (
    <div className="App">
      <br />
      <h2 className="display-6">Welcome to the Events page</h2>
      <br />
      <select
        defaultValue={'DEFAULT'}
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option value="DEFAULT" disabled>
          Choose event
        </option>
        <option value="1">Visit a family doctor</option>
        <option value="2">Visit a dentist</option>
        <option value="3">Visit a therapist</option>
        <option value="4">Visit an ophthalmologist</option>
        <option value="5">Visit an otorhinolaryngologist</option>
        <option value="6">Visit a cardiologist</option>
        <option value="7">Visit an allergist</option>
      </select>
    </div>
  );
}

export default Events;
