import React from 'react';

function Appointments() {
  return (
    <div className="App">
      <br />
      <h2 className="display-6">Welcome to the Appointments page</h2>
      <p>Please complete all fields:</p>
      <br />
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
    </div>
  );
}

export default Appointments;
