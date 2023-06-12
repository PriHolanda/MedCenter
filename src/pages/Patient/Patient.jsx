import { Image } from "@chakra-ui/react"
import NavbarSistem from "../../components/NavbarSistemPatient/NavbarSistemPatient"
import GirlPatient from "../../assets/images/girl-patient.svg"
import Airplane from "../../assets/images/airplane.svg";
import "./styles.css"

function Patient() {
    return (
        <div className="patient-global">
            <NavbarSistem />

            <div className="eclipseBlue-patient"></div>

            <div className="patient-container">
                <Image src={GirlPatient} className="girl-patient" />

                <div className="text-patient">
                    <h1 className="welcome-patient">Seja Bem-vinda, <span className="user-patient">Valentina!</span></h1>
                    <p className="introducion-patient">Sabemos que cuidar de nossas crianças requer atenção especial e estamos prontos para oferecer o melhor atendimento possível!</p>
                </div>


            </div>
            <div className="button-patient-container">
                <button className="button-patient">Agendar consulta</button>
            </div>

            <div className="eclipsePink-patient"></div>
            <Image class="airplane-patient-img" src={Airplane} />
        </div>
    )
}

export default Patient