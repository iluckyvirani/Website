import React from 'react'
import './Index.css'
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

import Box2 from '../page/Box2.js'
import Box from '../page/Box';
import Home from '../page/Home';
import Alloldrecord from '../page/Alloldrecord.js';
import Table1 from '../page/Table1.jsx';
import Table from '../page/Table.jsx';



const Index = () => {
    return (
        <>
            <div className='index'>

                <div className='indexnav'>
                    <div className='indexnav1'>
                        <div className='indexnav2'>
                            <h6>HOME</h6>
                        </div>
                        <div className='indexnav2'>
                            <h6>ABOUT US</h6>
                        </div>
                        <div className='indexnav2'>
                            <h6>CONTACT</h6>
                        </div>
                    </div>

                    <div className='indexnav3'>
                        <p>WEBSITE DESIGNING WEB DEVELOPEMENT DIGITAL MARKETING </p>
                        <h6>WORDPRESS DEMO SITE</h6>
                    </div>
                    <div className='index1'>
                        <div className='index2'>
                            <p>November 18, 2023</p>
                            <h4>RAJU SING RUPAY</h4>
                            <h5>51</h5>
                            <h4>RAJU SING RUPAY</h4>
                            <h5>51</h5>
                        </div>
                    </div>
                </div>


                <div className='index3'>
                    <div className='index4'>
                        <h6>NOTICE BOARD</h6>
                        <h5>अपनी एड लगवाने के लिए संपर्क करे!</h5>
                        <p>SITE SUPERVISER</p>
                        <h5>SARITA</h5>
                        <p>730778xxxx</p>
                        <span style={{ color: '#2a7d01' }}>(Only Whatsapp)</span>
                        <h6>कॉल करने का समय सुबह 10:00 AM से 12:00 PM तक है!</h6>
                        <span>Note: dirgar trhrthrt girgir irthirteibrf ixtf ihgriaj g.</span>
                    </div>
                </div>




                <div className='index5'>
                    <div className='index6'>
                        <h5>DOMAIN NAME</h5>
                        <h6>RAM|RAM|RAM</h6>
                    </div>

                    <div className='index7'>
                        <h6>11 February 2024 09:37 AM</h6>
                        <p>Daily Live Result Today</p>
                        <h4>MUKESH RANA</h4>
                        <span>100</span>
                        <h4>RAVI SINGH CHOHAAN</h4>
                        <span>50</span>
                    </div>
                </div>


               <Box2 />


                {/* <div className="container">
                    <div className="box" id="box11">
                        <h2>MAHAKAL</h2>

                        <p style={{ marginLeft: "1%" }}>03-09-2024,10:20:29PM </p>
                        <h3>HOME</h3>
                    </div>
                    <div className="box" id="box22">
                        <h3 className="boxs2">Today is a sunday</h3>
                        <p>🎆भारत का इतिहास कई सहस्र वर्ष पुराना माना जाता है🎆</p>
                        <p>
                            &#128293; गंगा में तीर्थ के माध्यम से खोजा गया उन सभी के लिए जो जीवन
                            के &#128293;
                        </p>
                        <br />
                        🎆🎆🎆🎆🎆🎆🎆🎆
                        <p>
                            🎆भारत का इतिहास कई सहस्र वर्ष पुराना माना जाता है🎆
                            <br /> गंगा में तीर्थ
                            <br />
                            से खोजा गया उन सभी के लिए जो जीवन के प्यासे हैं माध्यम से खोजा{" "}
                            <br />
                            गंगा में तीर्थ के माध्यम से खोजा <br />
                            4567XXXX
                            <br />
                            22334XXX<br></br>
                        </p>
                    </div>
                    <div className="box" id="box3">
                        <h2 style={{ marginLeft: "3%" }} className="bt2">
                            Link{" "}
                        </h2>
                        <h3 className="boxhome">Link</h3>
                    </div>
                </div> */}

                <Box/>

                <Home/>


           



            




                <div className='index13'>
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">
                                    <div className='index14'>
                                        <h6>RAVI</h6>
                                        <p>(04:00 AM)</p>
                                        <div className='index15'>
                                            <p>&#123;32&#125;</p>
                                            <i><IoMdArrowRoundForward /></i>
                                            <p>[94]</p>
                                        </div>
                                    </div>
                                </th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <div className='index16'>
                                        <h6>MUKESH</h6>
                                        <p>(05:10 AM)</p>
                                        <div className='index17'>
                                            <p>&#123;32&#125;</p>
                                            <i><IoMdArrowRoundForward /></i>
                                            <p>[94]</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='index16'>
                                        <h6>SHANU SINGH</h6>
                                        <p>(11:00 AM)</p>
                                        <div className='index17'>
                                            <p>&#123;74&#125;</p>
                                            <i><IoMdArrowRoundForward /></i>
                                            <p>[26]</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='index16'>
                                        <h6>MUKESH</h6>
                                        <p>(05:10 AM)</p>
                                        <div className='index17'>
                                            <p>&#123;32&#125;</p>
                                            <i><IoMdArrowRoundForward /></i>
                                            <p>[94]</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='index16'>
                                        <h6>SHANU SINGH</h6>
                                        <p>(11:00 AM)</p>
                                        <div className='index17'>
                                            <p>&#123;74&#125;</p>
                                            <i><IoMdArrowRoundForward /></i>
                                            <p>[26]</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th colspan="2">
                                    <div className='index14'>
                                        <h6>RAVI</h6>
                                        <p>(04:00 AM)</p>
                                        <div className='index15'>
                                            <p>&#123;32&#125;</p>
                                            <i><IoMdArrowRoundForward /></i>
                                            <p>[94]</p>
                                        </div>
                                    </div>
                                </th>
                            </tr>

                        </thead>
                    </table>
                </div>



                <div className='index18'>
                    <h6>Letest Record Chart May 2024</h6>
                </div>

                <div className='index19'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: "#b76856" }}>Date</th>
                                <th>SONU SINGH</th>
                                <th>DINESH SHARMA</th>
                                <th>FARSAN HANA</th>
                                <th>GANPATI SINGH</th>
                                <th>GANESH SHARMAS</th>
                                <th>PENTOP RANA</th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <td>01-02</td>
                                <td></td>
                                <td></td>
                                <td>97</td>
                                <td>22</td>
                                <td>84</td>
                                <td>53</td>
                            </tr>
                            <tr>
                                <td>02-02</td>
                                <td>27</td>
                                <td>27</td>
                                <td>48</td>
                                <td>61</td>
                                <td>97</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>02-02</td>
                                <td>27</td>
                                <td>27</td>
                                <td>48</td>
                                <td>61</td>
                                <td>97</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>02-02</td>
                                <td>27</td>
                                <td>27</td>
                                <td>48</td>
                                <td>61</td>
                                <td>97</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>02-02</td>
                                <td>27</td>
                                <td>27</td>
                                <td>48</td>
                                <td>61</td>
                                <td>97</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>02-02</td>
                                <td>27</td>
                                <td>27</td>
                                <td>48</td>
                                <td>61</td>
                                <td>97</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <Table/>



                <div className='index12'>
                    <h6>DAILY ONLINE LIVE RESULT</h6>
                </div>



                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Games</th>
                                <th>OLD</th>
                                <th>NEW</th>
                                <th>CHART</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='index8'>
                                        <h6>MUKESH RANA</h6>
                                        <p>05:00 PM</p>
                                    </div>
                                </td>
                                <td className='index9'>50</td>
                                <td className='index10'>100</td>
                                <td>
                                    <div className='index11'>
                                        <p>Chart</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='index8'>
                                        <h6>MUKESH RANA</h6>
                                        <p>05:00 PM</p>
                                    </div>
                                </td>
                                <td className='index9'>50</td>
                                <td className='index10'>100</td>
                                <td>
                                    <div className='index11'>
                                        <p>Chart</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div>
                    <div className='index20'>
                        <h6>Timewise Superfast Results of February 11, 2024 & February 10, 2024</h6>
                    </div>

                    <div className='index21'>
                        <table>
                            <thead>
                                <th>
                                    Game List
                                </th>
                                <th>
                                    Sat.10th
                                </th>
                                <th>
                                    Sun.11th
                                </th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <div className='index22'>
                                            <h6>DINESH SINGH</h6>
                                            <div className='index23'>
                                                <p>at 05:00 AM</p>
                                                <span>Record Chart</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        32
                                    </td>
                                    <td>
                                        94
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='index22'>
                                            <h6>DINESH SINGH</h6>
                                            <div className='index23'>
                                                <p>at 05:00 AM</p>
                                                <span>Record Chart</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        32
                                    </td>
                                    <td>
                                        94
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='index22'>
                                            <h6>DINESH SINGH</h6>
                                            <div className='index23'>
                                                <p>at 05:00 AM</p>
                                                <span>Record Chart</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        32
                                    </td>
                                    <td>
                                        94
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='index22'>
                                            <h6>DINESH SINGH</h6>
                                            <div className='index23'>
                                                <p>at 05:00 AM</p>
                                                <span>Record Chart</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        32
                                    </td>
                                    <td>
                                        94
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='index22'>
                                            <h6>DINESH SINGH</h6>
                                            <div className='index23'>
                                                <p>at 05:00 AM</p>
                                                <span>Record Chart</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        32
                                    </td>
                                    <td>
                                        94
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <Alloldrecord/>

                    <Table1/>
                </div>

                {/* 
                <div className="Box2container">
                    <div className="box_2" id="Box2_box1">
                        <p>
                            ewnfbjfnrfwfj ioc krkfjnrfr frjkfrefe ehwbjwke jewbwn eww ejwjhw ei
                        </p>
                        <p>ewknekjwnfwekjfnref wejhw ehbwe webwj</p>
                        <p>jejeeewkhkhwe</p>
                        <h4>भारत का </h4>

                        <p>706723XXXX</p>
                        <Link
                            classname="btn btn-hire"
                            to="https://api.whatsapp.com/send?phone=8445044267"
                        >
                            <button className="Box2btn1"> whatsapp Chatt Me</button>
                        </Link>
                        <Link to="tel:+91.844.505.4232">
                            <button className="Box2btn2">CALL NOW</button>
                        </Link>
                    </div>
                    <div className="box_2" id="Box_box2">
                        <h3 className="boxxs2">NORMAL POST YE CONT. FIX RAHEGA</h3>
                        <h4>भारत का </h4>
                        <p>706723XXXX</p>
                        <Link to="tel:+91.844.505.4232">
                            <button style={{ marginLeft: "-2%" }} className="bttn1">
                                Call Now
                            </button>
                        </Link>
                        <Link
                            classname="btn btn-hire"
                            to="https://api.whatsapp.com/send?phone=8445044267"
                        >
                            <button className="bttnn2">WhatsApp</button>
                        </Link>
                    </div>
                    <div className="box_2" id="box2_box3">
                        <p style={{ textAlign: "center", color: "green" }}>
                            Some some thing from your idea and other
                        </p>
                        <p style={{ textAlign: "center", color: "#000" }}>
                            Some some thing from your idea and other tjhdbd uydf uyhv uwywv
                        </p>
                        <p style={{ textAlign: "center", color: "green" }}>भारत का CFO</p>
                        <p style={{ textAlign: "center", color: "red" }}>
                            Some some thing from your ewhdewui
                        </p>
                        <h5 style={{ textAlign: "center" }}>706723XXXX</h5>
                        <a
                            classname="btn btn-hire"
                            href="https://api.whatsapp.com/send?phone=8445044268"
                        >
                            <button className="Box3btn1">whatsapp Now</button>
                        </a>
                    </div>
                </div>





                <div className="container_1">
                    <Link>
                        <h2 className="onetext">ALL OLD RECORD CHART 2024</h2>
                    </Link>
                </div>

                <div className="container_2">
                    <h4 className="twotext">DENESH RECORD CHART 2024</h4>
                </div>

                <div className="container_2">
                    <h4 className="twotext">FARDEEN RECORD CHART 2024</h4>
                </div>

                <div className="container_2">
                    <h4 className="twotext">GUNJAN RECORD CHART 2024</h4>
                </div>

                <div className="container_2">
                    <h4 className="twotext">GANES RECORD CHART 2024</h4>
                </div>

                <div className="container_2">
                    <h4 className="twotext">RAJ RECORD CHART 2024</h4>
                </div>





                <div className='containeer'>
                    <h2 className='text1'>A table that only span half the page</h2>
                </div>
                <table style={{ width: "100%" }}>
                    <tr>
                        <th style={{ color: "red", textAlign: "center", backgroundColor: "yellow" }}>DATE</th>
                        <th style={{ textAlign: "center", backgroundColor: "yellow" }}>DESHRAJ</th>
                        <th style={{ textAlign: "center", backgroundColor: "yellow" }}>FRBDES</th>
                        <th style={{ textAlign: "center", backgroundColor: "yellow" }}>GZB</th>
                        <th style={{ textAlign: "center", backgroundColor: "yellow" }}>GANESH</th>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center" }}>01</td>
                        <td style={{ textAlign: "center" }}>XX</td>
                        <td style={{ textAlign: "center" }}>97</td>
                        <td style={{ textAlign: "center" }}>22</td>
                        <td style={{ textAlign: "center" }}>84</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center", backgroundColor: "#e9e8e8" }}>02</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>27</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>48</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>61</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>97</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center" }}>03</td>
                        <td style={{ textAlign: "center" }}>87</td>
                        <td style={{ textAlign: "center" }}>27</td>
                        <td style={{ textAlign: "center" }}>98</td>
                        <td style={{ textAlign: "center" }}>93</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center", backgroundColor: "#e9e8e8" }}>04</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>62</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>76</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>25</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>62</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center" }}>05</td>
                        <td style={{ textAlign: "center" }}>51</td>
                        <td style={{ textAlign: "center" }}>33</td>
                        <td style={{ textAlign: "center" }}>83</td>
                        <td style={{ textAlign: "center" }}>224</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center", backgroundColor: "#e9e8e8", }}>06</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8", }}>21</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8", }}>64</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8", }}>38</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8", }}>40</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center" }}>07</td>
                        <td style={{ textAlign: "center" }}>26</td>
                        <td style={{ textAlign: "center" }}>30</td>
                        <td style={{ textAlign: "center" }}>99</td>
                        <td style={{ textAlign: "center" }}>98</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center", backgroundColor: "#e9e8e8", }}>08</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>18</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>13</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>84</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>40</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center" }}>09</td>
                        <td style={{ textAlign: "center" }}>86</td>
                        <td style={{ textAlign: "center" }}>98</td>
                        <td style={{ textAlign: "center" }}>59</td>
                        <td style={{ textAlign: "center" }}>39</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center", backgroundColor: "#e9e8e8" }}>10</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>32</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>68</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>86</td>
                        <td style={{ textAlign: "center", backgroundColor: "#e9e8e8" }}>68</td>
                    </tr>
                    <tr>
                        <td style={{ color: "red", textAlign: "center" }}>11</td>
                        <td style={{ textAlign: "center" }}>94</td>
                        <td style={{ textAlign: "center" }}>50</td>
                        <td style={{ textAlign: "center" }}>XX</td>
                        <td style={{ textAlign: "center" }}>XX</td>
                    </tr>
                </table>
                <div>
                    <Link to="/table1">
                        <button className='btn1' >Jan 2024</button>
                    </Link>
                    <button className='btn2'>Mar 20024</button>

                </div> */}






            </div>
        </>
    )
}

export default Index
