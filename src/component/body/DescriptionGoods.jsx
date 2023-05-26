import React from 'react';
import { motion } from "framer-motion"
import '../../style/descriptionPage.scss'

const DescriptionGoods = () => {


    const animation={
        hidden: {
            y:100,
            opacity: 0,
        },
        visible:custom =>({
            y:0,
            opacity: 1,
            transition:{ 
                delay: custom * 0.2,
                duration: 0.5
            },
        })
    }
    const animationImg={
        hidden: {
            x:-50,
            opacity: 0,
        },
        visible:custom =>({
            x:0,
            opacity: 1,
            transition:{ 
                delay: custom * 0.2,
                duration: 0.5
            },
        })
    }
    const animationImg2={
        hidden: {
            x:+50,
            opacity: 0,
        },
        visible:custom =>({
            x:0,
            opacity: 1,
            transition:{ 
                delay: custom * 0.2,
                duration: 0.5
            },
        })
    }


    return (
        <div
            
            className='description'
         >
            <title>
                <h2>FreoMode</h2>
            </title>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.3}}
            className='goods_item first_block'>
                <div className='goods_tittle'>
                <motion.h3
                    custom={4}
                    variants={animation}
                    
                >
                    You are all set. Freo a clean day.
                </motion.h3>
                <motion.p
                custom={6}
                variants={animation}
                >The brand-new versatile cleaning robot
                    innovated by Narwal.</motion.p>
                </div>
                <motion.img
                custom={2}
                variants={animationImg}
                src="./img/descript/1_e1aa879b-bf30-47a3-be0e-2f9f0ea1159e_2400x.webp" alt="" />
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.3}}
            className='goods_item second_block '>
                <div className='goods_tittle'>
                <motion.h3
                custom={4}
                variants={animation}
                >Self Detect Self Clean</motion.h3>
                <motion.p
                 custom={6}
                 variants={animation}
                 className='p_block_two'
                 >Freo intelligently detects how dirty the mops are and sanitizes them in a high-speed spinning, using the exact amount of water mixed with the scientifically designated ratio of Narwal's exclusive formulated floor cleaner. </motion.p>
                </div>
                <motion.img
                custom={2}
                variants={animationImg2} 
                src="./img/descript/2_d1979953-d687-4b52-82db-0e001fcd12c2_2400x.webp" alt="" />
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.3}}
             className='goods_item third_block '>
                <div className='goods_tittle'>
                <motion.h3
                custom={3}
                variants={animation}
                >
                    Spontaneous Cleaning Logic</motion.h3>
                <motion.p
                custom={5}
                variants={animation}
                 className='p_block_two'>The latest DirtSense* technology allows Freo to sense "how dirty your room is", and then determine "clean one more time or not" until Freo rinses the ground thoroughly.</motion.p>
                </div>
                <motion.img
                    custom={2}
                    variants={animationImg} 
                        src="./img/descript/3_f3da15bc-6a56-44e5-a324-677e53dad667_2400x.webp" alt="" />
            </motion.div>
            <a href="#"><button >Buy now</button></a>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.3}}
             className='goods_item fourth_block '>
                <div className='goods_tittle pos_absolute mod'>
                    <div className='block_left'>
                    <motion.h3
                     custom={3}
                     variants={animation}
                     className=''>Flooring Identification</motion.h3>
                    <motion.p 
                    custom={5}
                    variants={animation}
                    className='p_block_two'>The latest DirtSense* technology allows Freo to sense "how dirty your room is", and then determine "clean one more time or not" until Freo rinses the ground thoroughly.</motion.p>
                    </div>
                    <div className='block_right'>
                    <motion.h3
                    custom={8}
                    variants={animation}
                        >7N wood flooring </motion.h3>
                    </div>
                </div>
                <motion.img 
                src="./img/descript/4_8e21be93-8b49-4754-a3b5-ac286ef7cb01_2400x.webp" alt="" />
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.3}}
            className='goods_item fifth_block '>
                <div className='goods_tittle pos_absolute mod '>
                        <div className='block_left'>
                        <motion.h3
                        custom={3}
                        variants={animation}
                        className=''>Flooring Identification</motion.h3>
                        <motion.p
                        custom={5}
                        variants={animation}
                        className='p_block_two'>The latest DirtSense* technology allows Freo to sense "how dirty your room is", and then determine "clean one more time or not" until Freo rinses the ground thoroughly.</motion.p>
                        </div>
                        <div className='block_right'>
                        <motion.h3 
                        custom={8}
                        variants={animation}
                        >12N tile flooring</motion.h3>
                        </div>
                    </div>
                    <motion.img 
                     src="./img/descript/5_632d24ee-055f-4b9a-bfea-d4a87f829eae_2400x.webp" alt="" />
                </motion.div>
            <div className='goods_item video_block '>
                <h3>Freo vs. Other Robot</h3>
                <video 
                // controls 
                loop 
                muted
                autoPlay>
                <source src="./video/vs.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='goods_item specifications'>
                <h3 className=''>Specifications</h3>
                <div className='specifications_tabl'>
                    <div className='tabl_item'>
                        <h4>Robot</h4>
                        <ul>
                            <li>Dimensions: 350 (W) *351.5 (L) *106 (H) mm</li>
                            <li>Color: White</li>
                            <li>Weight: Approx. 4.35kg</li>
                            <li>Battery: ≥5200mAh</li>
                            <li>Rated voltage: 14.4V</li>
                            <li>Rated power: 45W</li>
                        </ul>
                    </div>
                    <div className='tabl_item'>
                        <h4>Base station</h4>
                        <ul>
                            <li>Dimensions: 370 (W) *415(L) *435(H) mm</li>
                            <li>Color: White</li>
                            <li>Weight: Approx. 8.75kg</li>
                            <li>Rated input: 100-240V~</li>
                            <li>Rated output: 20V 3.0A</li>
                            <li>Rated frequency: 50/60Hz</li>
                            <li>Rated power: 72W</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='goods_item fifth_block specifications '>
                <h3 className='pos_absolute'>What's in the Box</h3>
                <img src="./img/descript/0915-_-PC_1920x.webp" alt="" />
            </div>
            <a href="#"><button >Buy now</button></a>

        </div>
    );
};

export default DescriptionGoods;