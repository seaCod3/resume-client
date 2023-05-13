import React from 'react'
import Accordionc from '../../components/accordion/Accordion';
import { accordionOtpions } from '../../constants/static-texts';


const FAQ = () => {
  return (
    <div className={`container  `} >
      <h2 className={`sections-title text-center`} >Questions?</h2>
      {
        accordionOtpions?.map((accordion, index) => {
          return (
            <Accordionc key={index} {...accordion} index={index} />
          )
        })
      }
    </div>
  )
}

export default FAQ