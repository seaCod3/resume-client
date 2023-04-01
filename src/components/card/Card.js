import React from 'react';
import './cardStyles.css';
import logo from './logo.png';


const Card = ({ props }) => {

    return (

        <div style={props} className={`card card-container`}>

            <div className="card-body">
                <div className={`d-flex flex-row justify-content-start align-items-center custom-card-header`}>
                    <div style={{ marginRight: '10px', width: '72px', height: '72px' }}>
                        <img className={`imageSize`} alt='icon' src={logo} />
                    </div>
                    <h5 className="card-title">Fast and reliable</h5>
                </div>
                <div>
                    <p className={`card-text text-start paragraph`} >Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
            </div>
        </div>
    )
}

export default Card;