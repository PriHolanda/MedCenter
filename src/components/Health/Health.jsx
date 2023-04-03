import { Image } from "@chakra-ui/react";
import Details1 from "../../assets/images/details1.png"
import Details2 from "../../assets/images/details2.png"
import Baby from "../../assets/images/baby-plans.png"
import "./styles.css"

function Health() {
    return (
        <div className="health-global">
            <div className="informations-health">
                <h1 className="name-health">Plano Recém Nascido</h1>
                <p className="health-informations">O Plano cobre atendimento médico
                 e exames durante os primeiros 30 dias de vida do seu bebê.</p>
                <p className="health-price">por: <span className="price">R$:149,99</span></p>
            </div>
            <Image src={Details1} pos={"relative"} left={"175px"} bottom={"125px"} />
            <Image src={Details2} pos={"relative"} left={"9px"} top={"-24px"}/>
            <Image src={Baby} pos={"relative"} bottom={"179px"} left={"108px"} />
        </div>
    )
}

export default Health;