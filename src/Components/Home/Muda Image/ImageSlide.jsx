import { useState, useEffect } from 'react'
import '../ImageSlider.css' // Arquivo de estilos CSS
import img1 from '../../Home/assets/Imagens_Slide/01.jpg'
import img2 from '../../Home/assets/Imagens_Slide/02.jpg'
import img3 from '../../Home/assets/Imagens_Slide/03.jpg'
import img4 from '../../Home/assets/Imagens_Slide/04.jpeg'
import img5 from '../../Home/assets/Imagens_Slide/05.jpeg'
import img6 from '../../Home/assets/Imagens_Slide/06.jpg'

const ImageSlide = () => {
    const [currentImage, setCurrentImage] = useState(0)

    const images = [img1, img2, img3, img4, img5, img6]

    // Alterna para a próxima imagem a cada 3 segundos
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [currentImage, images.length])

    return (
        <div className="mb-10 image-slider-container border-4 border-[#fff8d3] w-80 drop-shadow">
            {images.map((image, index) => (
                <div
                    key={image}
                    className={`image-slide ${
                        index === currentImage ? 'active' : ''
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
        </div>
    )
}

export default ImageSlide
