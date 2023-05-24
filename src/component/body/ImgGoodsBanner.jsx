import React, {useState, useEffect}  from 'react';
import '../../style/imgSlider.scss'

const ImgGoodsBanner = () => {
    const [currentImg, setCurrentImg] = useState('./img/ban/1narwalt10-narwal-robot-113000_1200x1200.webp')

    const imgArr = [
        './img/ban/1narwalt10-narwal-robot-113000_1200x1200.webp',
        './img/ban/2narwalt10-narwal-robot-951644_1200x1200.webp',
        './img/ban/3narwalt10-narwal-robot-369086_1200x1200.webp',
        './img/ban/4narwalt10-narwal-robot-140190_1200x1200.webp',
        './img/ban/5narwalt10-narwal-robot-627269_1200x1200.webp',
    ]

    
    return (
        <div className='slide_wrap'>
            <div className='main_img'>
                <img src={currentImg} alt="" />
            </div>
            <div className='second_photo'>
                {imgArr.map((imageUrl, index) => (
                    <img
                    className={`${
                        imageUrl === currentImg ? 'img_active' : ''
                      }`}
                    key={index}
                    src={imageUrl}
                    alt="" 
                    onClick={() =>  setCurrentImg(imageUrl) }
                    />
                ))}
            </div>
        </div>
    );
};

export default ImgGoodsBanner;