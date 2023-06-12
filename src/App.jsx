import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landingPage/Landing'
import LoginMed from "./pages/LoginMed/LoginMed";
import RegisterPacient from "./pages/registerPacient/RegisterPacient";
import RegisterDoctor from "./pages/registerDoctor/RegisterDoctor";
import LoginPatient from "./pages/LoginPatient/LoginPatient";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import Patient from "./pages/Patient/Patient";
import Doctor from "./pages/Doctor/Doctor";
import LoginAdm from "./pages/LoginAdm/LoginAdm";
import Schedule from "./pages/SchedulingPatient/Scheduling";
import PlansPatient from "./pages/PlansPatient/PlansPatient";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Landing/>} />
        <Route path="/login-pacient" element={<LoginPatient/>} />
        <Route path="/patient" element={<Patient/>} />
        <Route path="/schedule-patient" element={<Schedule/>} />
        <Route path="/plans-patient" element={<PlansPatient/>} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/login-medico" element={<LoginMed/>} />
        <Route path="/login-adm" element={<LoginAdm/>} />
        <Route path="/register-pacient" element={<RegisterPacient/>} />
        <Route path="/register-doctor" element={<RegisterDoctor/>} />
        <Route path="/alert" element={<LoginPopUp/>} />
      </Routes>
    </Router>
  )
}

export default App