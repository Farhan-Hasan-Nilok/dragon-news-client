import React from 'react';
import {FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaTwitch, FaWhatsapp, FaTelegram} from 'react-icons/fa'
import news from '../../../assets/images/news.avif';
import paper from '../../../assets/images/paper.avif';
import trends from '../../../assets/images/trends.avif';
const RightSideNav = () => {
    return (
        <div>
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                <button type="button" className="btn btn-outline-primary "><FaGoogle/> Sign in with Google</button>
                <button type="button" className="btn btn-outline-dark"><FaGithub/> Sign in with Github</button>
            </div>

            <div className='mt-4'>
                <h5>Find us on</h5>
                <ul className="list-group">
                    <li className="list-group-item"><FaFacebook/> Facebook</li>
                    <li className="list-group-item"><FaInstagram/> Instagram</li>
                    <li className="list-group-item"><FaTwitter/> Twitter</li>
                    <li className="list-group-item"><FaWhatsapp/> WhatsApp</li>
                    <li className="list-group-item"><FaTwitch/> Twitch</li>
                    <li className="list-group-item"><FaTelegram/> Telegram</li>
                </ul>
            </div>

            <div className='mt-2'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={news} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={trends} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={paper} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;