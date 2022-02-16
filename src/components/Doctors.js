import React from 'react';

function Doctors() {
  return (
    <div className="App">
      <br />
      <h2 className="display-6">Welcome to the Doctors page</h2>
      <br />
      <div className="row">
        <select
          defaultValue={'DEFAULT'}
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option value="DEFAULT" disabled>
            Choose a doctor
          </option>
          <option value="1">Family doctor - Anton Pogorelov</option>
          <option value="2">Dentist - Vladimir Butko</option>
          <option value="3">Therapist - Anna Ivanova</option>
          <option value="4">Ophthalmologist - Kirill Cherniy</option>
          <option value="5">Otorhinolaryngologist - Andrei Golota</option>
          <option value="6">Cardiologist - Mikhail Burulev</option>
          <option value="7">Allergist - Nikita Belyi</option>
        </select>
      </div>
    </div>
  );
}

export default Doctors;
