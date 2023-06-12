import { Flex, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import NavbarLogin from "../../components/Navbarlogin/NavbarLogin";
import IconPeople from "../../assets/images/icon-people.png";
import IconLock from "../../assets/images/cadeado.png";
import BgLogin from "../../assets/images/bg-login.svg";
import BgLoginDesk from "../../assets/images/bg-login-desk.svg";
import BabyLogin from "../../assets/images/baby-login.svg";
import "./styles.css"
import { useNavigate } from "react-router-dom";


function LoginPatient() {
    const navigate = useNavigate();
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

    return (
        <div className="login-patient-global">
            <NavbarLogin />

            <div className="eclipseBlue-patient-login"></div>

            {isSmallerThanMd ? (
                <Image src={BgLogin} alt="Imagem de fundo login-pacientes" pos={"absolute"} />
            ) : (
                <Image src={BgLoginDesk} alt="Imagem de fundo desktop login-pacientes" pos={"absolute"} />
            )}

            <div className="login-patient-cards">
                <div className="card-bg"></div>
                <div className="card-main">
                    <div className="heading-welcome">
                        <div className="welcome-bg">WELCOME!</div>
                        <div className="welcome-main">WELCOME!</div>
                    </div>

                    <Flex justifyContent={"center"} gap={"23px"} alignItems={"center"} flexDirection={"column"}>
                        <InputGroup >
                            <InputLeftElement
                                pointerEvents="none"
                                children={<img className="img-icons" src={IconPeople} alt="Icone de usuario" />} />
                            <Input
                                width={"245px"}
                                h={"45px"}
                                css={{
                                    "@media screen and (min-width: 768px)": {
                                        width: "325px",
                                        height: "49px",
                                    },
                                    "@media screen and (min-width: 1024px)": {
                                        width: "443px",
                                        height: "61px",
                                        borderRadius: "30px",
                                        fontSize: "20px",
                                    },

                                    "@media screen and (min-width: 1336px)": {
                                        width: "500px",
                                        height: "68px",
                                        fontSize: "22px",
                                    },
                                }}
                                bg={"#FFFFFF"}
                                color={"rgba(92, 138, 174, 0.68)"}
                                boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                                borderRadius={"17px"}
                                placeholder="Name or CPF"
                                _placeholder={{ color: 'inherit' }}
                            />
                        </InputGroup>

                        <InputGroup >
                            <InputLeftElement
                                pointerEvents="none"
                                children={<img className="img-icons" src={IconLock} alt="Icone de Senha" />} />
                            <Input
                                width={"245px"}
                                h={"45px"}
                                type="password"
                                bg={"#FFFFFF"}
                                color={"rgba(92, 138, 174, 0.68)"}
                                boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                                borderRadius={"17px"}
                                placeholder="Password"
                                _placeholder={{ color: 'inherit' }}
                                css={{
                                    "@media screen and (min-width: 768px)": {
                                        width: "325px",
                                        height: "49px",
                                    },
                                    "@media screen and (min-width: 1024px)": {
                                        width: "443px",
                                        height: "61px",
                                        borderRadius: "30px",
                                        fontSize: "20px",
                                    },

                                    "@media screen and (min-width: 1336px)": {
                                        width: "500px",
                                        height: "68px",
                                        fontSize: "22px",
                                    },
                                }}
                            />
                        </InputGroup>

                        <button className="button-login-patient" onClick={() => navigate('/patient')}>Entrar</button>
                    </Flex>


                    <a className="recover-password-patient" href="">Forgot password?</a>
                    <p className="registration-patient">Not have an account yet?
                        <a className="sing-up-patient"
                        onClick={() => navigate('/register-pacient')}> Sing-up</a></p>
                </div>
            </div>

            <Image
                src={BabyLogin}
                className="img-baby-login"
            />
            <div className="eclipsePink-patient-login"></div>
        </div>
    )
}

export default LoginPatient;