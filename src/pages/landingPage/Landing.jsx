import NavbarLanding from "../../components/NavbarLanding/NavbarLanding";
import Girl from "../../assets/images/girl-landingPage.svg";
import Airplane from "../../assets/images/airplane.svg";
import EclipsePink1 from "../../assets/images/eclipsePink1.svg"
import BgEspec from "../../assets/images/bg-especialidades.svg"
import BgEspecDesk from "../../assets/images/bg-especialidades.svg"
import IconEsq from "../../assets/images/icon-arrowDown.svg"
import IconDir from "../../assets/images/icon-arrowDown2.svg"
import { Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import "./styles.css"
import Doctors from "../../components/Doctors/Doctors";
import Health from "../../components/Health/Health";

function Landing() {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

    return (
        <div className="landing-global">
            <div className="introducion-navbar">
                <NavbarLanding />

                {/* INTRODUÇÃO */}

                <div className="landing-information">
                    <div className="information-container">
                        <Image class="girl-img" src={Girl} alt="Menina na landing-page" w={"90%"} />
                        <p className="introducion">A <span class="destaque">MedCenter</span> é uma clínica especializada no cuidado materno-infantil com especialistas focados em cuidar da saúde das crianças em todos os seus aspectos: alimentação, comportamento, doenças e, sobretudo, prevenção.</p>
                    </div>

                    <Image class="airplane-img" src={Airplane} />
                    <div className="eclipseBlue1" />
                    <div className="eclipsePink1"></div>
                </div>
            </div>

            {/* ESPECIALIDADES */}


            <section id="landing-especialidads">
                <div className="heading-espec">
                    <h2 className="especialidades">Especialidades</h2>
                    <div className="linhaEspec"></div>
                </div>


                {isSmallerThanMd ? (
                    <section id="card-global">
                        <Image src={BgEspec} className="bgEspec" w={"100%"} pos={"absolute"} zIndex={"-3"}/>
                        <Image src={IconEsq} /><div className="cardEspec">
                            <div className="linhaCardEspec"></div>
                            <h1 className="h1cardEspec">Psicologia Infantil</h1>
                            <p className="pCardEspec">Ramo da ciência que trata das questões psíquicas de crianças. Assim, essa especialidade investiga e analisa o comportamento dessa faixa etária. O estudo inclui questões de cognição, de perceção, de aflições emocionais, das condições sociais e até mesmo físicas.</p>
                        </div><Image src={IconDir} />
                    </section>

                ) : (

                    <section id="card-global">
                        <Image w={"100%"} src={BgEspecDesk} pos={"absolute"} />
                        <Image src={IconEsq} className="icon" />
                        <div className="cardEspec">
                            <div className="linhaCardEspec"></div>
                            <h1 className="h1cardEspec">Psicologia Infantil</h1>
                            <p className="pCardEspec">Ramo da ciência que trata das questões psíquicas de crianças. Assim, essa especialidade investiga e analisa o comportamento dessa faixa etária. O estudo inclui questões de cognição, de perceção, de aflições emocionais, das condições sociais e até mesmo físicas.</p>
                        </div>

                        <div className="cardEspec">
                            <div className="linhaCardEspec"></div>
                            <h1 className="h1cardEspec">Alergia/ Imunologia</h1>
                            <p className="pCardEspec">Investiga e trata doenças relacionadas ao sistema imunológico, incluindo tanto as alergias quanto as imunodeficiências primárias, que estão associadas a defeitos hereditários ou genéticos do sistema imunológico.</p>
                        </div>

                        <div className="cardEspec">
                            <div className="linhaCardEspec"></div>
                            <h1 className="h1cardEspec">Neonatologia</h1>
                            <p className="pCardEspec">É uma das especialidades mais delicadas de toda a Medicina. A especialidade é a responsável por realizar o acompanhamento médico de fetos e de crianças recém-nascidas até o 28° dia de vida fora da barriga da mãe.</p>
                        </div>
                        <Image src={IconDir} className="icon" />
                    </section>
                )}

            </section >

            {/* NOSSOS MÉDICOS */}

            <section id="landing-doctors-global" >
                <div className="heading-doctors">
                    <h1 className="h1-doctors">Nossos Médicos</h1>
                    <div className="linhaDoctors"></div>
                </div>

                {isSmallerThanMd ? (

                    <div className="carousel-doctors-global">
                        <div className="eclipsePink-doctors" />
                        <div className="eclipseBlue-doctors" />
                        <div className="carousel-doctors">
                            <Image src={IconEsq} />
                            <Doctors />
                            <Doctors />
                            <Image src={IconDir} />
                        </div>

                        <div className="carousel-doctors-global">
                            <div className="carousel-doctors">
                                <Image src={IconEsq} />
                                <Doctors />
                                <Doctors />
                                <Image src={IconDir} />
                            </div>
                        </div>
                    </div>

                ) : (

                    <div className="carousel-doctors-global">
                        <div className="eclipsePink-doctors" />
                        <div className="eclipseBlue-doctors" />
                        <div className="carousel-doctors">
                            <Image src={IconEsq} className="icon" />
                            <Doctors />
                            <Doctors />
                            <Doctors />
                            <Doctors />
                            <Image src={IconDir} className="icon" />
                        </div>


                        <div className="carousel-doctors">
                            <Image src={IconEsq} className="icon" />
                            <Doctors />
                            <Doctors />
                            <Doctors />
                            <Doctors />
                            <Image src={IconDir} className="icon" />
                        </div>

                    </div>
                )}

            </section>

            {/* PLANOS DE SAÚDE */}
            
            {isSmallerThanMd ? (

                <div className="landing-health-global" >
                    <div className="heading-health">
                        <h2 className="healths">Planos de Saúde</h2>
                        <div className="linhaHealth"></div>
                    </div>

                    <div className="carousel-health-global">
                        <div className="eclipsePink-health" />
                        <div className="eclipseBlue-health" />
                        <div className="carousel-health">
                            <Image src={IconEsq} />
                            <Health />
                            <Image src={IconDir} />
                        </div>
                    </div>
                </div >

            ) : (

                <section id="landing-health-global" >
                    <div className="heading-health">
                        <h2 className="healths">Planos de Saúde</h2>
                        <div className="linhaHealth"></div>
                    </div>

                    <div className="carousel-health-global">
                        <div className="eclipsePink-health" />
                        <div className="eclipseBlue-health" />
                        <div className="carousel-health">
                            <Image src={IconEsq} className="icon" />
                            <Health />
                            <Image src={IconDir} className="icon" />
                        </div>
                    </div>

                    <div className="carousel-health-global">
                        <div className="carousel-health">
                            <Image src={IconEsq} className="icon" />
                            <Health />
                            <Image src={IconDir} className="icon" />
                        </div>
                    </div>
                </section >
            )}

            <footer className="landing-footer">
                <p>@ 2023 MedCenter. Todos os Direitos Reservados</p>
            </footer>
        </div >

    )
}

export default Landing;