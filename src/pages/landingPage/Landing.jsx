import Navbar from "../../components/Navbar/Navbar";
import Girl from "../../assets/images/girl-landingPage.png";
import Airplane from "../../assets/images/airplane.png";
import EclipsePink1 from "../../assets/images/eclipsePink1.png"
import BgEspec from "../../assets/images/bg-especialidades.png"
import IconEsq from "../../assets/images/icon-arrowDown.png"
import IconDir from "../../assets/images/icon-arrowDown2.png"
import { Button, Image } from "@chakra-ui/react";
import "./styles.css"
import Doctors from "../../components/Doctors/Doctors";
import Health from "../../components/Health/Health";

function Landing() {
    return (
        <div className="landing-global">
            <Navbar />

            {/* INTRODUÇÃO */}

            <div className="landing-information">
                <div className="information-container">
                    <div className="eclipseBlue1" />
                    <Image src={Girl} alt="Menina na landing-page" w={"90%"} />
                    <p className="introducion">A <span class="destaque">MedCenter</span> é uma clínica especializada no cuidado materno-infantil com especialistas focados em cuidar da saúde das crianças em todos os seus aspectos: alimentação, comportamento, doenças e, sobretudo, prevenção.</p>
                </div>

                <Image src={Airplane} pos={"relative"} top={"17px"} right={"80px"} />
                <Image src={EclipsePink1}
                    pos={"absolute"}
                    left={"93px"}
                    top={"396px"}
                    zIndex={"-1"}
                    overflow={"hidden"} />
            </div>

            {/* ESPECIALIDADES */}


            <div className="landing-especialidads">
                <div className="heading-espec">
                    <h2 className="especialidades">Especialidades</h2>
                    <div className="linhaEspec"></div>
                </div>

                <div className="card-global">
                    <Image src={BgEspec} pos={"absolute"} />

                    <Image src={IconEsq} />
                    <div className="cardEspec">
                        <div className="linhaCardEspec"></div>
                        <h1 className="h1cardEspec">Psicologia Infantil</h1>
                        <p className="pCardEspec">Ramo da ciência que trata das questões psíquicas de crianças. Assim, essa especialidade investiga e analisa o comportamento dessa faixa etária. O estudo inclui questões de cognição, de perceção, de aflições emocionais, das condições sociais e até mesmo físicas.</p>
                    </div>
                    <Image src={IconDir} />
                </div>
            </div>

            {/* NOSSOS MÉDICOS */}

            <div className="landing-doctors-global">
                <div className="heading-health">
                    <h1 className="h1-doctors">Nossos Médicos</h1>
                    <div className="linhaDoctors"></div>
                </div>

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
            </div>

            {/* PLANOS DE SAÚDE */}
            <div className="landing-health-global">
                <div className="heading-health">
                    <h2 className="healths">Planos de Saúde</h2>
                    <div className="linhaHealth"></div>
                </div>

                <div className="carousel-health-global">
                    <div className="carousel-health">
                        <Image src={IconEsq} />
                        <Health />
                        <Image src={IconDir} />
                    </div>
                </div>

                <div className="button-health-global">
                    <button className="button-health">Contratar</button>
                </div>
            </div>

            <footer className="landing-footer">
                <p>@ 2023 MedCenter. Todos os Direitos Reservados</p>
            </footer>
        </div>

    )
}

export default Landing;