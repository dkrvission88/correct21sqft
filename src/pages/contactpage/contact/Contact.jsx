import React from 'react'
import './contact.css'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Navbar from '../../../components/homepage/Navbar/navbar';
import Footer from '../../../components/homepage/footer/footer';

function Contact() {
    return (
        <>
            <Navbar />
            <div className='contanierl5'>
                <div className="imageboxl5">
                    <img src='/image/img.jpg' alt='' ></img>
                    {/* <img src='https://s3-alpha-sig.figma.com/img/a4b2/ccfb/cf77bd4714bb2e280d6cc58ecebb846f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NOtjxxrebLWbg0jEgfYlGQxZkChnIj~4lCY6EZ7K5TwvqNQHkgVx4A5RRXWXtYC4cgVqtxiglQ8z9~UdjsKGfx5u5toujGIAWhEmRUsdUx24ekXtXR2PJ5JMIEv0Qz3sL0t6EquXQzhgWohvZFHL0mTnpL735~GkmfGLZW-Ebc9wyUY-Cmhnz6jbuatP6BLEYH2it71geFZVVKzB~2QsI-ALKe9j83S6KT0JtBVpGzLP~8dxhWI~D9AAJyrZDPdk5X88nxvLWG52GK0zKa3GMXgBC5qK3SoVotURc5wRh3JPVLm~7mvBl9Qh2oMIypBHqL-uqG2va4wkWjxsw0tslw__' alt=''></img> */}
                    <div className="contentText">
                        <h1>Contact Us<span>.</span></h1>
                    </div>
                </div>
                <div className='container1l5'>

                    <div className='infol5'>

                        <img src='image/div.jpg' alt='img' />

                        <div className='prol5'>
                            <div className='name5l'>
                                <input type="text" placeholder='Name' />
                            </div>


                            <div className='Emaill5'>
                                <input type="email" placeholder='Email' />
                            </div>
                        </div>


                        <div className='pro1l5'>
                            <div className='name'>
                                <input type="number" placeholder='Phone no' />
                            </div>

                            <div className='emaill5'><input type="text" placeholder='Service Ex Cement Supplier' />
                            </div>
                        </div>


                        <div className='pro1l5'>
                            <textarea type="text" placeholder='Your Message' rows={5} />
                        </div>
                        <div className='btndivl5'>

                            <button type='submit'>Send</button>
                        </div>
                    </div>
                    <div className='info1l5'>

                        <img src='image/div.jpg' alt='img' />

                        <div className='Al5'>
                            <p>  Our dedicated team is ready to provide you with the support and information you require.
                                Your inquiries are important to us, and we look forward to hearing from you.</p>
                            <p id='ppp'> Let's connect and make your real estate and construction journey exceptional!</p>
                        </div>

                        <div className='iconl5'>

                            <div className='calll5'>
                                <IoMdCall />
                                <div className='havel5'>Have any question?
                                    <div className='hl5'>
                                        9877503362
                                    </div>

                                </div>

                            </div>

                            <div className='gmaill5'>
                                <MdEmail />
                                <div className='have1l5'>
                                    Write email<div className='h1l5'>
                                        info@21sqft.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact