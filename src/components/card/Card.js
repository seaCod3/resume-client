import React from 'react';
import './card.css';
import logo from './logo.png';


const Card = ({ icon, title, content }) => {

    return (

        <div className={`card card-container`}>

            <div className="card-body">
                <div className={`d-flex flex-row justify-content-start align-items-center custom-card-header`}>
                    <div className={`image-container d-flex justify-content-center align-items-center`} >
                        {/* <img className={`imageSize`} alt='icon' src={logo} /> */}
                        {icon}
                    </div>
                    <h5 className="custom-card-title">{title}</h5>
                </div>
                <div>
                    <p className={`text-start w-100 paragraph`} >
                        {content}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Card;