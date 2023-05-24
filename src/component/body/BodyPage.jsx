import React from 'react';
import ImgGoodsBanner from './ImgGoodsBanner';
import DescriptionGoods from './DescriptionGoods';
import '../../style/bodyPage.scss'

const BodyPage = () => {
    return (
        <div className='body_wrap'>
            <div className='head_goods'>
            <div className='body_wrap_item block_sell'>
                <title>
                    <h2>Birthday Sale</h2>
                <p>Our shop is 5 years old! In honor of this, we have prepared a gift. Wee have prepared 50 vacuum cleaners for the price of only 2E! One person can only buy one vacuum cleaner.</p>
                <a href="#">More</a>
                <a href="#"><button>Buy Now</button></a>
                </title>
                <img src=".\img\block_sell.png" alt="" />
                
            </div>
            <div className='body_wrap_item block_buy'>
                <div className='banner_wrap'>
                    <ImgGoodsBanner/>
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
                        <div className='price'>$1,299.00</div>
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
                    <a href="https://shop.narwal.com/products/narwal-freo"><button >Buy now</button></a>
                </div>    
            </div>

            </div>
            <DescriptionGoods/>
        </div>
    );
};

export default BodyPage;