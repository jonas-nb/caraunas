import React from 'react'
import ImageSlide from './ImageSlide'
import LinkInfoSlide from './LinkInfoSlide'
import TituloInfoSlider from './TituloInfoSlider'

const InfoSlider = () => {
    return (
        <div className="bg-[#1989ac] rounded-b-md text-[#bee9e8] flex flex-col items-center ">
            <div>
                <TituloInfoSlider />
            </div>
            <div>
                <LinkInfoSlide />
            </div>
            <div>
                <ImageSlide />
            </div>
        </div>
    )
}

export default InfoSlider
