import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landingPage/Landing'
import LoginMed from "./pages/LoginMed/LoginMed";
import RegisterPacient from "./pages/registerPacient/RegisterPacient";
import LoginPatient from "./pages/LoginPatient/LoginPatient";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login-pacient" element={<LoginPatient/>} />
        <Route path="/login-medico" element={<LoginMed/>} />
        <Route path="/register-pacient" element={<RegisterPacient/>} />
      </Routes>
    </Router>
  )
}

export default App