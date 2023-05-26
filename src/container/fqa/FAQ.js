import React from 'react';
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
              {i18n.t("questions.title1")}
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {i18n.t("questions.content1")}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {i18n.t("questions.title2")}
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {i18n.t("questions.content2")}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              {i18n.t("questions.title3")}
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {i18n.t("questions.content3")}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              {i18n.t("questions.title4")}
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {i18n.t("questions.content4")}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading5">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
              {i18n.t("questions.title5")}
            </button>
          </h2>
          <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {i18n.t("questions.content5")}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading6">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
              {i18n.t("questions.title6")}
            </button>
          </h2>
          <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {i18n.t("questions.content6")}
            </div>
          </div>
        </div>

        {/*  --------------------- dont delelte the code bellow  -------------------- */}

        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="heading6">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
              {i18n.t("questions.title7")}
            </button>
          </h2>
          <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {i18n.t("questions.content7")}
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default FAQ;