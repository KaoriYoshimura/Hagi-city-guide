import React from 'react';
import Logo from '../logo/logo';
import { footerLinks } from '../../constants/footerLinks';
import './footer.scss';
import airplain from '../../assets/icons/airplane.png';
import contact from '../../assets/icons/contact.png';
import info from '../../assets/icons/info.png';
import wifi from '../../assets/icons/wifi.png';

const setImage = (img: string | undefined) => {
    if (img === 'airplane.png') {
        return airplain;
    } if (img === 'contact.png') {
        return contact;
    } if (img === 'info.png') {
        return info;
    }
    return wifi;
};

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top-container">
                <div className="container">
                    <ul>
                        {footerLinks.map(link => {
                            return (
                                <li
                                    className="footer-ii"
                                    key={link.id}
                                >
                                    <a href={link.path} rel="noopener noreferrer" target="_blank">
                                        <div className="link-item">
                                            <img
                                                src={setImage(link.img)}
                                                alt={link.text}
                                            />
                                            <span className="icon-label">{link.text}</span>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom-container">
                <div className="footer-bottom-content container">
                    <div className="logo-container">
                        <Logo blackVariant />
                    </div>
                    <div className="text-container">
                        <p>
                            Medieinstitutet i Sverige<br />
                            Tulegatan 41<br />
                            113 53 STOCKHOLM</p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
