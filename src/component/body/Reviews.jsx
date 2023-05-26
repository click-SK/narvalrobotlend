import React from 'react';
import '../../style/reviews.scss'

const Reviews = () => {
    
    const reviewsArr = [
        {
            img: './av/Ellipse(1).png',
            name: 'Dave Hamburg',
            date: '02/21/2023',
            title: 'This little guy is great',
            text: `I just had LVP installed and a friend showed me how great his Freo was I took the plunge. The floor is not even a week old and look at the dirt it pulls up! That cleaner solution must be magic! The bot is so quiet, but the dogs are watching him so he doesn't go all Skynet!`,
            photo: [
                './img/reviews/1676983226__20230220_204732__original.avif',
                './img/reviews/1676983231__received_507856658207530__original.avif'
            ]
        },
        {
            img: './av/zg.png',
            name: 'KJ',
            date: '12/06/2023',
            title: 'Named her Alice',
            text: `I have two boys at home, a corgi, and an Australian Shepard. I work a lot of 10-12 hour shifts on nights. We literally have tumbleweeds of corgi glitter during shedding season. Alice has been a blessing lol. I can set her to run while I am at work or if while working on other chores when I am at home. I come home and the floors are clean and all I have to do is empty the dirty water, fill the clean water, and empty the dust cup. It saves me hours every week. I love my Freo.`,
            photo: [
                './img/reviews/1670292902__083390ec-16dc-4d91-9353-fdb8e90c530d__original.avif'
            ]
        },
        {
            img: './av/zg.png',
            name: 'E',
            date: '11/16/2023',
            title: 'Thank you Freo',
            text: `I am a 5 kids mom. I mean. real kid. 3 naughty boys and 3 girls... it exauts me every time cleaning.... So we decided to buy a cleaning robot. Freo reaches all I need, It can clean the floor like a human, and clean itself up. Really save my time. We also bought another one now, black friday has the best price. . And the accessories are durable, easy to maintain!`,
            photo: [
                './img/reviews/1668586819__dbc2dd1f-cd9d-4bff-a329-6b05ae16b0e7__original.avif'
            ]
        },
        {
            img: './av/zg.png',
            name: 'C',
            date: '11/16/2023',
            title: 'Fab little robo for hard floors & cats',
            text: `This little thing is perfect for hard floors! I have 2 little ones that leave a mess after every meal. My back was hurting from all the vacuuming and mopping. I bought this and its saved me so much time and back pain. It's worth every penny.`,
            photo: [
                './img/reviews/1668586688__466d6d12-5fc0-4f3f-aaea-53a0af413e01__original.avif'
            ]
        },
        {
            img: './av/Ellipse (3).png',
            name: 'Julian Green',
            date: '11/14/2023',
            title: 'leave my hands-off the floor cleaning',
            text: `Been testing the robot for about a week... so far I have not encountered any problems. it did a better job than I do with the swifter, cleaned the mops with floor cleaner, which has a nice lemon and basil fragrance(I love Basil), detected itself of how many times to mops and emptied the dirty water. What surprised me most is the touchable screen, making me super easy to connect to the internet.... My omni X1 had connecting issues and always lost conncet, drove me crazy..... But Freo didn't have the problem. Strongly recommand`,
            photo: [
                './img/reviews/1668393675__img_2467jpg__original.avif'
            ]
        },
        {
            img: './av/Ellipse (4).png',
            name: 'Simon. Z',
            date: '11/14/2023',
            title: 'Products worth to buy',
            text: `Much easier to use than similar robots on the market. The customer service staff are very professional.`,
            photo: [
                './img/reviews/1668183629__7ceda2b5-0b7c-404c-8d1b-409e902b4979__original.avif'
            ]
        },
        {
            img: './av/zg.png',
            name: 'Customer',
            date: '10/27/2023',
            title: 'Amazing',
            text: `I’ve always wanted a Narwal vacuum and I love it . I have a dog that sheds and I’ve used it everyday since it was delivered. My floors look great and so clean . Best purchase! Highly recommended .`,
            photo: [
                './img/reviews/1666885806__image__original.avif'
            ]
        },
        {
            img: './av/Ellipse.png',
            name: 'jen larson',
            date: '10/22/2023',
            title: 'Sweet and silent!',
            text: `We have had more robot vaccines and mops that you can count on one hand and this is the best by far. Quiet, efficient and attractive- well worth the money if you have hard floors!`,
            photo: [
                './img/reviews/1666477564__image__original.avif'
            ]
        },
       
    ]

    return (
        <div className='reviews_section'>
            <h2>Customer Reviews</h2>
            {reviewsArr.map((item,index) => (
            <div className='reviews_wraper' key={index}>
                <div className='title_rev'>
                    {/* <div className='avatar'>{item.img}</div> */}
                    <img className='avatar' src={item.img} alt="" />
                    <div className='name_wrap'>
                        <div className='rate_wrap'>
                        <div className='star'>
                            <img src="./img/ico/star.svg" alt="" />
                            <img src="./img/ico/star.svg" alt="" />
                            <img src="./img/ico/star.svg" alt="" />
                            <img src="./img/ico/star.svg" alt="" />
                            <img src="./img/ico/star.svg" alt="" />
                        </div>
                        <div className='date'>{item.date}</div>
                        </div>
                        <div className='name'>{item.name}</div>
                    </div>
                    </div>
                    <div className='text'>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                        <div className='img_wrap'>
                            {item.photo.map((url,index) => (
                                <img key={index} src={url} alt="" />
                            ))}
                        </div>
                    </div>
            </div>
            ))}
        </div>
    );
};

export default Reviews;