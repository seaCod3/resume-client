import React from 'react';
import './card.css';
import { i18n } from "../../translate/i18n";

const Card = ({ icon, title, content }) => {

    console.log(content)

    return (

        <div className={`card card-container`}>

            <div className="card-body">
                <div className={`d-flex flex-row justify-content-start align-items-center custom-card-header`}>
                    <div className={`image-container d-flex justify-content-center align-items-center`} >
                        {icon}
                    </div>
                    <h5 className="custom-card-title">{i18n.t(title)}</h5>
                </div>
                <div >
                    <p className={`text-start w-100 card-paragraph`} >
                        {i18n.t(content)}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Card;