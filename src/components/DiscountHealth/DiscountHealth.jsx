import DetailsBlue1 from "../../assets/images/details-blue1.png"
import DetailsBlue2 from "../../assets/images/details-blue2.png"
import Baby from "../../assets/images/baby-plans.png"
import { Image } from "@chakra-ui/react"
import "./styles.css"

function DiscountHealth(){
    return(
        <div className="discount-newborn-plan-patient">
        <div className="discount-informations-newborn-patient">
            <h1 className="discount-name-newborn-patient">Plano Recém Nascido</h1>
            <p className="discount-health-informations-newborn-patient">O Plano cobre atendimento médico
                e exames durante os primeiros 30 dias de vida do seu bebê.</p>
            <p className="discount-health-price-newborn-patient">por: <span className="discount-price-newborn-patient">R$:149,99</span></p>
        </div>
        <Image src={DetailsBlue1}
            pos={"relative"}
            className="discount-details-blue1"/>
        <Image src={DetailsBlue2}
            pos={"relative"}
            left={"9px"}
            top={"-24px"}
            className="discount-details-blue2" />
        <Image src={Baby}
            pos={"relative"}
            borderRadius={"0px 0px 15px 0px"}
            className="discount-baby-health" />
    </div>
    )
}

export default DiscountHealth;