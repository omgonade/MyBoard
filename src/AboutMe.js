import React, { useState } from 'react'
import Mylogo from './img/LOGO2bgR.png';
import OM from './img/OM.jpg';
import './AboutMe.css';
import resumePDF from './asset/Om Anil Gonade_CV1.pdf';
import Modal from 'react-modal';

export const AboutMe = () => {
    const handleDownloadResume = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = resumePDF;
        downloadLink.download = 'Om Anil Gonade(Resume).pdf';
        downloadLink.click();
    };
    return (
        <div>
            <div className='main'>
                <div className='mylogo'>
                    <img src={Mylogo} />
                </div>
                <div className='om'>
                    <img src={OM} />
                </div>
                <div className='name'>Om Anil Gonade</div>
                <div class="description">
                    <span style={{ fontWeight: 'bold', fontSize: '40px', color: 'black' }}>About Me</span>
                    <p>I am a highly motivated fourth-year B.E. Computer Science student with a strong academic background and a passion for web development and machine learning projects. Throughout my academic journey, I have consistently achieved excellent results and demonstrated exceptional leadership and communication skills.</p>
                    <br />
                    <span style={{ fontWeight: 'bold', fontSize: '40px', color: 'black' }}>My Skills</span>
                    <p>My skills include proficiency in HTML, CSS, JavaScript, React.js, MySQL, C++, Java, and Python. I have hands-on experience in web development and have worked on projects involving front-end.</p>
                    <br />
                    <span style={{ fontWeight: 'bold', fontSize: '40px', color: 'black' }}>Training and Certifiactions</span>
                    <p>In addition to my technical skills, I have completed online courses and training programs to enhance my knowledge in various areas. I have successfully completed the National Blockchain Project (NBP) summer training program at <a href="https://drive.google.com/file/d/1R3fUybzQcD4d7sI2pVQuTVWfi_pUlLHC/view?usp=sharing" style={{ color: 'inherit' }}>IIT Kanpur</a>, where I gained expertise in web development. I am proud to mention that I am certified in <a href="https://drive.google.com/file/d/18XwmlZV4_ERhXuW17o1U-rBW54MqSSqE/view?usp=sharing" style={{ color: 'inherit' }}>Software Testing</a> and <a href="https://drive.google.com/file/d/13-nxtFWU25_nEqnisiPLlqPBIuJ7E0tL/view?usp=sharing" style={{ color: 'inherit' }}>Data Mining</a> from NPTEL, with an exceptional achievement of being ranked in the top 5% in the Data Mining exam. This recognition highlights my dedication to continuous learning and professional growth.</p>
                    <br />
                    <span style={{ fontWeight: 'bold', fontSize: '40px', color: 'black' }}>Driven Computer Science Student Making an Impact</span>
                    <p>As a dedicated and driven individual, I am always seeking new challenges and opportunities to expand my knowledge and skills in the field of computer science. I am excited to contribute my expertise and make a positive impact in the industry.</p>
                </div>
                <div className='viewResume'>
                    <button onClick={handleDownloadResume} >Download Resume</button>
                </div>
            </div>            
        </div>
    )
}
