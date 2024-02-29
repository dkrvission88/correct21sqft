import React from 'react'
import './contactform.css'

const Contactform = () => {
    return (
        <div>
            <div className='contactform-main'>
                <p className='cf-p1'>Get in touch with us</p>
                <div className='contactform-inner'>
                    <div id='cf-inner'>
                        <div className='cf-inner-two'>
                            <input className='my-r' placeholder='Name'></input>
                            <input className='my-r-resp' placeholder='Phone no.'></input>
                        </div>
                        <div className='cf-inner-two'>
                            <input className='cf-mail' placeholder='Email'></input>
                        </div>
                        <div className='cf-inner-two'>
                            <textarea className="cf-message" name="text" cols="30" rows="3"
                                placeholder="message"></textarea>
                        </div>
                        <button className='contact-form-btn'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactform;
