import { Flex, Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg"
import IconMenu from "../../assets/images/icon-menu.svg"
import IconLogin from "../../assets/images/icon-login.svg"
import "./styles.css"

function NavbarLogin() {
    return (
        <div className="navbar-global-login">
            <nav className="navbar-container">
                <Image src={Logo} alt="Imagem da Logo" className="img-logo" />
                
                {/* MENU DE LOGIN */}

                <Menu>
                    <Flex alignItems="center" >
                        <MenuButton 
                        className="oie"
                        color={'#5B89AD'}
                        fontWeight={"800"}
                        lineHeight={"20px"}
                        textShadow={"0px 2px 4px #FFFFFF"}>Sair</MenuButton>
                        <Image src={IconLogin} alt='Icone de Login' className="img-icon-login" />
                    </Flex>
                </Menu>
            </nav>
        </div>
    )
}

export default NavbarLogin;