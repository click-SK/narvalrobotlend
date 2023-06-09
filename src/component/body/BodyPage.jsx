import React, {useState, useEffect}  from 'react';
import ImgGoodsBanner from './ImgGoodsBanner';
import DescriptionGoods from './DescriptionGoods';
import Reviews from './Reviews';
import OpenImg from './OpenImg';
import '../../style/bodyPage.scss'

const BodyPage = () => {

    const [currentImg, setCurrentImg] = useState('./img/ban/1narwalt10-narwal-robot-113000_1200x1200.webp')
    const [isOpen, setIsOpen] = useState(false)
   
    const imgArr = [
        './img/ban/1narwalt10-narwal-robot-113000_1200x1200.webp',
        './img/ban/2narwalt10-narwal-robot-951644_1200x1200.webp',
        './img/ban/3narwalt10-narwal-robot-369086_1200x1200.webp',
        './img/ban/4narwalt10-narwal-robot-140190_1200x1200.webp',
        './img/ban/5narwalt10-narwal-robot-627269_1200x1200.webp',
    ]

    return (
        <div className='body_wrap'>
            {/* {isOpen &&
            <OpenImg
            currentImg={currentImg}
            />} */}
            <div className='head_goods'>
            <div className='body_wrap_item block_sell'>
                <title>
                    <h2 className='title_first'>Birthday Sale</h2>
                <p>Our shop is 5 years old! In honor of this, we have prepared a gift. Wee have prepared 50 vacuum cleaners for the price of only 2E! One person can only buy one vacuum cleaner.</p>
                <a href="#" className='left'>More</a>
                {/* <div className='logo' style={{height: '50px', margin: "10px 0"}}>
                    <img src="./img/Narwal_logo_6184fd7a-f19a-4c3f-889c-20a94e4326b0_130x.webp" alt=""  />
                </div> */}
                </title>
                {/* <img src=".\img\block_sell.png" alt="" /> */}
                
            </div>
            <div className='body_wrap_item block_buy'>
                <div className='banner_wrap'>
                    <ImgGoodsBanner
                    imgArr = {imgArr}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    currentImg = {currentImg}
                    setCurrentImg = {setCurrentImg}
                    />
                    <ul className='descript'>
                                <li><img src="./img/ico/DirtSense.webp" alt="" /><p>DirtSense</p></li>
                                <li><img src="./img/ico/AutoFeed.webp" alt="" /><p>Auto Feed*</p></li>
                                <li><img src="./img/ico/Mop Self Cleaning.png" alt="" /><p>Mop Self Cleaning</p></li>
                                <li><img src="./img/ico/Mop Self Cleaning.webp" alt="" /><p>Super Low Noise</p></li>
                                <li><img src="./img/ico/LCD Touch Display.webp" alt="" /><p>LCD Touch Display</p></li>
                                <li><img src="./img/ico/Child Lock.webp" alt="" /><p>Child Lock</p></li>
                    </ul>
                </div>
                <div className='title_price_wrap'>
                    <h1>Narwal Freo Versatile Self Mop Clean Robot with DirtSense*</h1>
                    <div className='reviews_wrap'>
                        <div className='star'>
                            <img src="./img/ico/star.svg" alt="" />
                            <img src="./img/ico/star.svg" alt="" />
                            <img src="./img/ico/star.svg" alt="" />
                            <img src="./img/ico/star.svg" alt="" />
                            <img src="./img/ico/star.svg" alt="" />
                        </div>
                        <div className='reviews'> 125 reviews </div>
                        <div className='ask'>
                            <img src="./img/ico/ask.svg" alt="" />
                            <p>9 questions</p></div>
                    </div>
                    <div className='price_wrap'>
                        <div className='price_title'>Vacuum & Mop Integration. Mop Lifting. Freo Mode.</div>
                        <div className='price price_old'>$5,000.00</div>
                        <div className='price price_new'>$1,299.00</div>
                    </div>
                    <div className='pay_deliv'>
                            <div className='pay'>
                                <img src="./img/master.svg" alt="" />
                                <img src="./img/visa.svg" alt="" />
                            </div>
                            <ul className='delivery'>
                                <li><img src="./img/ico/deliv.webp" alt="" /><p>Free logistics delivery</p></li>
                                <li><img src="./img/ico/return.webp" alt="" /><p>30 day return guarantee</p></li>
                                <li><img src="./img/ico/help.webp" alt="" /><p>Free logistics delivery</p></li>
                            </ul>
                    </div>
                    <a href="#"><button >Buy now</button></a>
                </div>    
            </div>

            </div>
            <DescriptionGoods/>
            <Reviews/>
        </div>
    );
};

export default BodyPage;