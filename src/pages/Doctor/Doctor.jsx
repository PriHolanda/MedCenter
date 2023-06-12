import { Image } from "@chakra-ui/react"
import NavbarSistemDoctor from "../../components/NavbarSistemDoctor/NavbarSistemDoctor"
import DoctorSistem from "../../assets/images/doctor-sistem.svg"
import Airplane from "../../assets/images/airplane.svg";
import "./styles.css"

function Doctor() {
    return (
        <div className="doctor-global">
            <NavbarSistemDoctor />

            <div className="eclipseBlue-doctor"></div>

            <div className="doctor-container">
                <Image src={DoctorSistem} className="doctor-sistem" />

                <div className="text-doctor">
                    <h1 className="welcome-doctor">Seja Bem-vinda, <br/><span className="user-doctor">Dr. Mayra!</span></h1>
                    <p className="introducion-doctor">Estamos aqui para tornar sua experiênia no nosso sistema e seu dia o mais agradável e produtivo possível.</p>
                </div>


            </div>

            <div className="eclipsePink-doctor"></div>
            <Image class="airplane-doctor-img" src={Airplane} />
        </div>
    )
}

export default Doctor