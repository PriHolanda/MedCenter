import { Flex, Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.png"
import IconMenu from "../../assets/images/icon-menu.png"
import IconLogin from "../../assets/images/icon-login.png"
import "./styles.css"

function NavbarLanding() {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

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
                                href='#'>Especialidades</MenuItem>

                            <MenuItem
                                justifyContent="center"
                                bg={"transparent"}
                                as='a'
                                href='#'>Nossos Médicos</MenuItem>

                            <MenuItem
                                justifyContent="center"
                                bg={"transparent"}
                                as='a'
                                href='#'>Planos de Saúde</MenuItem>

                        </MenuList>
                    </Menu>

                ) : (

                    <div className="navbar-list">
                        <ul className="navbar-item">
                            <li className="item">Home
                                <a href=""></a>
                            </li>
                            <li className="item">Especialidades
                                <a href="especialidades"></a>
                            </li>
                            <li className="item">Nossos Médicos
                                <a href=""></a>
                            </li>
                            <li className="item">Planos de Saúde
                                <a href=""></a>
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
                            href='#'>Acess/Paciente</MenuItem>

                        <MenuItem
                            justifyContent="center"
                            bg={"transparent"}
                            as='a' href='#'>Acess/Médico</MenuItem>

                        <MenuItem
                            justifyContent="center"
                            bg={"transparent"}
                            as='a'
                            href='#'>Acess/Adm</MenuItem>

                    </MenuList>
                </Menu>
            </nav>
        </div >


    )
}

export default NavbarLanding;