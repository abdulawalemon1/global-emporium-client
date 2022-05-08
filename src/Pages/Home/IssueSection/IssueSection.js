import React from 'react';
import './IssueSection.css';
import { FaMapMarkerAlt, FaPhoneSquareAlt, FaGithub, FaTwitter } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
const IssueSection = () => {
    return (
        <section id="contact">

            <h1 class="section-header">Contact</h1>

            <div class="contact-wrapper">



                <form id="contact-form" class="form-horizontal">

                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                        </div>
                    </div>

                    <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                    <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                        <div class="alt-send-button">
                            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                        </div>

                    </button>

                </form>



                <div class="direct-contact-container">

                    <ul class="contact-list">
                        <li class="list-item"><FaMapMarkerAlt></FaMapMarkerAlt><span class="contact-text place">City, State</span></li>

                        <li class="list-item"><FaPhoneSquareAlt></FaPhoneSquareAlt><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>

                        <li class="list-item"><BiMailSend></BiMailSend><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">emondx4@gmail.com</a></span></li>

                    </ul>

                    <hr />
                    <ul class="social-media-list">
                        <li><a href="#" target="_blank" class="contact-icon">
                            <FaGithub></FaGithub></a>
                        </li>
                        <li><a href="#" target="_blank" class="contact-icon">
                            <BsFacebook></BsFacebook></a>
                        </li>
                        <li><a href="#" target="_blank" class="contact-icon">
                            <FaTwitter></FaTwitter></a>
                        </li>
                        <li><a href="#" target="_blank" class="contact-icon">
                            <BsInstagram></BsInstagram></a>
                        </li>
                    </ul>
                    <hr />

                    <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                </div>

            </div>

        </section >
    );
};

export default IssueSection;