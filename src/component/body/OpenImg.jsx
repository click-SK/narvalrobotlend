import React, {useState, useEffect}  from 'react';

const OpenImg = ({currentImg}) => {

    


    return (
        <div className='modal' style={{position: 'absolute'}}>
            <img src={currentImg} alt="" style={{height: '100px'}}/>
        </div>
    );
};

export default OpenImg;