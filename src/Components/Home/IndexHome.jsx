import React from 'react'
import Contato from './Contato'
import Destaque from './Destaque'
import Diferenciais from './Diferenciais'
import Hero from './Hero'
import InfoSlider from './Muda Image/InfoSlider'

const IndexHome = () => {
    return (
        <div>
            <Hero />
            <InfoSlider />
            <Diferenciais />
            <Destaque />
            <Contato />
        </div>
    )
}

export default IndexHome
