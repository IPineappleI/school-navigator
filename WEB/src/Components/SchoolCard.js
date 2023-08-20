import React from "react";
import "./SchoolCard.css"
import graduated from "../Assets/graduated.png"
import medal from "../Assets/medal.png"
import nocorruption from "../Assets/no-corruption.png"
import ratingIcon from "../Assets/rating.png"
import {Link} from "react-router-dom";

const SchoolCard = ({schoolData}) => {
    return <Link to={"/schools/" + schoolData.id} style={{textDecoration: "none", color: "black"}}>
        <div className="container">
            <div className="school-image">
                <img src={schoolData.imageURL} alt="schoolImage"/>
            </div>
            <div className="schoolLabelText">
                {schoolData.name}
                <div className="schoolAdress">
                    {schoolData.address}
                </div>
                <div className="ratesInfo">
                    <ul>
                        <img src={ratingIcon} alt="rating"/>
                        {
                            schoolData.rating ? schoolData.rating : "-"
                        }
                    </ul>
                    <ul>
                        <img src={graduated} alt="graduated"/>
                        {schoolData.enrollees}
                    </ul>
                    <ul>
                        <img src={medal} alt="medal"/>
                        {schoolData.olympiadWinnersAndAwardees}
                    </ul>
                    <ul>
                        <img src={nocorruption} alt="nocorruption"/>
                        {schoolData.budgetEnrollees}
                    </ul>
                </div>
            </div>
        </div>
    </Link>
}

export default SchoolCard;