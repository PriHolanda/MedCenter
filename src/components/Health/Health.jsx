import { Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import DetailsBlue1 from "../../assets/images/details-blue1.png"
import DetailsBlue2 from "../../assets/images/details-blue2.png"
import DetailsPink1 from "../../assets/images/details-pink1.png"
import DetailsPink2 from "../../assets/images/details-pink2.png"
import Baby from "../../assets/images/baby-plans.png"
import Kids from "../../assets/images/kids-plans.png"
import "./styles.css"

function Health() {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

    return (

        <div className="health-global">
            {isSmallerThanMd ? (
                <><div className="card-newborn">
                    <div className="newborn-plan">
                        <div className="informations-newborn">
                            <h1 className="name-newborn">Plano Recém Nascido</h1>
                            <p className="health-informations-newborn">O Plano cobre atendimento médico
                                e exames durante os primeiros 30 dias de vida do seu bebê.</p>
                            <p className="health-price-newborn">por: <span className="price-newborn">R$:149,99</span></p>
                        </div>
                        <Image src={DetailsBlue1}
                            pos={"relative"}
                            left={"175px"}
                            bottom={"125px"} />
                        <Image src={DetailsBlue2}
                            pos={"relative"}
                            left={"9px"}
                            top={"-24px"} />
                        <Image src={Baby}
                            pos={"relative"}
                            bottom={"179px"}
                            left={"108px"}
                            borderRadius={"0px 0px 15px 0px"} />
                    </div>
                    <div className="button-health-global">
                        <button className="button-health">Contratar</button>
                    </div>
                </div></>

            ) : (

                <><div className="card-newborn">
                    <div className="newborn-plan">
                        <div className="informations-newborn">
                            <h1 className="name-newborn">Plano Recém Nascido</h1>
                            <p className="health-informations-newborn">O Plano cobre atendimento médico
                                e exames durante os primeiros 30 dias de vida do seu bebê.</p>
                            <p className="health-price-newborn">por: <span className="price-newborn">R$:149,99</span></p>
                        </div>
                        <Image src={DetailsBlue1} className="details-blue1" />
                        <Image src={DetailsBlue2} className="details-blue2" />
                        <Image src={Baby} className="baby-health" />
                    </div>
                    <div className="button-health-global">
                        <button className="button-health">Contratar</button>
                    </div>
                </div>

                    <div className="card-coverage">
                        <div className="coverage-plan">
                            <div className="informations-coverage">
                                <h1 className="name-coverage">Plano de Cobertura</h1>
                                <p className="health-informations-coverage">O Plano cobre atendimento médico, exames, retornos e procedimentos variados.</p>
                                <p className="health-price-coverage">Por:<span className="price-coverage">R$:249,99</span></p>
                            </div>
                            <Image src={DetailsPink1} className="details-pink1" />
                            <Image src={DetailsPink2} className="details-pink2" />
                            <Image src={Kids} className="kids-img" />
                        </div>
                        <div className="button-health-global">
                            <button className="button-health">Contratar</button>
                        </div>
                    </div></>
            )}
        </div>
    )
}

export default Health;