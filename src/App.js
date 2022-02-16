import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Events from './components/Events';
import Doctors from './components/Doctors';
import Clients from './components/Clients';

export default function App() {
  return (
    <div className="text-left">
      <nav className="navbar mr-auto navbar-dark">
        <Button variant="primary" size="lg" className="custom-btn">
          <Link to="/">Home</Link>
        </Button>
        <Button variant="primary" size="lg" className="custom-btn">
          <Link to="/appointments">Appointments</Link>
        </Button>
        <Button variant="primary" size="lg" className="custom-btn">
          <Link to="/events">Events</Link>
        </Button>
        <Button variant="primary" size="lg" className="custom-btn">
          <Link to="/doctors">Doctors</Link>
        </Button>
        <Button variant="primary" size="lg" className="custom-btn">
          <Link to="/clients">Clients</Link>
        </Button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="appointments" element={<Appointments />}></Route>
        <Route path="events" element={<Events />}></Route>
        <Route path="doctors" element={<Doctors />}></Route>
        <Route path="clients" element={<Clients />}></Route>
      </Routes>
    </div>
  );
}
