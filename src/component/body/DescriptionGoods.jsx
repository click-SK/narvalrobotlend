import React from 'react';
import '../../style/descriptionPage.scss'

const DescriptionGoods = () => {
    return (
        <div className='description'>
            <title>
                <h2>FreoMode</h2>
            </title>
            <div className='goods_item first_block'>
                <div className='goods_tittle'>
                <h3>You are all set. Freo a clean day.</h3>
                <p>The brand-new versatile cleaning robot
                    innovated by Narwal.</p>
                </div>
                <img src="./img/descript/1_e1aa879b-bf30-47a3-be0e-2f9f0ea1159e_2400x.webp" alt="" />
            </div>
            <div className='goods_item second_block '>
                <div className='goods_tittle'>
                <h3>Self Detect Self Clean</h3>
                <p className='p_block_two'>Freo intelligently detects how dirty the mops are and sanitizes them in a high-speed spinning, using the exact amount of water mixed with the scientifically designated ratio of Narwal's exclusive formulated floor cleaner. </p>
                </div>
                <img src="./img/descript/2_d1979953-d687-4b52-82db-0e001fcd12c2_2400x.webp" alt="" />
            </div>
            <div className='goods_item third_block '>
                <div className='goods_tittle'>
                <h3>Spontaneous Cleaning Logic</h3>
                <p className='p_block_two'>The latest DirtSense* technology allows Freo to sense "how dirty your room is", and then determine "clean one more time or not" until Freo rinses the ground thoroughly.</p>
                </div>
                <img src="./img/descript/3_f3da15bc-6a56-44e5-a324-677e53dad667_2400x.webp" alt="" />
            </div>
            <div className='goods_item fourth_block '>
                <div className='goods_tittle'>
                <h3 className='pos_absolute'>7N wood flooring</h3>
                <p className='p_block_two'>The latest DirtSense* technology allows Freo to sense "how dirty your room is", and then determine "clean one more time or not" until Freo rinses the ground thoroughly.</p>
                </div>
                <img src="./img/descript/4_8e21be93-8b49-4754-a3b5-ac286ef7cb01_2400x.webp" alt="" />
            </div>
            <div className='goods_item fifth_block '>
                <div className='goods_tittle'>
                <h3 className='pos_absolute'>12N tile flooring</h3>
                <p className='p_block_two'>The latest DirtSense* technology allows Freo to sense "how dirty your room is", and then determine "clean one more time or not" until Freo rinses the ground thoroughly.</p>
                </div>
                <img src="./img/descript/5_632d24ee-055f-4b9a-bfea-d4a87f829eae_2400x.webp" alt="" />
            </div>
        </div>
    );
};

export default DescriptionGoods;