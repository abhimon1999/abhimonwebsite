import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="contactus.html">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Address</h5>
                    <address>
		              aasd adad<br />
		              saddadsad<br />
		              adadad<br />
		              {/* <i className="fa fa-phone fa-lg"></i>: +91-7606928207<br /> */}
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:abhitechmon@gmail">
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github" href=""><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href=""><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href=""><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href=""><i className="fa fa-twitter"></i></a>
				{/*<a className="btn btn-social-icon btn-google" href=""><i className="fa fa-youtube"></i></a>*/}
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 | Made by Abhishek Mondal with o</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
