import GirlPatient from "../../assets/images/girl-patient.svg"
import Airplane from "../../assets/images/airplane.svg";
import NavbarSistemPatient from "../../components/NavbarSistemPatient/NavbarSistemPatient";
import { Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import "./styles.css"

function Patient() {
    const navigate = useNavigate();

    return (
        <div className="patient-global">    
            <NavbarSistemPatient />

            <div className="eclipseBlue-patient"></div>

            <div className="patient-container">
                <Image src={GirlPatient} className="girl-patient" />

                <div className="text-patient">
                    <h1 className="welcome-patient">Seja Bem-vinda, <span className="user-patient">Valentina!</span></h1>
                    <p className="introducion-patient">Sabemos que cuidar de nossas crianças requer atenção especial e estamos prontos para oferecer o melhor atendimento possível!</p>
                </div>

            </div>
            <div className="button-patient-container">
                <button className="button-patient" onClick={() => navigate('/schedule-patient')}>Agendar consulta</button>
            </div>

            <div className="eclipsePink-patient"></div>
            <Image class="airplane-patient-img" src={Airplane} />
        </div>
    )
}

export default Patient