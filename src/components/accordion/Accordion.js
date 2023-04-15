import React from 'react';
import './accordion.css';
import Accordion from 'react-bootstrap/Accordion';


const Accordionc = ({ title, content, index }) => {

    let data_bs_target = "#collapse";
    let aria_controls = "collapse";
    let targetId = `collapse${index}`;
    let accordionHeaderId = "heading";

    let showClass = index === 0 ? "show" : "";

    return (

        // <div className="accordion" id="accordionExample">
        //     <div className="accordion-item">
        //         <h2 className="accordion-header" id={`${accordionHeaderId}${index}`} >
        //             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`${data_bs_target}${index}`} aria-expanded={index == 0 ? "true" : "false"} aria-controls={`${targetId}`}>
        //                 {title}
        //             </button>
        //         </h2>
        //         <div id={`${targetId}`} className={`accordion-collapse collapse ${showClass}`} aria-labelledby={`${accordionHeaderId}${index}`} data-bs-parent="#accordionExample">
        //             <div className="accordion-body">
        //                 <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Accordion defaultActiveKey="0" flush >
            <Accordion.Item eventKey={index === 0 ? "0" : index}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {content}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}

export default Accordionc;