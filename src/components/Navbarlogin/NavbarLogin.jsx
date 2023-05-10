import { Image } from "@chakra-ui/react";
import Logo from "../../assets/images/logo.svg"
import IconLogin from "../../assets/images/icon-login.svg"
import { useNavigate } from "react-router-dom";
import "./styles.css"

function NavbarLogin() {
    const navigate = useNavigate();
    
    return (
        <div className="navbar-global-login">
            <nav className="navbar-container">
                <Image src={Logo} alt="Imagem da Logo" className="img-logo" />

                <div className="button-out-global">
                    <div className="button-out" >
                        <a className="h1-button-out" href=""
                        onClick={() => navigate('/')} >Sair</a>
                        <Image src={IconLogin} alt='Icone de Login' className="img-icon-login" />

                    </div>
                    <div className="linha-out"></div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarLogin;