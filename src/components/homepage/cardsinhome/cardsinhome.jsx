import React, { useState } from 'react'
import './cardsinhome.css'
// import "./upcategory.css"
import Send from '../../../pages/categorypage/Popup/Send'
// import ViewDetails from './ViewDetails'
import { useNavigate } from 'react-router-dom'


function Cardsinhome() {
    const [payment, setPayment] = useState(false)
    const band = () => setPayment(false)
    const Mymodel = () => {
        setPayment(true);
    }

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/ViewDetails');
    };

    // const navigate1 = useNavigate();
    // const handleRedirect1 = () => {
    // navigate1('/Searcher');
    // };

    return (
        <>
            <div>
                <h1 className='cardsinhome-head'>Recently Viewed</h1>
            </div>
            <div className="cardsinhome-main">
                <div className="doubleCard-inhome">
                    {/* <div className="full0"> */}
                    {/*  */}
                    <div className="construction">
                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
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
                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
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
                <div className="doubleCard-inhome">
                    {/* <div className="full0"> */}
                    {/*  */}
                    <div className="construction">
                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
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
                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
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
        </>
    )
}

export default Cardsinhome;