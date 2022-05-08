import React from 'react';
import './IssueSection.css';
import { FaMapMarkerAlt, FaPhoneSquareAlt, FaGithub, FaTwitter } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
const IssueSection = () => {
    return (
        <section id="contact">

            <h1 className="section-header">Contact</h1>

            <div className="contact-wrapper">



                <form id="contact-form" className="form-horizontal">

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                        </div>
                    </div>

                    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                    <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                        <div className="alt-send-button">
                            <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                        </div>

                    </button>

                </form>



                <div className="direct-contact-container">

                    <ul className="contact-list">
                        <li className="list-item"><FaMapMarkerAlt></FaMapMarkerAlt><span className="contact-text place">City, State</span></li>

                        <li className="list-item"><FaPhoneSquareAlt></FaPhoneSquareAlt><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>

                        <li className="list-item"><BiMailSend></BiMailSend><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">emondx4@gmail.com</a></span></li>

                    </ul>

                    <hr />
                    <ul className="social-media-list">
                        <li><a href="#" target="_blank" className="contact-icon">
                            <FaGithub></FaGithub></a>
                        </li>
                        <li><a href="#" target="_blank" className="contact-icon">
                            <BsFacebook></BsFacebook></a>
                        </li>
                        <li><a href="#" target="_blank" className="contact-icon">
                            <FaTwitter></FaTwitter></a>
                        </li>
                        <li><a href="#" target="_blank" className="contact-icon">
                            <BsInstagram></BsInstagram></a>
                        </li>
                    </ul>
                    <hr />

                    <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                </div>

            </div>

        </section >
    );
};

export default IssueSection;