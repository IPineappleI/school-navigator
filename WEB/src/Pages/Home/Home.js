import React, {useEffect, useState} from "react";
import "./Home.css"
import SchoolCard from "../../Components/SchoolCard";
import Axios from "axios";
import magnifier from "../../Assets/magnifier.png"
import menus from "../../Assets/menus.png"
import mathClass from "../../Assets/math-class.png"
import itClass from "../../Assets/it-class.png"
import engClass from "../../Assets/engineering-class.png"
import bussinessClass from "../../Assets/bussiness-class.png"

const Home = () => {

    const [schools, setSchools] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [sortByRating, setSortByRating] = useState(true);
    const [sortByStudents, setSortByStudents] = useState(false);
    const [sortByOlympiads, setSortByOlympiads] = useState(false);
    const [sortByBudgetEnrollees, setSortByBudgetEnrollees] = useState(false);

    const [isMathTagged, setIsMathTagged] = useState(false);
    const [isITTagged, setIsITTagged] = useState(false);
    const [isEnginTagged, setIsEnginTagged] = useState(false);
    const [isBusinessTagged, setIsBusinessTagged] = useState(false);

    const [expended, setExpended] = useState(false);

    const filteredData = schools.filter(school => {
        const schoolClasses = {
            math: school.mathClass,
            it: school.itClass,
            engineering: school.engineeringClass,
            business: school.businessClass
        }
        const selectedClasses = {
            math: isMathTagged,
            it: isITTagged,
            engineering: isEnginTagged,
            business: isBusinessTagged
        }
        return (
            school.name.toLowerCase().replace(/\s/g, '')
                .includes(searchText.toLowerCase().replace(/\s/g, ''))
            && Object.keys(schoolClasses).every(className =>
                !selectedClasses[className] || schoolClasses[className])
        )
    }).sort((a, b) => {
        if (sortByRating) {
            if (a.rating === null) {
                return 1;
            }
            if (b.rating === null) {
                return -1;
            }
            return a.rating - b.rating;
        }
        if (sortByStudents) {
            return b.enrollees - a.enrollees;
        }
        if (sortByOlympiads) {
            return b.olympiadWinnersAndAwardees - a.olympiadWinnersAndAwardees;
        }
        if (sortByBudgetEnrollees) {
            return b.budgetEnrollees - a.budgetEnrollees;
        }
    })

    useEffect(() => {
        if (sortByRating) {
            setSortByStudents(false);
            setSortByBudgetEnrollees(false);
            setSortByOlympiads(false);
        }
    }, [sortByRating]);

    useEffect(() => {
        if (sortByStudents) {
            setSortByRating(false);
            setSortByOlympiads(false);
            setSortByBudgetEnrollees(false);
        }
    }, [sortByStudents]);

    useEffect(() => {
        if (sortByOlympiads) {
            setSortByRating(false);
            setSortByBudgetEnrollees(false);
            setSortByStudents(false);
        }
    }, [sortByOlympiads]);

    useEffect(() => {
        if (sortByBudgetEnrollees) {
            setSortByRating(false);
            setSortByStudents(false);
            setSortByOlympiads(false);
        }
    }, [sortByBudgetEnrollees])

    useEffect(() => {
        Axios.get("http://localhost:5225/Schools")
            .then(
                (res) => {
                    setSchools(res?.data)
                })
    }, []);

    return <div className="home-container">
        <div className="top">
            <h1 className="main-title">Навигатор школ</h1>
        </div>
        <div className="body">
            <div className="search-bar">
                <div className="search">
                    <img src={magnifier} alt="magnifier" style={{width: 25, height: 25}}/>
                    <input
                        type="text"
                        placeholder="Поиск"
                        style={{fontSize: 17}}
                        onChange={(e) => setSearchText(e.currentTarget.value)}
                        value={searchText}
                    />
                </div>
                <div className="button" onClick={() => setExpended(!expended)}>
                    <button>
                        <img
                            src={menus}
                            alt="menus"
                            style={{width: 30, height: 30}}/>
                    </button>
                </div>
            </div>

            {
                expended && (
                    <>
                        <div className="tags-info">
                            <div className="tags" style={{listStyleType: "none"}}>
                                <li onClick={() => setIsMathTagged(!isMathTagged)}
                                    style={{backgroundColor: "#00ced1", opacity: isMathTagged ? 1 : 0.6}}
                                >
                                    <img
                                        src={mathClass}
                                        alt="mathClass"
                                        style={{width: 25, height: 25}}/>
                                    Мат. класс
                                </li>
                                <li onClick={() => setIsITTagged(!isITTagged)}
                                    style={{backgroundColor: "#a4a0ff", opacity: isITTagged ? 1 : 0.6}}>
                                    <img
                                        src={itClass}
                                        alt="itClass"
                                        style={{width: 25, height: 25}}/>
                                    ИТ класс
                                </li>
                                <li onClick={() => setIsEnginTagged(!isEnginTagged)}
                                    style={{backgroundColor: "#fae847", opacity: isEnginTagged ? 1 : 0.6}}>
                                    <img
                                        src={engClass}
                                        alt="engClass"
                                        style={{width: 25, height: 25}}/>
                                    Инженерный класс
                                </li>
                                <li onClick={() => setIsBusinessTagged(!isBusinessTagged)}
                                    style={{backgroundColor: "#e38126", opacity: isBusinessTagged ? 1 : 0.6}}>
                                    <img
                                        src={bussinessClass}
                                        alt="bussinessClass"
                                        style={{width: 25, height: 25}}/>
                                    Предпринимательский класс
                                </li>
                            </div>
                        </div>

                        <div className="sorts-info">
                            Сортировать по:
                            <div className="sorts" style={{listStyleType: "none"}}>
                                <li onClick={() => setSortByRating(!sortByRating)}
                                    style={{backgroundColor: "#fef1c6", opacity: sortByRating ? 1 : 0.6}}
                                >
                                    <img
                                        src={require("../../Assets/rating.png")}
                                        alt="mathClass"
                                        style={{width: 25, height: 25}}/>
                                    Рейтингу
                                </li>
                                <li onClick={() => setSortByStudents(!sortByStudents)}
                                    style={{backgroundColor: "#97c6f1", opacity: sortByStudents ? 1 : 0.6}}>
                                    <img
                                        src={require("../../Assets/graduated.png")}
                                        alt="itClass"
                                        style={{width: 25, height: 25}}/>
                                    Абитуриентам
                                </li>
                                <li onClick={() => setSortByOlympiads(!sortByOlympiads)}
                                    style={{backgroundColor: "#99f2b4", opacity: sortByOlympiads ? 1 : 0.6}}>
                                    <img
                                        src={require("../../Assets/medal.png")}
                                        alt="engClass"
                                        style={{width: 25, height: 25}}/>
                                    Олимпиадникам
                                </li>
                                <li onClick={() => setSortByBudgetEnrollees(!sortByBudgetEnrollees)}
                                    style={{backgroundColor: "#e0e0e0", opacity: sortByBudgetEnrollees ? 1 : 0.6}}>
                                    <img
                                        src={require("../../Assets/no-corruption.png")}
                                        alt="bussinessClass"
                                        style={{width: 25, height: 25}}/>
                                    Бюджетникам
                                </li>
                            </div>
                        </div>
                    </>
                )
            }

            <div className="data">
                {filteredData.map(function (data) {
                    return <SchoolCard schoolData={data}/>
                })}
            </div>
        </div>
        <div className="bottom"/>
    </div>
}

export default Home;