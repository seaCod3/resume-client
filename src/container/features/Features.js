import React from 'react';
import { features } from '../../constants/static-texts';
import Card from '../../components/card/Card';

const Features = () => {
  return (
    <div className={`container text-center mt-3`} >
      <div className={`row justify-content-center`} >
        {
          features.map((feature, index) => (
            <div className={`col-sm-12 col-md-6 col-lg-4`} key={feature.id}>
              <Card {...feature} />
            </div>
          ))
        }
      </div>

      <p>Features</p>

    </div>
  )
}

export default Features;