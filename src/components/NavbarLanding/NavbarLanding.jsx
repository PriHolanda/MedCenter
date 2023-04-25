import { Flex, Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg"
import IconMenu from "../../assets/images/icon-menu.svg"
import IconLogin from "../../assets/images/icon-login.svg"
import "./styles.css"
import { useNavigate } from "react-router-dom";

function NavbarLanding() {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");
    const navigate = useNavigate();

    return (
        <div className="navbar-global">
            <nav className="navbar-container">
                <Image src={Logo} alt="Imagem da Logo" className="img-logo" />


                {/* MENU DE HOME */}

                {isSmallerThanMd ? (

                    <Menu>
                        <Flex flexDir="column" alignItems="center" justifyContent="center">
                            <Flex alignItems="center">
                                <MenuButton
                                    color={'#5B89AD'}
                                    fontWeight={"800"}
                                    fontSize={"15px"}
                                    lineHeight={"20px"}
                                    textShadow={"0px 2px 4px #FFFFFF"}>Home</MenuButton>
                                <Image src={IconMenu} alt='Icone de Menu' className="img-icon-menu" />
                            </Flex>

                            <div className="linha"></div>
                        </Flex>

                        <MenuList minW={"153px"} bg={"linear-gradient(180deg, rgba(214, 168, 241, 0.8) 0%, rgba(214, 168, 241, 0) 100%)"} border={"none"}>
                            <MenuItem
                                justifyContent="center"
                                bg={"linear-gradient(180deg, rgba(214, 168, 241, 0.8) 0%, rgba(214, 168, 241, 0) 100%)"}
                                as='a'
                                href='#card-global'>Especialidades</MenuItem>

                            <MenuItem
                                justifyContent="center"
                                bg={"transparent"}
                                as='a'
                                href='#landing-doctors-global'>Nossos Médicos</MenuItem>

                            <MenuItem
                                justifyContent="center"
                                bg={"transparent"}
                                as='a'
                                href="#landing-health-global">Planos de Saúde</MenuItem>

                        </MenuList>
                    </Menu>

                ) : (

                    <div className="navbar-list">
                        <ul className="navbar-item">
                            <li className="item">
                                <a href="">Home</a>
                            </li>
                            <li className="item">
                                <a href="#landing-especialidads">Especialidades</a>
                            </li>
                            <li className="item">
                                <a href="#landing-doctors-global">Nossos Médicos</a>
                            </li>
                            <li className="item">
                                <a href="#landing-health-global">Plano de Saúde</a>
                            </li>
                        </ul>
                    </div>

                )}

                {/* MENU DE LOGIN */}

                <Menu>
                    <Flex alignItems="center" >
                        <MenuButton
                            className="menu-nav-login"
                            color={'#5B89AD'}
                            fontWeight={"800"}
                            lineHeight={"20px"}
                            textShadow={"0px 2px 4px #FFFFFF"}>Login</MenuButton>
                        <Image src={IconLogin} alt='Icone de Login' className="img-icon-login" />
                    </Flex>

                    <MenuList minW={"110px"} bg={"linear-gradient(180deg, rgba(214, 168, 241, 0.8) 0%, rgba(214, 168, 241, 0) 100%)"} border={"none"}>
                        <MenuItem
                            justifyContent="center"
                            bg={"linear-gradient(180deg, rgba(214, 168, 241, 0.8) 0%, rgba(214, 168, 241, 0) 100%)"}
                            as='a'
                            href='#'
                            onClick={() => navigate('/login-pacient')}
                            >Acess/Paciente</MenuItem>

                        <MenuItem
                            justifyContent="center"
                            bg={"transparent"}
                            as='a' href='#'
                            onClick={() => navigate('/login-medico')}>Acess/Médico</MenuItem>

                        <MenuItem
                            justifyContent="center"
                            bg={"transparent"}
                            as='a'
                            href='#'
                            onClick={() => navigate('/login-medico')}
                            >Acess/Adm</MenuItem>

                    </MenuList>
                </Menu>
            </nav>
        </div >


    )
}

export default NavbarLanding;