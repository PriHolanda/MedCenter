import { Flex, Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg"
import IconMenu from "../../assets/images/icon-menu.svg"
import IconNotifications from "../../assets/images/icon-notifications.svg"
import IconConfigurations from "../../assets/images/icon-configurations.svg"
import IconLogin from "../../assets/images/icon-login.svg"
import User from "../../assets/images/avatar.svg"
import "./styles.css"

function NavbarSistem() {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

    return (
        <div className="navbar-patient-global">
            <nav className="navbar-patient-container">
                <Image src={Logo} alt="Imagem da Logo" className="img-logo" />


                {/* MENU DE HOME */}

                {isSmallerThanMd ? (

                    <Menu>
                        <Flex flexDir="column" alignItems="center" justifyContent="center">
                            <Flex alignItems="center">
                                <MenuButton
                                    color={'#5B89AD'}
                                    fontWeight={"800"}
                                    fontSize={"14px"}
                                    lineHeight={"20px"}
                                    textShadow={"0px 2px 4px #FFFFFF"}>Home</MenuButton>
                                <Image src={IconMenu} alt='Icone de Menu' className="img-icon-menu" />
                            </Flex>

                            <div className="linha-patient-home"></div>
                        </Flex>

                        <MenuList minW={"153px"}
                            bg={" rgba(240, 246, 254, 0.5)"}
                            backdropFilter={"blur(4px)"}
                            border={"none"}
                            boxShadow={"1px 2px 5px #004F94"}>
                            <MenuItem
                                color={"#5B89AD"}
                                fontWeight={800}
                                textShadow={" 0px 2px 4px #FFFFFF"}
                                justifyContent="center"
                                bg={"linear-gradient(180deg, rgba(214, 168, 241, 0.8) 0%, rgba(214, 168, 241, 0) 100%)"}
                                as='a'
                                href=''>Agendamentos</MenuItem>

                            <div className="linha-menu"></div>
                            <MenuItem
                                color={"#5B89AD"}
                                fontWeight={800}
                                textShadow={" 0px 2px 4px #FFFFFF"}
                                justifyContent="center"
                                bg={"transparent"}
                                as='a'
                                href=''>Planos de Saúde</MenuItem>

                            <div className="linha-menu"></div>
                            <MenuItem
                                color={"#5B89AD"}
                                fontWeight={800}
                                textShadow={" 0px 2px 4px #FFFFFF"}
                                justifyContent="center"
                                bg={"transparent"}
                                as='a'
                                href="">Pagamentos</MenuItem>

                        </MenuList>
                    </Menu>

                ) : (

                    <div className="navbar-patient-list">
                        <ul className="navbar-patient-item">
                            <li className="item">
                                <a href="">Home</a>
                            </li>
                            <li className="item">
                                <a href="">Agendamentos</a>
                            </li>
                            <li className="item">
                                <a href="">Planos de Saúde</a>
                            </li>
                            <li className="item">
                                <a href="">Pagamentos</a>
                            </li>
                        </ul>
                    </div>
                )}



                <div className="configurations">
                    <img src={User} className="avatar" />

                    <div className="configurations-container">
                        <Image src={IconNotifications} className="icons-configurations"
                            css={{
                                "@media screen and (min-width: 1024px)": {
                                    width: "24px",
                                },
                                "@media screen and (min-width: 1336px)": {
                                    width: "28px",
                                },
                            }} />
                        <Image src={IconConfigurations} className="icons-configurations" css={{
                            "@media screen and (min-width: 1024px)": {
                                width: "35px",
                            },
                            "@media screen and (min-width: 1336px)": {
                                width: "39px",
                            },
                        }} />
                        <Image src={IconLogin} className="icons-configurations" css={{
                            width: "24px",

                            "@media screen and (min-width: 1024px)": {
                                width: "37px",
                            },
                            "@media screen and (min-width: 1336px)": {
                                width: "41px",
                            },
                        }} />
                    </div>
                </div>
            </nav>
        </div >
    )
}


export default NavbarSistem;