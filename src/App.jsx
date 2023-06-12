import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landingPage/Landing'
import LoginMed from "./pages/LoginMed/LoginMed";
import RegisterPacient from "./pages/registerPacient/RegisterPacient";
import RegisterDoctor from "./pages/registerDoctor/RegisterDoctor";
import LoginPatient from "./pages/LoginPatient/LoginPatient";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import Patient from "./pages/Patient/Patient";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Landing/>} />
        <Route path="/login-pacient" element={<LoginPatient/>} />
        <Route path="/patient" element={<Patient/>} />
        <Route path="/login-medico" element={<LoginMed/>} />
        <Route path="/register-pacient" element={<RegisterPacient/>} />
        <Route path="/register-doctor" element={<RegisterDoctor/>} />
        <Route path="/alert" element={<LoginPopUp/>} />
      </Routes>
    </Router>
  )
}

export default App