import React from 'react';
import Card from '../../components/card/Card';

const Features = () => {
  return (
    <div className={`container text-center `} >
      <div className={`row justify-content-center `} >

        <div className={`col-sm-12 col-md-6 col-lg-4 m-2`} ><Card /></div>
        <div className={`col-sm-12 col-md-6 col-lg-4 m-2`} ><Card /></div>
        <div className={`col-sm-12 col-md-6 col-lg-4 m-2`} ><Card /></div>

      </div>

      <p>Features</p>

    </div>
  )
}

export default Features;