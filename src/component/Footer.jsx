import React, {useState, useEffect}  from 'react';
import '../style/footer.scss'

const Footer = () => {

    const [submit, setSubmit] = useState('Submit')
    const [activClass, setActivClass] = useState('')

    const hendleChangeButton = () => {
        setSubmit('message sent')
        setActivClass('active')
    }

    return (
        <div className='footer_wrap'>

            <div className='contact_as'>
                <h2>Contact us</h2>
                
                <div className='input_wrap'>
                    <div className='name_email'>
                        <div className='input'>
                            <label htmlFor="name"> <span>*</span>Name</label>
                            <input id='name' type="text" placeholder='Name'/>
                        </div>
                        <div className='input'>
                            <label htmlFor="email"> <span>*</span>Email</label>
                            <input id='email' type="text" placeholder='Email'/>
                        </div>
                    </div>
                    <div className='text_wrap'>
                        <label htmlFor="desc"> <span>*</span>Description</label>
                        <textarea name="" id="desc" cols="30" rows="10" placeholder='Tell us about you problem'></textarea>
                    </div>
                </div>
                <p>Leave your message here and we will reply to you shortly, or contact us directly by email: support@narwal.com</p>
                <button className={activClass} onClick={hendleChangeButton}>{submit}</button>
            </div>
            
            <h2>Policy</h2>
            <div className='link_policy'>
            <a href="./policy/Pre-order Terms and Conditions.docx">Pre-order Terms and Conditions</a>
            <a href="./policy/Return & Refund Policy.docx">Return & Refund Policy</a>
            <a href="./policy/Shipping & Delivery.docx">Shipping & Delivery</a>
            <a href="./policy/Privacy Policy.docx">Privacy Policy</a>
            <a href="./policy/Cookie Policy.docx">Cookie Policy</a>
            <a href="./policy/Billing Terms and Conditions.docx">Billing Terms and Conditions</a>
            <a href="./policy/Warranty Policy.docx">Warranty Policy</a>
            </div>
            
        </div>
    );
};

export default Footer;