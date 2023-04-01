import React from 'react';
import './cardStyles.css';
import image from './redSuit.jpg';


const Card = ({ props }) => {

    return (

        <div style={props} className={`card card-container`}>

            <div className="card-body">
                <div className={`d-flex flex-row justify-content-start align-items-center custom-card-header`}>
                    <div style={{ marginRight: '8px', width: '72px', height: '72px' }}>
                        <img className={`imageSize`} alt='icon' src={image} />
                    </div>
                    <h5 className="card-title">Header</h5>
                </div>
                <div>
                    <p className="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
            </div>
        </div>
    )
}

export default Card;