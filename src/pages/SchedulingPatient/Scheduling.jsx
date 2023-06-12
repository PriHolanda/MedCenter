import NavbarSistemPatient from "../../components/NavbarSistemPatient/NavbarSistemPatient";
import ButtonReturn from "../../assets/images/button-return.svg"
import WomenSchedule from "../../assets/images/schedule-women.svg"
import IconCalendar1 from "../../assets/images/calendar-icon1.svg"
import IconCalendar2 from "../../assets/images/calendar-icon2.svg"
import Calendar from "../../assets/images/calendar.svg"
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./styles.css"

function Schedule() {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");
    const navigate = useNavigate();

    return (
        <div className="schedule-patient-global">
            <NavbarSistemPatient />

            <div className="eclipseBlue-schedule-patient"></div>

            <img src={ButtonReturn} className="button-return-schedule-patient"
                onClick={() => navigate('/patient')} />

            <div className="schedule-patient-container">
                <img src={WomenSchedule} className="women-schedule" alt="" />

                <div className="schedule-patient-desk">
                    <p className="introducion-schedule-patient"><span className="hello-schedule-patient">Olá!! </span>Agende suas consultas com as melhores datas, horários e profissionais adequados a sua necessidade.</p>

                    {isSmallerThanMd ? (
                        <div className="schedule-patient-information">
                            <div className="schedule-patient-input-agrupament">
                                <div className="schedule-patient-input-group">
                                    <label className="label-schedule-patient" for="area">Área</label>
                                    <select type="text" id="area" className="input-schedule-patient">
                                        <option value="">Neurologista</option>
                                        <option value="">Neurologista</option>
                                        <option value="">Neurologista</option>
                                        <option value="">Neurologista</option></select>
                                </div>

                                <div className="schedule-patient-input-group">
                                    <label className="label-schedule-patient" for="profissional">Profissional</label>
                                    <select type="text" id="profissional" className="input-schedule-patient">
                                        <option value="">Ana Paula</option>
                                        <option value="">Ana Paula</option>
                                        <option value="">Ana Paula</option>
                                        <option value="">Ana Paula</option></select>
                                </div>
                            </div>

                            <div className="schedule-patient-input-agrupament">
                                <div className="schedule-patient-input-group">
                                    <label className="label-schedule-patient" for="hour">Data de Agendamento</label>
                                    <input className="input-date-schedule-patient" type="date" />
                                </div>

                                <div className="schedule-patient-input-group">
                                    <label className="label-schedule-patient" for="hour">Horário</label>
                                    <input type="time" id="hour" className="input-time-schedule-patient" />
                                </div>
                            </div>

                            <div className="schedule-patient-calendar">
                                <div className="calendar-month">
                                    <h1 className="month">Março, 2023</h1>
                                    <img src={IconCalendar1} alt="" />
                                    <img src={IconCalendar2} alt="" />
                                </div>

                                <img src={Calendar} alt="" />
                            </div>
                        </div>

                    ) : (

                        <div className="schedule-patient-information">
                            <div className="schedule-patient-input-agrupament">
                                <div className="schedule-patient-input-group">
                                    <label className="label-schedule-patient" for="area">Área</label>
                                    <select type="text" id="area" className="input-schedule-patient">
                                        <option value="">Neurologista</option>
                                        <option value="">Neurologista</option>
                                        <option value="">Neurologista</option>
                                        <option value="">Neurologista</option></select>
                                </div>

                                <div className="schedule-patient-input-group">
                                    <label className="label-schedule-patient" for="profissional">Profissional</label>
                                    <select type="text" id="profissional" className="input-schedule-patient">
                                        <option value="">Ana Paula</option>
                                        <option value="">Ana Paula</option>
                                        <option value="">Ana Paula</option>
                                        <option value="">Ana Paula</option></select>
                                </div>
                            </div>

                            <div className="schedule-patient-input-container">
                                <div className="schedule-patient-input-agrupament1">
                                    <div className="schedule-patient-input-group">
                                        <label className="label-schedule-patient" for="hour">Data de Agendamento</label>
                                        <input className="input-date-schedule-patient" type="date" />
                                    </div>

                                    <div className="schedule-patient-input-group">
                                        <label className="label-schedule-patient" for="hour">Horários disponiveis</label>
                                        <input type="time" id="hour" className="input-time-schedule-patient" />
                                    </div>
                                </div>

                                <div className="schedule-patient-calendar">
                                    <div className="calendar-month">
                                        <h1 className="month">Março, 2023</h1>
                                        <img src={IconCalendar1} className="icon-calendar" />
                                        <img src={IconCalendar2} className="icon-calendar" />
                                    </div>

                                    <img src={Calendar} className="calendar-img" />
                                </div>

                            </div>
                        </div>
                    )}

                    <div className="button-schedule-patient-container">
                        <button className="button-schedule-patient">Agendar consulta</button>
                    </div>
                </div>
            </div>

            <div className="eclipsePink-schedule-patient"></div>
        </div >
    )

}

export default Schedule;