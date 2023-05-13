import React from 'react';
import { features } from '../../constants/static-texts';
import Card from '../../components/card/Card';

const Features = () => {
  return (
    <div className={`container text-center`} >

      <h2 className={`sections-title`} >Features</h2>

      <div className={`row justify-content-center`} >
        {
          features?.map((feature, index) => (
            <div className={`col-sm-12 col-md-6 col-lg-4`} key={feature.id}>
              <Card {...feature} />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Features;