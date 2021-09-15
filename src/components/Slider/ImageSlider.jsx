import React, {useState} from 'react'
import { SliderData } from './ImageData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../../assets/styles/Slider.css'

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0);
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if (!Array.isArray(slides) || slides.length <=0) {
   return null; 
}

    return (
        <>
            <div className="container-fluid px-0 col-lg-12">
                <section className="slider conteiner-fluid px-0">
                    <FaArrowAltCircleLeft  className="left-arrow" onClick={prevSlide}/>
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img src={slide.image} alt ="factory" className="image"/>)}
                            </div>
                        )
                    })}
                <div className="overideBlock">
                    <p className="overTitle"> Produtos direto da Fábrica! </p>
                    <p className="description-one"> Somos especialistas em gôndolas, porta pallets, racks, roupeiras, estantes, e mais diversos outros itens para organizar o armazenamento de produtos. </p>
                    <p className="description-two"> Solicite seu orçamento agora e monte sua loja com quem <br />entende de aço ! </p>
                    <button className="budget"> Quero Fazer um orçamento </button>
                </div>
                </section>
            </div>
        </>
    )
}

export default ImageSlider
