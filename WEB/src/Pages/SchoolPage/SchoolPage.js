import React, {useEffect, useState} from "react";
import "./SchoolPage.css"
import {Link, useParams} from "react-router-dom";
import rating from "../../Assets/rating.png"
import mathClass from "../../Assets/math-class.png"
import itClass from "../../Assets/it-class.png"
import engClass from "../../Assets/engineering-class.png"
import bussinessClass from "../../Assets/bussiness-class.png"
import graduated from "./../../Assets/graduated.png"
import medal from "./../../Assets/medal.png"
import nocorruption from "./../../Assets/no-corruption.png"
import location from "./../../Assets/location.png"
import website from "./../../Assets/website.png"
import Axios from "axios";
import arrow from "./../../Assets/arrow.png"

const SchoolPage = () => {

    const params = useParams();

    const [school, setSchool] = useState([]);

    const [expanded, setEnpanded] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:5225/Schools/byId?id=${params.schoolId}`)
            .then(
                (res) => {
                    setSchool(res?.data)
                })
    }, []);

    console.log(school.math_winners)

    return <div className="school-container">
        <div className="top">
            <Link to="/schools">
                <img src={arrow} alt="arrow" style={{color: "white"}}></img>
            </Link>
            <div className="title">
                <h1 className="main-title">{school.name}</h1>
            </div>
        </div>
        <div className="body">
            <div className="left-side">
                <div className="school-image">
                    <img
                        src={school.imageURL}
                        alt="school-image"
                    />
                </div>
                <div className="location-info">
                    <div className="location-icon">
                        <img src={location} alt="location"/>
                        <a href={`https://yandex.ru/maps/?text=${school.address}`} target="_blank">
                            {school.address}
                        </a>
                    </div>
                    <div className="location-icon">
                        <img src={website} alt="website"/>
                        <a href={`https://${school.website}`} target="_blank">
                            {school.website}
                        </a>
                    </div>
                </div>
            </div>
            <div className="school-info">
                {
                    (school.mathClass || school.itClass || school.engineeringClass || school.businessClass) &&
                    <div className="school-profiles">
                        Профили обучения (10-11 класс)
                        <div className="classes-icons">
                            {
                                school.mathClass && <div className="icon" style={{backgroundColor: "#00ced1"}}>
                                    <img src={mathClass} alt="math-class" style={{height: 100, width: 100}}/>
                                    <div className="text">
                                        Мат. класс
                                    </div>
                                </div>
                            }
                            {
                                school.itClass && <div className="icon" style={{backgroundColor: "#a4a0ff"}}>
                                    <img src={itClass} alt="math-class" style={{height: 100, width: 100}}/>
                                    <div className="text">
                                        ИТ класс
                                    </div>
                                </div>
                            }
                            {
                                school.engineeringClass && <div className="icon" style={{backgroundColor: "#fae847"}}>
                                    <img src={engClass} alt="math-class" style={{height: 100, width: 100}}/>
                                    <div className="text">
                                        Инженерный класс
                                    </div>
                                </div>
                            }
                            {
                                school.businessClass && <div className="icon" style={{backgroundColor: "#e38126"}}>
                                    <img src={bussinessClass} alt="math-class" style={{height: 100, width: 100}}/>
                                    <div className="text">
                                        Бизнес класс
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <div className="students-info">
                    {
                        school.rating && <ul>
                            <img src={rating} alt="graduated"/>
                            <div className="info">
                                ТОП-{school.rating}
                            </div>
                            школа Москвы по результатам образовательной деятельности
                        </ul>
                    }
                    <ul>
                        <img src={graduated} alt="graduated"/>
                        <div className="info">
                            {school.enrollees}
                        </div>
                        абитуриент(-ов)
                    </ul>
                    <ul>
                        <img src={medal} alt="graduated"/>
                        <div className="info">
                            {school.olympiadWinnersAndAwardees}
                        </div>
                        олимпиадник(-ов) всероссийского уровня
                        <div className="button" onClick={() => setEnpanded(!expanded)}>
                            {expanded ? "Свернуть" : "Подробнее"}
                        </div>
                    </ul>
                    {
                        expanded && (
                            <div className="olymp-info">
                                Среди них:
                                <ul className="list">
                                    {
                                        school.mathWinners > 0 &&
                                        <li>
                                            <div className="text">
                                                Победителей всероссийской олимпиады школьников по математике
                                            </div>
                                            <div className="winners-number">
                                                {school.mathWinners}
                                            </div>
                                        </li>
                                    }
                                    {
                                        school.mathAwardees > 0 &&
                                        <li>
                                            <div className="text">
                                                Призеров всероссийской олимпиады школьников по математике
                                            </div>
                                            <div className="winners-number">
                                                {school.mathAwardees}
                                            </div>
                                        </li>
                                    }
                                    {
                                        school.csWinners > 0 &&
                                        <li>
                                            <div className="text">
                                                Победителей всероссийской олимпиады школьников по информатике
                                            </div>
                                            <div className="winners-number">
                                                {school.csWinners}
                                            </div>
                                        </li>
                                    }
                                    {
                                        school.csAwardees > 0 &&
                                        <li>
                                            <div className="text">
                                                Призеров всероссийской олимпиады школьников по информатике
                                            </div>
                                            <div className="winners-number">
                                                {school.csAwardees}
                                            </div>
                                        </li>
                                    }
                                    {
                                        (school.economicsWinners > 0) &&
                                        <li>
                                            <div className="text">
                                                Победителей всероссийской олимпиады школьников по экономике
                                            </div>
                                            <div className="winners-number">
                                                {school.economicsWinners}
                                            </div>
                                        </li>
                                    }
                                    {
                                        school.economicsAwardees > 0 &&
                                        <li>
                                            <div className="text">
                                                Призеров всероссийской олимпиады школьников по экономике

                                            </div>
                                            <div className="winners-number">
                                                {school.economicsAwardees}
                                            </div>
                                        </li>
                                    }
                                    {
                                        school.physicsWinners > 0 &&
                                        <li>
                                            <div className="text">
                                                Победителей всероссийской олимпиады школьников по физике
                                            </div>
                                            <div className="winners-number">
                                                {school.physicsWinners}
                                            </div>
                                        </li>
                                    }
                                    {
                                        school.physicsAwardees > 0 &&
                                        <li>
                                            <div className="text">
                                                Призеров всероссийской олимпиады школьников по физике
                                            </div>
                                            <div className="winners-number">
                                                {school.physicsAwardees}
                                            </div>
                                        </li>
                                    }
                                </ul>
                            </div>
                        )
                    }
                    <ul>
                        <img src={nocorruption} alt="graduated"/>
                        <div className="info">
                            {school.budgetEnrollees}
                        </div>
                        бюджетник(-ов)
                    </ul>
                </div>
            </div>
        </div>
        <div className="bottom"/>
    </div>
}

export default SchoolPage;