import { Image } from "@chakra-ui/react";
import DoctorsImg from "../../assets/images/doctors.png"
import "./styles.css"

function Doctors() {
    return (
        <div className="doctors-global">
            <div className="doctors-container">
                <Image src={DoctorsImg} />
                <div className="card-linha"></div>
                
                <div className="informations-global">
                    <h1 className="name-doctors-card">Dr. Ana Paula</h1>
                    <h2 className="profission-doctors-card">Psicóloga</h2>
                    <p className="register-doctors-card">CRM 17277 | RQE 9647</p>
               
                </div>
                <div className="card-linha"></div>
                <div className="inf-adicionais">
                    <h1 className="informations-doctors-card">Ver mais..</h1>
                </div>
            </div>
        </div>
    )
}

export default Doctors;