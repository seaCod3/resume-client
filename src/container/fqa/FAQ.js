import React from 'react';
import { accordionOtpions } from '../../constants/static-texts';
import './accordion.css';
import { i18n } from '../../translate/i18n';


const FAQ = () => {

  return (
    <div className={`container  `} >
      <h2 className={`sections-title text-center`} >{i18n.t("questions.title")}</h2>
      <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {accordionOtpions[0].question}
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {accordionOtpions[0].answer}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {accordionOtpions[1].question}
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {accordionOtpions[1].answer}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              {accordionOtpions[2].question}
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {accordionOtpions[2].answer}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              {accordionOtpions[3].question}
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {accordionOtpions[3].answer}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading5">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
              {accordionOtpions[4].question}
            </button>
          </h2>
          <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {accordionOtpions[4].answer}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading6">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
              {accordionOtpions[5].question}
            </button>
          </h2>
          <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {accordionOtpions[5].answer}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FAQ;