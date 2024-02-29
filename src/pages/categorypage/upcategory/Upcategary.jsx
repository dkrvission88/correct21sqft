import React, { useState } from 'react'

import "./upcategory.css"

import Send from '../../../pages/categorypage/Popup/Send'
// import ViewDetails from './ViewDetails'


import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/homepage/Navbar/navbar'
import Footer from '../../../components/homepage/footer/footer'

function Upcategary() {
    const [payment, setPayment] = useState(false)

    const band = () => setPayment(false)
    const Mymodel = () => {

        setPayment(true);

    }

    const navigate = useNavigate();

    const handleRedirect = () => {
        // Redirect logic here
        navigate('/ViewDetails'); // Use the navigate function from useNavigate
    };

    const navigate1 = useNavigate();

    const handleRedirect1 = () => {
        // Redirect logic here
        navigate1('/Searcher'); // Use the navigate function from useNavigate
    };




    return (
        <>
         {/* <img className='imghead' src='/image/category.png' alt="Description" /> */}
            <Navbar />
            <div className="main">
                <div className="imgc">
                <img className='imghead' src='/image/category.png' alt="Description" />
                </div>
                <div className="bannert">
                    <h2>Categories</h2>
                    <p>Home-Categories</p>
                </div>
                <div className="onimage">
                    <button type='submit' className='btn01'><p>Location <p className='mm01'>Ex Noida</p></p> </button>
                    <button type='submit' className='btn1'>Services<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn1'>Budget<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' onClick={handleRedirect1} className='btn2' ><span class="material-symbols-outlined">
                        search
                    </span>Search</button>

                    {/*  */}

                </div>
                <div className="doubleCard">
                    {/* <div className="full0"> */}

                    {/*  */}
                    <div className="construction">
                        <div className="mm00">
                            <div className="mm002"></div>
                            <span className='upper005'>Construction</span>
                        </div>
                        <div className="cont10">
                            <div className="photo">
                                <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                            </div>
                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Shubham Construction Co. for your for your next Construction project</p>

                                <div className='t30'>$100 to $200 per square foot</div>
                                <div className="loca0">
                                    <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span>

                                </div>
                                <div className="uright10">
                                    <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button>
                                    <button type='submit' onClick={handleRedirect} className='numbtn0'>View Details</button>
                                    <i className="fa-regular fa-heart"></i>
                                    {payment && <Send band={band} />}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}

                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">
                        <div className="mm00">
                            <div className="mm002"></div>
                            <span className='upper005'>Construction</span>
                        </div>
                        <div className="cont10">
                            <div className="photo">

                                <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                            </div>
                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Shubham Construction Co. for your for your next Construction project</p>
                                <div className='t30'>$100 to $200 per square foot</div>
                                <div className="loca0">
                                    <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span>

                                </div>
                                <div className="uright10">
                                    <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button>
                                    <button type='submit' onClick={handleRedirect} className='numbtn0'>View Details</button>
                                    <i className="fa-regular fa-heart"></i>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --------------------------second double------------------------------------------------------------------------ */}

                <div className="doubleCard">
                    {/* <div className="full0"> */}

                    {/*  */}
                    <div className="construction">
                        <div className="mm00">
                            <div className="mm002"></div>
                            <span className='upper005'>Construction</span>
                        </div>
                        <div className="cont10">
                            <div className="photo">
                                <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                            </div>
                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Shubham Construction Co. for your for your next Construction project</p>
                                <div className='t30'>$100 to $200 per square foot</div>
                                <div className="loca0">
                                    <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span>
                                </div>
                                <div className="uright10">
                                    <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button>
                                    <button type='submit' onClick={handleRedirect} className='numbtn0'>View Details</button>
                                    <i className="fa-regular fa-heart"></i>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}
                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">

                        <div className="mm00">
                            <div className="mm002"></div>
                            <span className='upper005'>Construction</span>
                        </div>
                        <div className="cont10">
                            <div className="photo">
                                <img className='img10' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                            </div>
                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Shubham Construction Co. for your for your next Construction project</p>
                                <div className='t30'>$100 to $200 per square foot</div>
                                <div className="loca0">
                                    <span><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</span>

                                </div>
                                <div className="uright10">
                                    <button type='submit' onClick={Mymodel} className='numbtn'> Send Enquiry</button>
                                    <button type='submit' onClick={handleRedirect} className='numbtn0'>View Details</button>
                                    <i className="fa-regular fa-heart"></i>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Upcategary;