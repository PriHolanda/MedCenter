import NavbarSistemPatient from "../../components/NavbarSistemPatient/NavbarSistemPatient"
import ArrowDown from "../../assets/images/icon-arrowDown2.svg"
import DetailsBlue1 from "../../assets/images/details-blue1.png"
import DetailsBlue2 from "../../assets/images/details-blue2.png"
import Baby from "../../assets/images/baby-plans.png"
import { Image, Img } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react";
import "./styles.css"
import DiscountHealth from "../../components/DiscountHealth/DiscountHealth"

function PlansPatient() {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");
    const [isSmallerThanMd2] = useMediaQuery("(max-width: 1023px)");
    const [isSmallerThanMd3] = useMediaQuery("(max-width: 1335px)");

    return (
        <div className="plans-patient-global">
            <NavbarSistemPatient />

            <div className="eclipseBlue-plansPatient"></div>

            {isSmallerThanMd ? (
                <div className="plans-patient-container">
                    <h1 className="heading-myplans">Meu Plano</h1>

                    <div className="myplan-baby">
                        <div className="newborn-plan-patient">
                            <div className="informations-newborn-patient">
                                <h1 className="name-newborn-patient">Plano Recém Nascido</h1>
                                <p className="health-informations-newborn-patient">O Plano cobre atendimento médico
                                    e exames durante os primeiros 30 dias de vida do seu bebê.</p>
                                <p className="health-price-newborn-patient">por: <span className="price-newborn-patient">R$:149,99</span></p>
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
                        <div className="buttons-plans-patient">
                            <button className="button-myplan">Pagamento</button>
                            <button className="button-myplan"> Cancelamento</button>
                        </div>
                    </div>

                    <div className="status-myplan">Status: Renovado</div>

                    <p className="check-plans-patient">Verifique se seu <span className="check-emphasis-plans-patient">Plano de Saúde</span> está renovado e atende suas necessidades.</p>

                    <Image src={ArrowDown} m={"0 300px"} w={"40px"} />

                    <p className="text-plans-patient">Também é uma boa ideia explorar novos planos<span className="text-emphasis-plans-patient"> disponivéis: </span></p>

                    <div className="discount-plan-patient-container">
                        <div className="newborn-plan-patient">
                            <div className="informations-newborn-patient">
                                <h1 className="name-newborn-patient">Plano Recém Nascido</h1>
                                <p className="health-informations-newborn-patient">O Plano cobre atendimento médico
                                    e exames durante os primeiros 30 dias de vida do seu bebê.</p>
                                <p className="health-price-newborn-patient">por: <span className="price-newborn-patient">R$:149,99</span></p>
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
                        <div className="discount-plan-patient">30%</div>
                        <div className="eclipsePink-plansPatient"></div>
                    </div>
                </div>

            ) : (

                <div className="plans-patient-container">
                    <h1 className="heading-myplans">Meu Plano</h1>

                    <div className="myplan-container">
                        <div className="newborn-plan-patient">
                            <div className="informations-newborn-patient">
                                <h1 className="name-newborn-patient">Plano Recém Nascido</h1>
                                <p className="health-informations-newborn-patient">O Plano cobre atendimento médico
                                    e exames durante os primeiros 30 dias de vida do seu bebê.</p>
                                <p className="health-price-newborn-patient">por: <span className="price-newborn-patient">R$:149,99</span></p>
                            </div>
                            <Image src={DetailsBlue1} className="details-blue1" />
                            <Image src={DetailsBlue2} className="details-blue2" />
                            <Image src={Baby} className="baby-health" />
                        </div>

                        <div className="myplan-baby">
                            <p className="check-plans-patient">Verifique se seu <span className="check-emphasis-plans-patient">Plano de Saúde</span> está renovado e atende suas necessidades.</p>

                            <div className="buttons-plans-patient">
                                <button className="button-myplan">Pagamento</button>
                                <button className="button-myplan"> Cancelamento</button>
                            </div>

                            <div className="status-myplan">Status: Renovado</div>
                        </div>
                    </div>


                    <p className="text-plans-patient">Também é uma boa ideia explorar novos planos<span className="text-emphasis-plans-patient"> disponivéis: </span></p>

                    {isSmallerThanMd2 ? (
                        <div className="discount-plan-patient-container">
                            <DiscountHealth />
                            <DiscountHealth />
                            <Image src={ArrowDown} className="img-arrown-myplan"/>
                            <div className="discount-plan-patient">30%</div>
                            <div className="eclipsePink-plansPatient"></div>
                        </div>

                    ) : (

                        <div className="discount-plan-patient-container">
                            <DiscountHealth />
                            <DiscountHealth />
                            <DiscountHealth />
                            <img src={ArrowDown} className="img-arrown-myplan"/>
                            <div className="discount-plan-patient">30%</div>
                            <div className="discount-plan-patient2">50%</div>
                            <div className="eclipsePink-plansPatient"></div>
                        </div>
                    )}
                </div>
            )
            }
            <div className="eclipsePink-plansPatient"></div>
        </div >
    )
}

export default PlansPatient
