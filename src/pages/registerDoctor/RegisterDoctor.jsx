import NavbarLogin from "../../components/Navbarlogin/NavbarLogin"
import BgCadaster from "../../assets/images/bg-cadaster-patient.svg"
import BgCadasterDesk from "../../assets/images/bg-cadaster-patient-desk.svg"
import ButtonReturn from "../../assets/images/button-return.svg"
import LoginPopUp from "../../components/LoginPopUp/LoginPopUp";
import { Button, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css"

function RegisterDoctor() {
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
    const navigate = useNavigate();
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

    return (
        <div className="register-doctor-global">
            <NavbarLogin />

            {isLoginPopupOpen &&
                <LoginPopUp
                    setIsPopupOpen={setIsLoginPopupOpen}
                />}

            <div className="eclipseBlue-register-doctor"></div>

            {isSmallerThanMd ? (
                <Image src={BgCadaster} pos={"absolute"} alt="" />
            ) : (
                <Image src={BgCadasterDesk} zIndex={1} top={"215px"} pos={"absolute"} alt="" />
            )}
            <Image src={ButtonReturn} pos={"relative"} zIndex={"1"} className="button-return-doctor" />

            <div className="register-doctor-cards">
                <div className="card-bg-register-doctor"></div>

                {/* MOBILE */}

                <div className="card-main-register-doctor-mobile">
                    <div className="input-group" >
                        <label className="label-cadaster-doctor" for="username">Nome Completo</label>
                        <input type="text" placeholder="Mayra Gabrielly Batista Silva"
                            className="input-cadaster-doctor"></input>
                    </div>

                    <div className="input-group">
                        <label className="label-cadaster-doctor" for="email">Email</label>
                        <input type="email"
                            placeholder="MayraGabi@gmail.com"
                            className="input-cadaster-doctor"></input>
                    </div>

                    <div className="input-agrupament-doctor">
                        <div className="input-group" >
                            <label className="label-cadaster-doctor" for="crm">CRM</label>
                            <input type="text" id="crm" placeholder="CRM/CE 123456" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group" >
                            <label className="label-cadaster-doctor" for="telefone">Telefone</label>
                            <input type="tel" id="telefone" placeholder="(00) 0000-00000" className="input-cadaster-doctor"></input>
                        </div>
                    </div>

                    <div className="input-agrupament-doctor">
                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="rg">RG</label>
                            <input type="text" id="rg" placeholder="000-000-000.00" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group" >
                            <label className="label-cadaster-doctor" for="cpf">CPF</label>
                            <input type="text" id="cpf" placeholder="000-000-000.00" className="input-cadaster-doctor"></input>
                        </div>
                    </div>

                    <div className="input-agrupament-doctor" >
                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="cep">CEP</label>
                            <input type="text" id="cep" placeholder="63650-000" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="estado">Estado</label>
                            <select type="text" id="estado" className="input-cadaster-doctor">
                                <option value="">Acre</option>
                                <option value="">Alagoas</option>
                                <option value="">Amapá</option>
                                <option value="">Amazonas</option>
                                <option value="">Bahia</option>
                                <option value="">Ceará</option>
                                <option value="">Distrito Federal</option>
                                <option value="">Espírito Santo</option>
                                <option value="">Goiás</option>
                                <option value="">Maranhão</option>
                                <option value="">Mato Grosso</option>
                                <option value="">Mato Grosso do Sul</option>
                                <option value="">Minas Gerais</option>
                                <option value="">Pará</option>
                                <option value="">Paraíba</option>
                                <option value="">Paraná</option>
                                <option value="">Pernambuco</option>
                                <option value="">Piauí</option>
                                <option value="">Rio de Janeiro</option>
                                <option value="">Rio Grande do Norte</option>
                                <option value="">Rio Grande do Sul</option>
                                <option value="">Rondônia</option>
                                <option value="">Roraima</option>
                                <option value="">Santa Catarina</option>
                                <option value="">São Paulo</option>
                                <option value="">Sergipe</option>
                                <option value="">Tocantins</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="cidade">Cidade</label>
                            <input type="text" id="cidade" placeholder="Acopiara" className="input-cadaster-doctor"></input>
                        </div>
                    </div>

                    <div className="input-agrupament-doctor">
                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="bairro">Bairro</label>
                            <input type="text" id="bairro" placeholder="xxxxxxxxx" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group" >
                            <label className="label-cadaster-doctor" for="rua">Rua</label>
                            <input type="text" id="rua" placeholder="Acopiara" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="numero">N°</label>
                            <input type="number" id="numero" placeholder="89" className="input-cadaster-doctor"></input>
                        </div>
                    </div>

                    <div className="input-agrupament-doctor">
                        <div className="input-doctor">
                            <label className="label-cadaster-doctor" for="especializacao">Especialização</label>
                            <input type="text" id="especializacao" placeholder="xxxxxxxxx" className="input-cadaster-doctor" />
                        </div>

                        <Button
                            leftIcon={<CheckCircleIcon />}
                            onClick={() => setIsLoginPopupOpen(true)}
                            sx={{
                                width: "195px",
                                height: "34px",
                                background: "white",
                                border: "0.5px solid #578BB7",
                                borderRadius: "14px",
                                fontSize: "14px",
                                lineHeight: "19px",
                                fontWeight: "400",
                                color: "#568BB8",
                                margin: "23px 0 0",
                            }}>salvar</Button>
                    </div>
                </div>

                {/* DESKTOP */}

                <div className="card-main-register-doctor-desk">
                    <div className="input-group" >
                        <label className="label-cadaster-doctor" for="username">Nome Completo</label>
                        <input type="text" placeholder="Mayra Gabrielly Batista Silva"
                            className="input-cadaster-doctor"></input>
                    </div>

                    <div className="input-agrupament-doctor">
                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="email">Email</label>
                            <input type="email"
                                placeholder="MayraGabi@gmail.com"
                                className="input-cadaster-doctor"></input>
                        </div>


                        <div className="input-group" >
                            <label className="label-cadaster-doctor" for="telefone">Telefone</label>
                            <input type="tel" id="telefone" placeholder="(00) 0000-00000" className="input-cadaster-doctor"></input>
                        </div>
                    </div>

                    <div className="input-agrupament-doctor">
                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="rg">RG</label>
                            <input type="text" id="rg" placeholder="000-000-000.00" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group" >
                            <label className="label-cadaster-doctor" for="cpf">CPF</label>
                            <input type="text" id="cpf" placeholder="000-000-000.00" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group" >
                            <label className="label-cadaster-doctor" for="crm">CRM</label>
                            <input type="text" id="crm" placeholder="CRM/CE 123456" className="input-cadaster-doctor"></input>
                        </div>
                    </div>

                    <div className="input-agrupament-doctor" >
                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="cep">CEP</label>
                            <input type="text" id="cep" placeholder="63650-000" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="estado">Estado</label>
                            <select type="text" id="estado" className="input-cadaster-doctor">
                                <option value="">Acre</option>
                                <option value="">Alagoas</option>
                                <option value="">Amapá</option>
                                <option value="">Amazonas</option>
                                <option value="">Bahia</option>
                                <option value="">Ceará</option>
                                <option value="">Distrito Federal</option>
                                <option value="">Espírito Santo</option>
                                <option value="">Goiás</option>
                                <option value="">Maranhão</option>
                                <option value="">Mato Grosso</option>
                                <option value="">Mato Grosso do Sul</option>
                                <option value="">Minas Gerais</option>
                                <option value="">Pará</option>
                                <option value="">Paraíba</option>
                                <option value="">Paraná</option>
                                <option value="">Pernambuco</option>
                                <option value="">Piauí</option>
                                <option value="">Rio de Janeiro</option>
                                <option value="">Rio Grande do Norte</option>
                                <option value="">Rio Grande do Sul</option>
                                <option value="">Rondônia</option>
                                <option value="">Roraima</option>
                                <option value="">Santa Catarina</option>
                                <option value="">São Paulo</option>
                                <option value="">Sergipe</option>
                                <option value="">Tocantins</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="cidade">Cidade</label>
                            <input type="text" id="cidade" placeholder="Acopiara" className="input-cadaster-doctor"></input>
                        </div>
                    </div>

                    <div className="input-agrupament-doctor">
                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="bairro">Bairro</label>
                            <input type="text" id="bairro" placeholder="xxxxxxxxx" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group" >
                            <label className="label-cadaster-doctor" for="rua">Rua</label>
                            <input type="text" id="rua" placeholder="Acopiara" className="input-cadaster-doctor"></input>
                        </div>

                        <div className="input-group">
                            <label className="label-cadaster-doctor" for="numero">N°</label>
                            <input type="number" id="numero" placeholder="89" className="input-cadaster-doctor"></input>
                        </div>
                    </div>

                    <div className="input-agrupament-doctor">
                        <div className="input-doctor">
                            <label className="label-cadaster-doctor" for="especializacao">Especialização</label>
                            <input type="text" id="especializacao" placeholder="xxxxxxxxx" className="input-cadaster-doctor" />
                        </div>

                        <Button
                            leftIcon={<CheckCircleIcon />}
                            onClick={() => setIsLoginPopupOpen(true)}
                            css={{
                                "@media screen and (min-width: 768px)": {
                                    width: "145px",
                                    height: "41px",
                                    background: "white",
                                    border: "0.5px solid #578BB7",
                                    borderRadius: "25px",
                                    fontSize: "17px",
                                    lineHeight: "19px",
                                    fontWeight: "400",
                                    color: "#568BB8",
                                    margin: "23px 0 0",
                                },
                                "@media screen and (min-width: 1024px)": {
                                    width: "266px",
                                    height: "49px",
                                    fontSize: "18px",
                                },

                                "@media screen and (min-width: 1336px)": {
                                    width: "280px",
                                    height: "67px",
                                    fontSize: "25px",
                                },
                            }}>salvar</Button>
                    </div>
                </div>

            </div>
            <div className="eclipsePink-register-doctor"></div>
        </div>
    )
}

export default RegisterDoctor;