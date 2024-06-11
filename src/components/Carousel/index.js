import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import { slideInfo } from 'constant'



const CarouselAus = () => (
  <UncontrolledCarousel style={{ height: '100vh' }}
    items={slideInfo}
  />
)

export default CarouselAus