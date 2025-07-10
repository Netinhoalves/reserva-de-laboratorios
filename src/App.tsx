import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LabSchedule from './pages/LabSchedule';
import NewReservation from './pages/NewReservation';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="lab/:id" element={<LabSchedule />} />
        <Route path="agendar" element={<NewReservation />} />
      </Route>
    </Routes>
  );
}

export default App;