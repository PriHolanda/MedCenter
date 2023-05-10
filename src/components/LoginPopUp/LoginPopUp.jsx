import "./styles.css"
import AlertRegister from "../../assets/images/alert-register.svg"

function LoginPopUp() {

    return (
        <div className="alert-global">
            <div className="alert-container">
                <div className="alert-card">
                    <div className="linha-card-register"></div>
                    <img src={AlertRegister} alt="" />
                    <h1 className="h1-card-register">Aguarde o email de confirmação e defina sua senha.</h1>
                </div>
            </div>
        </div>
    )
}

export default LoginPopUp